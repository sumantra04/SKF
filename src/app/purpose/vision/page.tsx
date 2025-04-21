'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

const VisionPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-500 to-green-500 py-20 text-white">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              Our Vision
            </h1>
            <p className="text-lg md:text-xl drop-shadow-md">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam dolorum voluptates? Facere, doloribus! Veniam a corrupti rem assumenda nemo! Quae quos soluta molestias, nam ratione ipsa fugit beatae illum!
            </p>
          </div>
          {/* Optional: Add a subtle image overlay for visual interest */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src="" // Replace with your image
              alt="image not found2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* Vision Statement Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-0 text-center">
            <p className="text-gray-800 text-lg md:text-xl mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ut aspernatur, fugiat eos voluptas magnam at tempore odio eveniet dolores officia ad sequi, voluptatem ipsam ipsum cumque sed? Sint, dolorem.
            </p>
          </div>
        </section>

        {/* What Our Vision Looks Like Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
              What Our Vision are
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/assets/icons/image" // Replace with relevant image
                  alt="image not found"
                  width={400}
                  height={300}
                  className="object-cover h-[300px] w-full rounded-t-lg"
                />
                <CardContent>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    lorem ipsum
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur ullam aperiam quo, sit ipsam quasi ducimus obcaecati earum rem inventore natus architecto impedit sequi velit ea blanditiis placeat amet!
                  </CardDescription>
                </CardContent>
              </Card>

              {/*add cards as required*/}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              lorem ipsum
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi explicabo quas doloribus neque? Quidem est quam doloribus, nobis animi corrupti maiores tenetur nemo autem necessitatibus. Magnam eum nisi corrupti consequatur.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/donate">
                <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                  Donate
                </Button>
              </Link>
              <Link href="/get-involved">
                <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full transition duration-300">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VisionPage;