import React from 'react';
import Image from 'next/image';
import {Button} from '@/components/ui/button'
import Link from 'next/link';
interface FeatureSectionProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional image
  imageAlt?: string; // Alt text for the image
  reverse?: boolean; // Reverse layout (image on right)
  bgColor?: string; // Optional background color class
  linkUrl?: string; // Optional link URL
  linkText?: string; // Optional link text
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ 
  title, 
  description, 
  imageUrl, 
  imageAlt,
  reverse = false,
  bgColor = 'bg-white',// Default background color
  linkUrl,
  linkText = 'Learn More'
}) => {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 px-4 md:px-0">
        {/* Image (optional) */}
        {imageUrl && (
          <div className={`w-full md:w-1/2 ${reverse ? 'order-last md:order-first' : ''}`}>
            <Image 
              src={imageUrl} 
              alt={imageAlt || 'Feature Image'} 
              width={500} 
              height={350} 
              className="rounded-lg shadow-md h-[350px] w-[500px] object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 text-lg md:text-xl">{description}</p>
          {/* Conditional Link Rendering */}
          {linkUrl && (
            <Link href={linkUrl}>
              <Button className="mt-4">{linkText}</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
