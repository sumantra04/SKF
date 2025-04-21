import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { DonorPartner } from './DonorParnterSection'; // Adjust the path if necessary

interface InfinitePartner {
  quote: string;
  name: string;
  title: string;
}
interface PartnerCardProps {
  partners: DonorPartner[]; // Adjust the type here based on where you define it
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partners }) => {
  const infinitePartners: InfinitePartner[] = partners.map((partner) => ({
    quote: "", // empty value since we dont need it
    name: partner.name,
    title: "", // empty value since we dont need it
  }));

  return (
    <div className="h-[20rem] bg-white rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={infinitePartners}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default PartnerCard;
