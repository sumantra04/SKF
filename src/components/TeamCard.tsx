import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card'; // Assuming you have a Card component from Shadcn UI

interface TeamMemberCardProps {
  member: {
    name: string;
    role: string;
    bio: string; // Not used in this component, but good to keep for consistency
    imageUrl: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, isSelected, onClick }) => {
  return (
    <button onClick={onClick} className="relative">
      <Card 
        className={`transform transition duration-300 ease-in-out 
          ${isSelected ? 'ring-2 ring-blue-500' : 'hover:scale-105'}
        `}
      >
        <Image
          src={member.imageUrl}
          alt={member.name}
          width={400} 
          height={300} 
          className="object-cover h-[300px] w-full rounded-t-lg" // Apply rounded corners to the top
        />
        <CardContent className="flex flex-col items-center justify-center">
          <CardTitle className="text-xl font-bold text-gray-800">
            {member.name}
          </CardTitle>
          <CardDescription className="text-gray-600">
            {member.role}
          </CardDescription>
        </CardContent>
      </Card>
    </button>
  );
};

export default TeamMemberCard;
