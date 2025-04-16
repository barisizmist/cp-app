import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CategoryDetailPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const products = [
    {
      id: 1,
      name: 'Menemen',
      description: 'Çay ile birlikte',
      price: 15,
      image: 'https://res.cloudinary.com/djct4agyb/image/upload/v1744806310/648203213f32e427d8c2aafd628f22065f3fb0bcb32e5_vnqq2r.jpg'
    },
    {
      id: 2,
      name: 'Sucuklu Yumurta',
      description: 'Sucuk & Yumurta',
      price: 14,
      image: 'https://res.cloudinary.com/djct4agyb/image/upload/v1744806310/648203213f32e427d8c2aafd628f22065f3fb0bcb32e5_vnqq2r.jpg'
    },
    {
      id: 3,
      name: 'Kavurmalı Yumurta',
      description: 'Kavurmalı Yumurta',
      price: 16,
      image: 'https://res.cloudinary.com/djct4agyb/image/upload/v1744806310/648203213f32e427d8c2aafd628f22065f3fb0bcb32e5_vnqq2r.jpg'
    },
    {
      id: 4,
      name: 'Kahvaltı Tabağı',
      description: '16 Çeşit',
      price: 19,
      image: 'https://res.cloudinary.com/djct4agyb/image/upload/v1744806310/648203213f32e427d8c2aafd628f22065f3fb0bcb32e5_vnqq2r.jpg'
    }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{category} Kategorisi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="p-4">
            <Image src={product.image} alt={product.name} width={200} height={150} className="rounded-md" />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-lg font-bold">₺{product.price}</span>
              <Button className="text-sm">Ekle +</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetailPage;
