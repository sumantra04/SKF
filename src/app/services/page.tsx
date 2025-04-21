'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-500 to-blue-500 py-20 text-white">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              Our Services
            </h1>
            <p className="text-lg md:text-xl drop-shadow-md">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo et commodi nobis consequatur, perferendis vitae minus laborum? Architecto ratione ipsam autem aliquid corrupti, eum delectus illum maxime. Aut, eveniet tenetur?
            </p>
          </div>
          {/* Optional: Add a subtle image overlay for visual interest */}
          <div className="absolute inset-0 opacity-50">
            <Image
              src="" // Replace with your image
              alt="Services"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/images/educational-resources.jpg" // Replace with relevant image
                  alt="Educational Resources"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    lorem ipsum
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat eaque molestiae, ducimus illum ut facilis. Accusamus ipsum, tempora voluptatem voluptatum ab facilis possimus, eaque aspernatur nihil fugit repellat, explicabo qui.
                  </CardDescription>
                  <Link href="/services/educational-resources">
                    <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                      Explore Resources
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              

              {/*  Add more services as needed */}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto text-center px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Partner with Us
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, inventore expedita quam nobis alias, rem necessitatibus ad ex itaque nihil voluptas commodi aliquam velit sit ducimus animi earum, labore ipsam.
            </p>
            <Link href="/contact">
              <Button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                lets do it
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
