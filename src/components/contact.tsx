'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
// import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle'); // New state for form status

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('loading'); // Set status to loading

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setName('');
        setEmail('');
        setMessage('');
        setStatus('success'); // Set status to success
      } else {
        setStatus('error'); // Set status to error
        const errorData = await response.json();
        console.error('Error submitting form:', errorData.message);
      }
    } catch (error) {
      setStatus('error'); // Set status to error
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main className="container mx-auto px-4 md:px-0 py-16">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold text-center">
              Contact Us
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              We&apos;d love to hear from you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* <Form> */}
              <div>
                <Label htmlFor="name" className="block mb-2">
                  Your Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="block mb-2">
                  Your Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="block mb-2">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full"
                  rows={5}
                  required
                />
              </div>
              <CardFooter className="text-center">
                <Button type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </CardFooter>
              {/* Feedback messages */}
              {status === 'success' && (
                <p className="text-green-500 text-center">
                  Thank you! Your message has been sent.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center">
                  Oops! There was an error. Please try again later.
                </p>
              )}
              {/* </Form> */}
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
