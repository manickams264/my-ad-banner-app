"use client";

import React, { useState } from "react";
import Image from "next/image";
import AdBanner from "./components/AdBanner";
import EditBanner from "./components/EditBanner";
import bannersData from "./data/banners.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [banners, setBanners] = useState(bannersData);
  const [editBanner, setEditBanner] = useState<any>(null);

  const handleEdit = (banner: any) => {
    setEditBanner(banner);
  };

  const handleSave = (updatedBanner: any) => {
    setBanners(banners.map((banner) =>
      banner.id === updatedBanner.id ? updatedBanner : banner
    ));
    setEditBanner(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-10 px-5">
      <div className="container mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">Ad Banner Showcase</h1>
          <p className="text-lg text-white mt-2">Discover our featured banners and edit them as needed.</p>
        </header>
  
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {banners.map((banner, index) => {
            // Define a different background color for each banner
            const bannerBackgrounds = [
              'bg-yellow-100',
              'bg-blue-100',
              'bg-green-100',
              'bg-red-100',
              'bg-purple-100',
              'bg-orange-100',
            ];
            
            const backgroundColor = bannerBackgrounds[index % bannerBackgrounds.length];
  
            return (
              <div
                key={banner.id}
                className={`${backgroundColor} relative p-5 rounded-lg shadow-lg hover:scale-105 transform transition-transform`}
              >
                <Image
                  src={banner.image}
                  alt={banner.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg border border-gray-300"
                />
                <div className="mt-4">
                  <h2 className="text-xl font-semibold text-gray-800">{banner.title}</h2>
                  <p className="text-gray-600 mt-2">{banner.description}</p>
                </div>
                <button
                  onClick={() => handleEdit(banner)}
                  className="absolute top-2 right-2 p-2 rounded-full hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'transparent' }}
                >
                  <FontAwesomeIcon icon={faPencilAlt} className="text-red-500" />
                </button>
              </div>
            );
          })}
        </div>
  
        {editBanner && (
          <EditBanner
          banner={editBanner}
          onSave={handleSave}
          onClose={() => setEditBanner(null)}
  />
        )}
      </div>
    </main>
  );
}
