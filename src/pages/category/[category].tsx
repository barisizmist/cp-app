import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import RouteLayout from '@/layouts/layout';
import AddToCartPopup from '@/components/ui/Popup';
import SelectedProductDetails from '@/components/ui/SelectedProductDetails';
import { useAtom } from 'jotai';
import { selectedProductAtom, quantityAtom } from '@/stores/selectedProductStore';

const CategoryDetailPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useAtom(selectedProductAtom);
  const [quantity, setQuantity] = useAtom(quantityAtom);
  const [showAddToCartPopup, setShowAddToCartPopup] = useState(false);
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

  const handleAddToCart = () => {
    if (!selectedProduct) return; // Ensure selectedProduct is defined
    setShowAddToCartPopup(true);
    // Example implementation: Add the selected product to the cart
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProductIndex = cart.findIndex((item) => item.id === selectedProduct.id);

    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({ ...selectedProduct, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${selectedProduct.name} has been added to the cart!`);
  };

  return (
    <RouteLayout>
      <div className="p-4">
        <div className="flex items-center mb-4">
          <Button onClick={() => router.back()}>← Geri</Button>
          <h1 className="text-2xl font-bold uppercase ml-4">{category}</h1>
        </div>
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

        {selectedProduct && (
          <SelectedProductDetails
            product={selectedProduct}
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            onAddToCart={handleAddToCart}
            onClose={() => setShowAddToCartPopup(false)}
          />
        )}

        {showAddToCartPopup && <AddToCartPopup quantity={quantity} totalPrice={selectedProduct?.price * quantity} onClose={() => setShowAddToCartPopup(false)} />}
      </div>
    </RouteLayout>
  );
};

export default CategoryDetailPage;
