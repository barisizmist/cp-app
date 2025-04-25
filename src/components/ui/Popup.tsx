import { Button } from '@/components/ui/button';

interface AddToCartPopupProps {
  quantity: number;
  totalPrice: number;
  onClose: () => void;
}

const AddToCartPopup: React.FC<AddToCartPopupProps> = ({ quantity, totalPrice, onClose }) => {
  return (
    <div className="fixed bottom-0 shadow-2xl shadow-black/70 left-0 right-0 bg-white dark:bg-gray-800 p-4 flex justify-between items-center">
      <span>
        {quantity} ÜRÜN(LER) ₺{totalPrice.toFixed(2)}
      </span>
      <Button className=" px-4 py-2 rounded-md" onClick={onClose}>
        Siparişi görüntüle →
      </Button>
    </div>
  );
};

export default AddToCartPopup;
