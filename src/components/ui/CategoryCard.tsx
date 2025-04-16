'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CategoryCardProps = {
  imageSrc: string;
  title: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ imageSrc, title }) => {
  return (
    <Link href={`/category/${title.toLowerCase()}`} passHref>
      <div className="category-card cursor-pointer relative h-64 overflow-hidden rounded-lg">
        <Image src={imageSrc} alt={title} fill style={{ objectFit: 'cover' }} className="transition-transform duration-300 hover:scale-105" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h2 className="absolute flex items-center justify-center text-white text-xl w-full h-full font-bold text-center px-2">{title}</h2>
      </div>
    </Link>
  );
};

export default CategoryCard;
