import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion

interface ThematicArea {
  slug: string; // Add slug for dynamic routing
  title: string;
  icon: React.ReactNode;
  description: string;
  link?: string; // Add an optional external link
}

const ThematicAreaCard: React.FC<ThematicArea> = ({ slug, title, icon, description, link }) => {
  // const cardVariants = { // Framer Motion animation
  //     offscreen: { y: 100, opacity: 0 },
  //     onscreen: {
  //       y: 0,
  //       opacity: 1,
  //       transition: {
  //         type: "spring",
  //         bounce: 0.4,
  //         duration: 0.8
  //       }
  //     }
  //   };
    
    
  return (
    <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="transform transition duration-300 ease-in-out hover:scale-105">

    <Link href={link || `/thematic-areas/${slug}`}> {/* Use internal routing by default, but allow external links */}
      <Card >
        <CardHeader className="flex flex-col items-center">
          <div className="text-blue-500 text-4xl mb-4">
            {icon}
          </div>
          <CardTitle className="text-2xl font-bold text-blue-500 text-center">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-600 text-center text-left"> {/* Center the description text */}
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
    </motion.div>

  );
};

export default ThematicAreaCard;