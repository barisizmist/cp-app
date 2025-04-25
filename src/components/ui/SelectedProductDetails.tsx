import Image from 'next/image';
import { Button } from '@/components/ui/button';

const SelectedProductDetails = ({ product, quantity, onQuantityChange, onAddToCart, onClose }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-2xl shadow-black/70 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
      <button className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400" onClick={onClose}>
        ✕
      </button>
      <div className="flex items-center">
        <Image src={product.image} alt={product.name} width={80} height={80} className="rounded-md" />
        <div className="ml-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{product.name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{product.description}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-lg font-bold text-gray-900 dark:text-gray-100">₺{(product.price * quantity).toFixed(2)}</span>
        <div className="flex items-center">
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-l-md text-gray-900 dark:text-gray-100" onClick={() => onQuantityChange(-1)}>
            -
          </button>
          <span className="px-4 py-2 border-t border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">{quantity}</span>
          <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-r-md text-gray-900 dark:text-gray-100" onClick={() => onQuantityChange(1)}>
            +
          </button>
        </div>
        <Button className="px-4 py-2 rounded-md" onClick={onAddToCart}>
          Ekle ₺{(product.price * quantity).toFixed(2)}
        </Button>
      </div>
    </div>
  );
};

export default SelectedProductDetails;
