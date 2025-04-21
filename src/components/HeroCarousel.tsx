'use client';
import React, { useState, useEffect,useRef } from 'react';
import Image from 'next/image';
// import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'
// import type {Timeout} from 'node:timers'

type Timeout = ReturnType<typeof setTimeout>;

interface HeroSlide {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
}
const slides: HeroSlide[] = [
  {
    title: 'Lorem Ipsum',
    description: "Lorem ipsum, dolor sit amet",
    imageUrl: '/assets/images/demo1.jpg',
    imageAlt: "Lorem ipsum, dolor sit amet",
    buttonText:'Learn More',
    buttonLink: '/team/key-staff',
  },
  {
    title: 'Lorem Ipsum',
    description: "Lorem ipsum, dolor sit amet",
    imageUrl: '/assets/images/demo2.jpg',
    imageAlt: "Lorem ipsum, dolor sit amet",
    buttonText:'Explore',
    buttonLink: '/gallery',
  },
  {
    title: 'Lorem Ipsum',
    description: "Lorem ipsum, dolor sit amet",
    imageUrl: '/assets/images/demo3.jpg',
    imageAlt: "Lorem ipsum, dolor sit amet",
    buttonText:'Discover',
    buttonLink: '/gallery',
  },
  // Add more slides...
];



const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    // Clear existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Start new timer
    timerRef.current = setTimeout(nextSlide, 5000); // 5 seconds

    // Cleanup: clear timer on unmount
    return () => clearTimeout(timerRef.current || 0);
  }, [currentSlide]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="relative w-full h-[500px] md:h-[600px]">
            <Image
              src={slides[currentSlide].imageUrl}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority={true}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-10">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-white text-md md:text-lg mb-6">
                {slides[currentSlide].description}
              </p>
              {slides[currentSlide].buttonText && slides[currentSlide].buttonLink && (
                <Link
                  href={slides[currentSlide].buttonLink || ''}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
                >
                  {slides[currentSlide].buttonText}
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;