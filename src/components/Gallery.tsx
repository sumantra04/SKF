'use client';
import React from 'react';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog'


interface GalleryImage {
  src: string;
  alt: string;
  category: string; // Add a category for tabs
}

interface GalleryProps {
  images: GalleryImage[];
  categories: string[]; // Array of unique categories
}

const Gallery: React.FC<GalleryProps> = ({ images, categories }) => {
  //Remove the state selectedImage

  return (
    <section className="py-16" aria-labelledby="gallery-section">
      <div className="container mx-auto px-4 md:px-0">
        <h2 id="gallery-section" className="text-3xl md:text-4xl font-bold text-blue-500 text-center mb-8">
          Gallery
        </h2>

        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="justify-center flex items-center">
            {categories?.map((category) => (
              <TabsTrigger value={category} key={category} className='bg-white'>
                <Button 
                className={`bg-white border-2 border-blue-500 text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-blue-500 hover:text-white  transition duration-300`}>
                  {category}
                  </Button>
              </TabsTrigger>
            ))}
          </TabsList>
          {categories?.map((category) => (
            <TabsContent value={category} key={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images
                  .filter((image) => image.category === category)
                  .map((image) => (
                    <Dialog key={image.src}>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer transform transition duration-300 ease-in-out hover:scale-105">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={400}
                            height={300}
                            className="object-cover w-full h-[200px] rounded-lg"
                          />
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[90vw] md:max-w-[60vw] lg:max-w-[40vw]">
                        <DialogClose className="text-xl text-blue-600 hover:text-blue-900 absolute top-2 right-2">
                         
                        </DialogClose>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={800}
                          height={600}
                          className="object-contain w-full h-auto max-h-[80vh]"
                        />
                        <p className="text-center mt-4 text-gray-600">{image.alt}</p>
                      </DialogContent>
                    </Dialog>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
