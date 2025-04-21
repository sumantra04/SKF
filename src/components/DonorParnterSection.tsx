import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DonorPartnerLogo from './DonorPartnerLogo';
// import PartnerCard from './ParnterCard';

export interface DonorPartner {
  name: string;
  logo: string;
  link?: string;
}

interface DonorPartnerSectionProps {
  partners?: DonorPartner[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const DonorPartnerSection: React.FC<DonorPartnerSectionProps> = ({ partners=[] }) => {
  // Duplicate the partners array to create the illusion of infinite scrolling
  const extendedPartners = [...partners];

  return (
    <section className="py-16 bg-white " aria-labelledby="donor-partner-section-title">
      <div className="container mx-auto flex flex-wrap items-center justify-center flex-col px-4 md:px-0 text-center">
        <h2 id="donor-partner-section-title" className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Our Partners
        </h2>

       {/* <PartnerCard partners={extendedPartners} /> */}

        <motion.div
          className="flex overflow-hidden" // Use overflow-hidden for smooth transitions
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex flex-col md:flex-row  gap-6 md:gap-10 animate-scroll"
            style={{ animationDuration: `${partners.length * 3}s` }} // Adjust speed here
          >
            <AnimatePresence initial={false}> {/* Use AnimatePresence for smooth exit animations */}
              {extendedPartners.map((partner) => (
                <motion.div
                  key={partner.name}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.5 }}
                >
                  <DonorPartnerLogo {...partner} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

