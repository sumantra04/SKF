'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardTitle, CardDescription, CardHeader } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHandshake, FaHandsHelping, FaWheelchair, FaLightbulb, FaUsers }  from 'react-icons/fa';

interface ValueItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  key:string
}

const valuesData: ValueItem[] = [
  {
    key: 'Unity',
    title: 'Unity',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio totam ab, blanditiis quaerat eius quae aliquid cum repellat, dignissimos labore ipsam veniam necessitatibus optio beatae. Necessitatibus eaque reprehenderit ad natus.",
    icon: <FaHandshake className="text-5xl text-purple-500 mb-2" />,
  },
];

const CoreValuesPage: React.FC = () => {
  const [expandedValue, setExpandedValue] = useState<string | null>(null);

  const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 10,
        },
      },
      collapsed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
      expanded: { height: 'auto', opacity: 1, transition: { duration: 0.5 } },
    };

  const handleIconClick = (valueKey: string) => {
    setExpandedValue(expandedValue === valueKey ? null : valueKey);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-yellow-400 to-orange-500 py-20 text-white">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              Our Core Values
            </h1>
            <p className="text-lg md:text-xl drop-shadow-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit dolores hic commodi. Voluptas pariatur modi veniam, velit, similique natus magnam porro obcaecati perferendis repudiandae qui, commodi officia laborum aliquid.
            </p>
          </div>
          {/* Optional: Add a subtle image overlay for visual interest */}
          <div className="absolute inset-0 opacity-50">
            <Image
              src="" // Replace with your image
              alt="Core Values Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valuesData.map((value) => (
                <motion.div
                    key={value.key}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="transform transition duration-300 ease-in-out hover:scale-105"
                  >
                  <Card className="overflow-hidden">
                    <CardHeader className="flex flex-col items-center cursor-pointer" onClick={() => handleIconClick(value.key)}>
                         {value.icon}
                    </CardHeader>
                    <CardTitle className="text-xl mb-4 text-center font-bold text-gray-800">
                            {value.title}
                            </CardTitle>
                     <AnimatePresence initial={false} mode="wait">
                     {expandedValue === value.key && (
                        <motion.div
                        key={value.key}
                        variants={cardVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        >
                        <CardContent className="p-4">
                            <CardDescription className="text-gray-600 text-left whitespace-pre-line">
                            {value.description}
                            </CardDescription>
                        </CardContent>
                        </motion.div>
                        )}
                    </AnimatePresence>
                  </Card>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CoreValuesPage;
