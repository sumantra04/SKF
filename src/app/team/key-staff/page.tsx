'use client'
import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogHeader,DialogTitle,DialogDescription } from '@/components/ui/dialog'

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}


const teamData: TeamMember[] = [
    {
    name: 'Sumantra',
    role: 'Developer SKF',
    bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, corporis nam ea voluptates reprehenderit ad soluta. Modi, et. Eveniet eligendi modi illo doloribus officia ipsum ea sapiente assumenda! Vitae, quisquam?",
    imageUrl: '/assets/images/images.jpeg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/',
      twitter: 'https://x.com/',
      facebook:'https://www.facebook.com/'
    },
  },

];


interface TeamSectionProps {
  team: TeamMember[];
  title?:string
}



const TeamSection:React.FC<TeamSectionProps> = ({ team,title="Our Amazing Team" }) => {


  return (
    <section className="bg-white py-16" aria-labelledby="team-section">
      <div className="container mx-auto px-4 md:px-0">
        <h2 id="team-section" className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
           {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};




const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {

  return (
    <Dialog>
    <DialogTrigger asChild>
      <Card className="transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer">
      <CardHeader className="relative">
        <Image
          src={member.imageUrl}
          alt={member.name}
          width={400}
          height={300}
          className="object-cover h-[300px] w-full rounded-t-lg"
        />
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <CardTitle className="text-xl font-bold text-gray-800 text-center">
            {member.name}
          </CardTitle>
          <CardDescription className="text-gray-600 text-center">
            {member.role}
          </CardDescription>
        {member.socialLinks && (
          <div className="flex space-x-4 mt-2">
            {member.socialLinks.linkedin && (
              <Link
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
              >
                <FaLinkedin size={20} />
              </Link>
            )}
            {member.socialLinks.twitter && (
              <Link
                href={member.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
              >
                <FaTwitter size={20} />
              </Link>
            )}
            {member.socialLinks.facebook && (
              <Link
                href={member.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
              >
                <FaFacebook size={20} />
              </Link>
            )}
          </div>
        )}
        </CardContent>
      </Card>

    </DialogTrigger>
    <DialogContent className="sm:max-w-[90vw] md:max-w-[60vw] lg:max-w-[40vw]">
    <DialogHeader>
      <DialogTitle className="text-2xl font-bold text-gray-800 mb-2">
        {member.name}
      </DialogTitle>
      <DialogDescription className="text-gray-700 mb-2">
        {member.role}
      </DialogDescription>
    </DialogHeader>
          <p className="text-gray-600 whitespace-pre-line"> {/* Preserve formatting */}
            {member.bio}
          </p>
          {member.socialLinks && (
            <div className="mt-6 flex space-x-4">
              {member.socialLinks.linkedin && (
                <Link
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaLinkedin className="h-6 w-6" />
                </Link>
              )}
              {member.socialLinks.twitter && (
                <Link
                  href={member.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter className="h-6 w-6" />
                </Link>
              )}
              {member.socialLinks.facebook && (
                <Link
                  href={member.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaFacebook className="h-6 w-6" />
                </Link>
              )}
            </div>
          )}
          <DialogClose  className='text-blue-600 mt-4' >
            Close
          </DialogClose>
        </DialogContent>

  </Dialog>
  );
};




export default  function KeyStaffPage() {

  return <TeamSection team={teamData} />;
}
