import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import RootLayout from '@/layouts/layout';

const DynamicCategoryCard = dynamic(() => import('@/components/ui/CategoryCard'), { ssr: false });

const categories = [
  { imageSrc: 'https://res.cloudinary.com/djct4agyb/image/upload/v1744657349/1678570740640cf4f44e2f6_stzjgl.jpg', title: 'KAMPANYALAR' },
  { imageSrc: 'https://res.cloudinary.com/djct4agyb/image/upload/v1744657226/167576419163e221df356c0_dwbw7b.jpg', title: 'YENİ ÜRÜNLER' },
  { imageSrc: 'https://res.cloudinary.com/djct4agyb/image/upload/v1744657349/1678570740640cf4f44e2f6_stzjgl.jpg', title: 'KAMPANYALAR' },
  { imageSrc: 'https://res.cloudinary.com/djct4agyb/image/upload/v1744657226/167576419163e221df356c0_dwbw7b.jpg', title: 'YENİ ÜRÜNLER' },
  { imageSrc: 'https://res.cloudinary.com/djct4agyb/image/upload/v1744657349/1678570740640cf4f44e2f6_stzjgl.jpg', title: 'KAMPANYALAR' },
  { imageSrc: 'https://res.cloudinary.com/djct4agyb/image/upload/v1744657226/167576419163e221df356c0_dwbw7b.jpg', title: 'YENİ ÜRÜNLER' },
  { imageSrc: 'https://res.cloudinary.com/djct4agyb/image/upload/v1744657349/1678570740640cf4f44e2f6_stzjgl.jpg', title: 'KAMPANYALAR' },
  { imageSrc: 'https://res.cloudinary.com/djct4agyb/image/upload/v1744657226/167576419163e221df356c0_dwbw7b.jpg', title: 'YENİ ÜRÜNLER' }
];

const CategoryPage = () => {
  return (
    <RootLayout>
      <Fragment>
        {categories.map((category, index) => (
          <DynamicCategoryCard key={index} imageSrc={category.imageSrc} title={category.title} />
        ))}
      </Fragment>
    </RootLayout>
  );
};

export default CategoryPage;
