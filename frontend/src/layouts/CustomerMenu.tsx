import { useState } from 'react';
import BottomNavbar from '../components/BottomNavbar';
import { Minus, Plus, ShoppingBag } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Grilled Pork Neck (คอหมูย่าง)',
    price: 90,
    image: 'https://images.unsplash.com/photo-1626200926732-ce3a48e71520?q=80&w=600&auto=format&fit=crop', // replaced pexels with high-quality unsplash link
    tag: 'Signature'
  },
  {
    id: 4,
    name: 'Spicy Seafood Soup (ต้มยำทะเล)',
    price: 150,
    image: 'https://images.unsplash.com/photo-1548943487-a2e4142f5370?q=80&w=600&auto=format&fit=crop',
    tag: 'Spicy'
  },
  {
    id: 3,
    name: 'Stir-fried Noodles (ผัดซีอิ๊ว)',
    price: 50,
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Spicy Glass Noodle Salad (ยำวุ้นเส้น)',
    price: 55,
    image: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Papaya Salad (ส้มตำไทย)',
    price: 45,
    image: 'https://images.unsplash.com/photo-1601235121081-36fccb1fd306?q=80&w=600&auto=format&fit=crop',
    tag: 'Popular'
  },
  {
    id: 2,
    name: 'Thai Omelet (ข้าวไข่เจียว)',
    price: 40,
    image: 'https://images.unsplash.com/photo-1614548079035-71cd011e74f1?q=80&w=600&auto=format&fit=crop',
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
    
    // Simulating checkout order sending
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
    alert(`Order confirmed!\nItems: ${getTotalItems()}\nTotal: ฿ ${getTotalPrice().toFixed(2)}`);
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32 font-sans selection:bg-red-100 align-top">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-[0_2px_10px_rgb(0,0,0,0.03)] sticky top-0 z-30 transition-all border-b border-gray-100">
        <div className="max-w-md mx-auto px-5 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight flex items-center gap-2 text-gray-900">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 block"></span>
            TakeOrder
          </h1>
          <div className="bg-gray-100/80 px-4 py-1.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-700">
            Table 5
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[280px] w-full max-w-md mx-auto overflow-hidden bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop" 
          alt="Culinary experience" 
          className="absolute inset-0 w-full h-full object-cover opacity-75 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 text-left">
          <p className="text-red-400 font-bold text-xs uppercase tracking-widest mb-2">Authentic Thai</p>
          <h1 className="text-3xl font-light text-white mb-2 leading-tight tracking-tight">Savor the <br/><span className="font-bold">bold flavors.</span></h1>
        </div>
      </div>

      <div className="max-w-md mx-auto -mt-6 relative z-10 rounded-t-[32px] bg-gray-50 pt-8">
        {/* Top Picks Horizontal Scroll */}
        <div className="px-5 pb-2">
          <h2 className="text-xl font-bold text-gray-900 mb-5 tracking-tight">
            Chef's Selections
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-6 -mx-5 px-5 scrollbar-hide snap-x">
            {MENU_ITEMS.slice(0, 4).map((item) => {
              const quantity = getItemQuantity(item.id);
              return (
                <div key={`top-${item.id}`} className="snap-start flex-none w-[160px] bg-white rounded-3xl shadow-[0_8px_20px_rgb(0,0,0,0.03)] overflow-hidden flex flex-col border border-gray-100">
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    {item.tag && (
                      <div className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md">
                        {item.tag}
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex flex-col grow">
                    <h3 className="font-medium text-gray-800 text-sm mb-3 line-clamp-2 leading-snug">
                      {item.name}
                    </h3>
                    <div className="mt-auto flex justify-between items-end">
                      <span className="text-gray-900 font-bold">฿ {item.price}</span>
                      {quantity === 0 ? (
                        <button 
                          onClick={() => handleAddItem(item.id)}
                          className="bg-red-50 text-red-600 rounded-full p-2.5 hover:bg-red-100 transition-colors"
                        >
                          <Plus size={16} strokeWidth={2.5} />
                        </button>
                      ) : (
                        <div className="flex flex-col items-center gap-2 bg-gray-50 rounded-full p-1.5 border border-gray-100">
                          <button 
                            onClick={() => handleAddItem(item.id)}
                            className="w-7 h-7 flex items-center justify-center bg-gray-900 text-white rounded-full shadow-sm"
                          >
                            <Plus size={14} strokeWidth={2.5} />
                          </button>
                          <span className="text-sm font-bold w-4 text-center text-gray-900 leading-none">{quantity}</span>
                          <button 
                            onClick={() => handleRemoveItem(item.id)}
                            className="w-7 h-7 flex items-center justify-center bg-white text-gray-600 rounded-full shadow-sm border border-gray-200"
                          >
                            <Minus size={14} strokeWidth={2.5} />
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

        {/* Full Menu Grid */}
        <div className="px-5 py-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5 tracking-tight">Full Menu</h2>
          <div className="grid grid-cols-1 gap-5">
            {MENU_ITEMS.map((item) => {
              const quantity = getItemQuantity(item.id);
              return (
                <div key={item.id} className="bg-white rounded-3xl shadow-[0_4px_15px_rgb(0,0,0,0.02)] overflow-hidden flex border border-gray-100 p-3 h-32 items-center">
                  <div className="w-28 h-28 shrink-0 overflow-hidden relative rounded-2xl bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    {quantity > 0 && (
                      <div className="absolute -top-2 -right-2 bg-red-600 text-white text-[11px] font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-md border-2 border-white z-10">
                        x{quantity}
                      </div>
                    )}
                  </div>
                  <div className="pl-4 py-1 flex flex-col h-full w-full justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 text-[15px] mb-1 leading-tight line-clamp-2 pr-2">
                        {item.name}
                      </h3>
                      <span className="text-gray-900 font-bold block mt-1">฿ {item.price}</span>
                    </div>
                    
                    <div className="flex justify-end pr-1">
                      {quantity === 0 ? (
                        <button 
                          onClick={() => handleAddItem(item.id)}
                          className="px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-xl active:bg-black transition-colors"
                        >
                          Add
                        </button>
                      ) : (
                        <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-1 border border-gray-100">
                          <button 
                            onClick={() => handleRemoveItem(item.id)}
                            className="w-8 h-8 flex items-center justify-center bg-white text-gray-800 rounded-lg shadow-sm"
                          >
                            <Minus size={16} strokeWidth={2.5} />
                          </button>
                          <span className="text-sm font-bold w-4 text-center text-gray-900">{quantity}</span>
                          <button 
                            onClick={() => handleAddItem(item.id)}
                            className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-lg shadow-sm"
                          >
                            <Plus size={16} strokeWidth={2.5} />
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
      </div>

      {/* Floating Checkout Bar Component */}
      {cart.length > 0 && (
        <div className="fixed bottom-24 left-0 right-0 z-40 px-5 max-w-md mx-auto pointer-events-none">
          <div className="bg-gray-900 text-white rounded-3xl p-2.5 shadow-2xl flex items-center justify-between gap-4 pointer-events-auto border border-gray-800">
            <div className="bg-gray-800 rounded-2xl w-14 h-14 flex flex-col justify-center items-center shrink-0">
              <span className="text-xs text-gray-400 font-bold leading-none tracking-widest uppercase mb-1">Qty</span>
              <span className="font-bold leading-none">{getTotalItems()}</span>
            </div>
            
            <div className="flex flex-col flex-1 pl-2">
              <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Total</span>
              <span className="text-lg font-bold">฿ {getTotalPrice().toFixed(2)}</span>
            </div>
            
            <button
              onClick={handleConfirmOrder}
              className="bg-red-600 hover:bg-red-500 text-white py-3.5 px-6 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-colors shrink-0 shadow-lg shadow-red-600/20 active:scale-95"
            >
              Order Now <ShoppingBag size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      )}

      <BottomNavbar />
    </div>
  );
};

export default CustomerMenu;
