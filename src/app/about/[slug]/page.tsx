'use client'
import React from 'react';
import thematicAreas from '@/lib/data';


interface Params {
  slug: string;
}

export default function ThematicAreaDetailPage({ params }: { params: Params }) {
  // Get the thematic area slug from the URL parameters
  const id = params.slug; 

  // Find the matching thematic area based on the slug
  const thematicArea = thematicAreas.find(area => area.slug === id);

  if (!thematicArea) {
    // Handle case where no matching thematic area is found
    return <div>Thematic area not found.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <main className="container mx-auto px-4 md:px-0 py-16">
        <div className="max-w-3xl mx-auto"> {/* Limit content width for readability */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
            {thematicArea?.title}
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            {thematicArea.description}
          </p>

          {/* Display the icon */}
          <div className="flex justify-center mb-8 w-48 h-48">
            {thematicArea.icon}
          </div>

          {/* Display the detailed content */}
          <div className="prose text-gray-700"> {/* Apply Tailwind's prose class for better typography */}
            {thematicArea.content}
          </div>
        </div>
      </main>
    </div>
  );
}

