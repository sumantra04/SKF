// components/DonorPartnerLogo.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface DonorPartner {
  name: string;
  logo: string;
  link?: string; 
}

const DonorPartnerLogo: React.FC<DonorPartner> = ({ name, logo, link }) => {
  return (
    <Link href={link || ''} target={link ? '_blank' : '_self'} rel={link ? 'noopener noreferrer' : ''} className="block">  {/* Use <a> tag for better semantics */}
      <motion.div
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative w-36 h-36 md:w-336 md:h-48" // Responsive sizing with Tailwind
      >
        <Image
          src={logo}
          alt={`${name} Logo`}
          fill // Fill the container
          sizes="(max-width: 1000px) 100vw, (max-width: 1024px) 50vw, 33vw" // Optimized image sizes
          style={{ objectFit: 'contain' }} // Ensure logo aspect ratio is maintained
          priority={true}
        />
      </motion.div>
    </Link>
  );
};

export default DonorPartnerLogo;

