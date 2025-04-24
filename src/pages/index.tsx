import React from 'react';
import RootLayout from '@/layouts/layout';
import Link from 'next/link';

const Home = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <RootLayout>
      <Link href={`/category`} passHref>
        Kategoriler
      </Link>
    </RootLayout>
  );
};

export default Home;
