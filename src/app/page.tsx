'use client';

import React from 'react';
import HomePage from '@/components/Homepage';



export default function Home() {

  const galleryImages = [
    {
      src: '/assets/images/demo1.jpg',
      alt: 'Imag 1 description',
      caption: 'lorem ipsum',
      category: 'lorem ipsum',
    },
    {
      src: '/assets/images/demo2.jpg',
      alt: 'Image 2 Description',
      caption: 'lorem ipsum',
      category: 'lorem ipsum',
    },
  ];
  
  
  const impactData = [
    { title: 'mushroom plantation', number: '30+', description: "Lorem ipsum dolo", link: '/educated' },
  ];
  
  const partners = [
    { name: 'UNICEF', logo: '/assets/images/partner1.png'},
    { name: 'UNO', logo: '/assets/images/partner2.png'},
  ];
  

  return <HomePage impactData={impactData} galleryImages={galleryImages} partners={partners} />;}