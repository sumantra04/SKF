'use client';
import React from 'react';
import Image from 'next/image'; 
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'
import Link from 'next/link';

const MissionPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-500 to-purple-500 py-20 text-white">
          <div className="container mx-auto text-center relative z-10"> {/* Add z-index */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">Our Mission</h1>
            <p className="text-lg md:text-xl drop-shadow-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quo aliquid, ut recusandae quis et repellendus, praesentium repellat in non deleniti nostrum optio veniam incidunt dolorum. Mollitia officiis autem commodi?
            </p>
          </div>
          {/* Optional: Add a subtle image overlay for visual interest */}
          <div className="absolute inset-0 opacity-50"> 
            <Image 
              src="" // Replace with your image
              alt="Hero Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-0 text-center">
            <p className="text-gray-800 text-lg md:text-xl mb-8">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit reprehenderit sit quasi, officiis in maxime natus nostrum neque modi quod itaque dolorum odit, eum illo delectus ex iusto. Aut, eum.
            </p>
          </div>
        </section>

        {/* How We Achieve Our Mission Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
              How We Achieve Our Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card className="transform transition duration-300 ease-in-out hover:scale-105">
                <Image
                  src="" // Replace with relevant image
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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum laboriosam consectetur asperiores praesentium aperiam, dolores exercitationem eius quas tempora fuga impedit, itaque fugiat delectus? Nihil consectetur corporis ea quam ipsa!
                  </CardDescription>
                </CardContent>
              </Card>
              {/*add extra cards if required*/}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Join Us in Our Mission
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor explicabo error nemo quia, esse vero harum consequuntur eligendi mollitia sed impedit tempora aperiam fugiat magnam possimus laborum rem molestiae consectetur.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/donate">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
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

export default MissionPage;
