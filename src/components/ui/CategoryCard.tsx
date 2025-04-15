'use client';

import React from 'react';
import Image from 'next/image';

type CategoryCardProps = {
  imageSrc: string;
  title: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ imageSrc, title }) => {
  return (
    <div className="category-card cursor-pointer relative h-64 overflow-hidden rounded-lg">
      <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="transition-transform duration-300 hover:scale-105" />
      <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
        <h2 className="text-white text-xl font-bold text-center px-2">{title}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
