import { useState } from 'react';
import BottomNavbar from '../components/BottomNavbar';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: 1,
    name: 'คอหมูย่าง',
    price: 90,
    image: 'https://images.pexels.com/photos/35063435/pexels-photo-35063435.jpeg',
  },
  {
    id: 2,
    name: 'ไข่เจียว',
    price: 40,
    image: 'https://images.pexels.com/photos/35049886/pexels-photo-35049886.jpeg',
  },
  {
    id: 3,
    name: 'ผัดซีอิ๊ว',
    price: 50,
    image: 'https://images.pexels.com/photos/35063430/pexels-photo-35063430.jpeg',
  },
  {
    id: 4,
    name: 'ต้มยำทะเลหม้อไฟ',
    price: 150,
    image: 'https://images.pexels.com/photos/5030168/pexels-photo-5030168.jpeg',
  },
  {
    id: 5,
    name: 'ตำไทย',
    price: 45,
    image: 'https://images.pexels.com/photos/34699469/pexels-photo-34699469.jpeg',
  },
  {
    id: 6,
    name: 'ยำวุ้นเส้น',
    price: 55,
    image: 'https://images.pexels.com/photos/34699468/pexels-photo-34699468.jpeg',
  },
];

interface CartItem {
  id: number;
  quantity: number;
}

const CustomerMenu = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const getItemQuantity = (id: number) => {
    return cart.find(item => item.id === id)?.quantity || 0;
  };

  const handleAddItem = (id: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { id, quantity: 1 }];
    });
  };

  const handleRemoveItem = (id: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing && existing.quantity > 1) {
        return prev.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item);
      }
      return prev.filter(item => item.id !== id);
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, cartItem) => {
      const item = MENU_ITEMS.find(i => i.id === cartItem.id);
      return total + (item ? item.price * cartItem.quantity : 0);
    }, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleConfirmOrder = () => {
    if (cart.length === 0) return;
    
    // In a real app, this would send data to the backend
    const orderData = {
      tableId: 5, // Mock table ID
      items: cart.map(cartItem => {
        const item = MENU_ITEMS.find(i => i.id === cartItem.id);
        return {
          ...cartItem,
          name: item?.name,
          price: item?.price
        };
      }),
      totalPrice: getTotalPrice(),
      timestamp: new Date().toISOString()
    };

    console.log('Sending order to system:', orderData);
    alert(`Order confirmed!\nItems: ${getTotalItems()}\nTotal: ${getTotalPrice()} THB`);
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary">TakeOrder</h1>
          <p className='text-l'>Table 5</p>
        </div>
      </header>

      {/* Hero */}
      <div className="relative h-64 bg-gray-900 text-white overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center bg-linear-to-b from-transparent to-black/50">
          <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-lg">TakeOrder</h1>
          <p className="text-gray-100 text-lg drop-shadow-md font-light">Deliciousness delivered to your table</p>
        </div>
      </div>

      {/* Top Picks */}
      <div className="max-w-md mx-auto px-4 pt-8 pb-2">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          Top Picks
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {MENU_ITEMS.slice(0, 4).map((item) => {
            const quantity = getItemQuantity(item.id);
            return (
              <div key={`top-${item.id}`} className="flex-none w-44 bg-white rounded-xl shadow-md overflow-hidden flex flex-col border border-gray-100">
                <div className="h-32 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {quantity > 0 && (
                    <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                      x{quantity}
                    </div>
                  )}
                </div>
                <div className="p-3 flex flex-col grow">
                  <h3 className="font-medium text-gray-800 text-sm mb-1 line-clamp-1">
                    {item.name}
                  </h3>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-primary font-bold text-lg">฿{item.price}</span>
                    {quantity === 0 ? (
                      <button 
                        onClick={() => handleAddItem(item.id)}
                        className="bg-primary text-white p-2 rounded-full hover:bg-red-700 active:bg-red-800 transition-colors shadow-sm"
                      >
                        <Plus size={16} />
                      </button>
                    ) : (
                      <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
                        <button 
                          onClick={() => handleRemoveItem(item.id)}
                          className="w-6 h-6 flex items-center justify-center bg-white text-primary rounded-full shadow-sm"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-xs font-medium w-4 text-center">{quantity}</span>
                        <button 
                          onClick={() => handleAddItem(item.id)}
                          className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full shadow-sm"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* All Menu */}
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">All Menu</h2>
        <div className="grid grid-cols-2 gap-4">
          {MENU_ITEMS.map((item) => {
            const quantity = getItemQuantity(item.id);
            return (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="h-32 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {quantity > 0 && (
                    <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                      x{quantity}
                    </div>
                  )}
                </div>
                <div className="p-3 flex flex-col grow">
                  <h3 className="font-medium text-gray-800 text-sm mb-1 line-clamp-2">
                    {item.name}
                  </h3>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-primary font-bold">฿{item.price}</span>
                    
                    {quantity === 0 ? (
                      <button 
                        onClick={() => handleAddItem(item.id)}
                        className="bg-primary text-white p-1.5 rounded-full hover:bg-red-700 active:bg-red-800 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
                        <button 
                          onClick={() => handleRemoveItem(item.id)}
                          className="w-6 h-6 flex items-center justify-center bg-white text-primary rounded-full shadow-sm"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{quantity}</span>
                        <button 
                          onClick={() => handleAddItem(item.id)}
                          className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full shadow-sm"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Confirm Order Floating Bar */}
      {cart.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-20">
          <div className="max-w-md mx-auto flex justify-between items-center gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Total {getTotalItems()}</span>
              <span className="text-xl font-bold text-primary">฿{getTotalPrice()}</span>
            </div>
            <button
              onClick={handleConfirmOrder}
              className="flex-1 bg-primary text-white py-3 px-6 rounded-lg font-semibold shadow-lg flex items-center justify-center gap-2 hover:bg-red-700 active:bg-red-800 transition-colors"
            >
              <ShoppingCart size={20} />
              Confirm order
            </button>
          </div>
        </div>
      )}

      <BottomNavbar />
    </div>
  );
};

export default CustomerMenu;
