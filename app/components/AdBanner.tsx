"use client";

import React from 'react';

interface AdBannerProps {
  title: string;
  description: string;
  image: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ title, description, image }) => {
  return (
    <div className="ad-banner p-4 m-4 border rounded-md shadow-md">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-md" />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default AdBanner;
