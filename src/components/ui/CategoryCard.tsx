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
      <Image src={imageSrc} alt={title} objectFit="cover" fill className="transition-transform duration-300 hover:scale-105" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h2 className="absolute flex items-center justify-center text-white text-xl w-full h-full font-bold text-center px-2">{title}</h2>
    </div>
  );
};

export default CategoryCard;
