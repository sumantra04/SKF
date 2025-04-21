import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link'; // Import the Link component

interface ImpactCardProps {
  title: string;
  number?: string | number;
  description: string;
  icon?: React.ReactNode;
  link?: string; // Make link optional
}

export const ImpactCard: React.FC<ImpactCardProps> = ({ title, number, description, icon, link }) => {
  return (
    <Card className="transform transition duration-300 ease-in-out hover:scale-105">
      <Link href={link || ""}> {/* If no link is provided, don't navigate */}
      <CardHeader className="flex flex-col items-center"> {/* Center content vertically */}
        {icon && (
          <div className="text-blue-500 text-4xl mb-4">
            {icon}
          </div>
        )}
        <CardTitle className="text-2xl font-bold text-blue-500 text-center"> {/* Center the title */}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center"> {/* Center content horizontally */}
        {number && (
          <p className="text-4xl font-bold text-gray-800 mb-2">
            {number}
          </p>
        )}
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
    </Link>
    </Card>
  );
};

