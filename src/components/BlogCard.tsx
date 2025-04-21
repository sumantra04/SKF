"use client"
import React,{ useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author?: string;
  videoUrl?: string;
  link?: string;
}

export const BlogCard: React.FC<BlogPost> = ({ slug, title, excerpt, coverImage, date, author, videoUrl, link }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Card className="transform transition duration-300 ease-in-out hover:scale-105">
      <Link href={link || `/blog/${slug}`}>
        <CardHeader>
          {showVideo && videoUrl ? (
            <video
              src={videoUrl}
              controls
              autoPlay={false}
              muted
              className="rounded-t-lg w-full h-[200px] object-cover"
            />
          ) : (
            <Image
              src={coverImage}
              alt={title}
              width={600}
              height={400}
              onClick={() => videoUrl && setShowVideo(true)}
              className="rounded-t-lg w-full h-[200px] object-cover cursor-pointer"
            />
          )}
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl font-bold mb-2 text-blue-500">{title}</CardTitle>
          <p className="text-gray-500 text-sm mb-4">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            {author && `by ${author}`}
          </p>
          <CardDescription className="text-gray-700 line-clamp-3">{excerpt}</CardDescription>
        </CardContent>
      </Link>
    </Card>
  );
};