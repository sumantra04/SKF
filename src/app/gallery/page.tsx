'use client'
import React from 'react';
import Gallery from '@/components/Gallery'

const galleryImages: { src: string; alt: string; category: string }[] = [
    {
      src: '/assets/images/demo1.jpg', // Replace with actual image paths
      alt: 'Image Description',
      category: 'images',
    },
    {
      src: '/assets/images/demo2.jpg',
      alt: 'Video Description',
      category: 'video',
    },
  ];
  
  const categories = Array.from(new Set(galleryImages.map(img => img.category))); // Use Array.from
  const GalleryPage: React.FC = () => {
    return (
      <div>
        <Gallery images={galleryImages} categories={categories} />
      </div>
    );
  };

export default GalleryPage;
