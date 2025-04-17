import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';

const CategoryDetailPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

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

  const handleAddClick = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className="p-4">
      <Button onClick={() => router.back()} className="mb-4">
        ← Geri
      </Button>
      <h1 className="text-3xl font-bold uppercase mb-6">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="p-4">
            <div className="relative w-full h-[180px] cursor-pointer" onClick={() => setSelectedImage(product.image)}>
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="rounded-md" />
            </div>
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-lg font-bold">₺{product.price}</span>
              <Button className="text-sm" onClick={() => handleAddClick(product)}>
                Ekle +
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          {selectedImage && (
            <div className="relative w-full max-w-3xl h-auto">
              <Image src={selectedImage} alt="Selected Product" layout="responsive" width={800} height={600} objectFit="contain" className="rounded-md" />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {selectedProduct && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl shadow-black/70 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={() => setSelectedProduct(null)}>
            ✕
          </button>
          <div className="flex items-center">
            <Image src={selectedProduct.image} alt={selectedProduct.name} width={80} height={80} className="rounded-md" />
            <div className="ml-4">
              <h2 className="text-lg font-semibold">{selectedProduct.name}</h2>
              <p className="text-sm text-gray-600">{selectedProduct.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold">₺{(selectedProduct.price * quantity).toFixed(2)}</span>
            <div className="flex items-center">
              <button className="px-4 py-2 bg-gray-200 rounded-l-md" onClick={() => handleQuantityChange(-1)}>
                -
              </button>
              <span className="px-4 py-2 border-t border-b">{quantity}</span>
              <button className="px-4 py-2 bg-gray-200 rounded-r-md" onClick={() => handleQuantityChange(1)}>
                +
              </button>
            </div>
            <Button className="bg-orange-500 text-white px-4 py-2 rounded-md">Ekle ₺{(selectedProduct.price * quantity).toFixed(2)}</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDetailPage;
