'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

const ProgramsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-500 to-teal-500 py-20 text-white">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              Our Programs
            </h1>
            <p className="text-lg md:text-xl drop-shadow-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sed impedit fugiat qui voluptatem reiciendis placeat earum facilis, vero blanditiis praesentium repellendus neque, eligendi ullam eveniet fuga nobis! Odit, nulla.
            </p>
          </div>
          {/* Optional: Add a subtle image overlay for visual interest */}
          <div className="absolute inset-0 opacity-50">
            <Image
              src="" // Replace with your image
              alt="Programs Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Program 1 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/images/coding-bootcamp.jpg" // Replace with relevant image
                  alt="Coding Bootcamp for Deaf Youth"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    lorem ipsum
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint minima quibusdam, facilis rem nihil a corrupti voluptate nobis laudantium dolore non, quae quo ipsam esse distinctio consequuntur id cumque! Necessitatibus.
                  </CardDescription>
                  <Link href="/programs/coding-bootcamp">
                    <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Program 2 */}

            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Support us
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi reiciendis eos natus sapiente, deserunt incidunt quae maxime suscipit quibusdam modi, pariatur sit porro commodi quidem est. Praesentium, blanditiis commodi.
            </p>
            <Link href="/donate">
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                Donate
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProgramsPage;
