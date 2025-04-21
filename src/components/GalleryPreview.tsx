import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; 
import { Card, CardContent,CardDescription } from '@/components/ui/card'; 

interface GalleryPreviewProps {
  images: { 
    src: string; 
    alt: string; 
    caption?: string; // Add an optional caption property to your image objects
  }[];
  galleryLink: string; 
}

const GalleryPreview: React.FC<GalleryPreviewProps> = ({ images, galleryLink }) => {
  return (
    <section className="py-16 bg-white" aria-labelledby="gallery-preview-title">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2 id="gallery-preview-title" className="text-3xl md:text-4xl font-bold text-blue-500 mb-8">
          Our Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.slice(0, 3).map((image, index) => ( 
            <Card key={index} className="relative rounded-lg overflow-hidden shadow-md transform transition duration-300 ease-in-out hover:scale-105">
              <Link href={galleryLink}> 
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400} 
                  height={300} 
                  className="object-cover w-full h-[300px] rounded-t-lg"
                />
              </Link>
              {/* Add CardContent for caption */}
              {image.caption && ( // Conditionally render the caption
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {image.caption}
                  </CardDescription>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
        <Link href={galleryLink}>
          <Button className="mt-8">View Full Gallery</Button>
        </Link>
      </div>
    </section>
  );
};

export default GalleryPreview;
