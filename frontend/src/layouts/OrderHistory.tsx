import BottomNavbar from '../components/BottomNavbar';
import { Receipt, History, Coffee } from 'lucide-react';

const OrderHistory = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans selection:bg-red-100 align-top">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-[0_2px_10px_rgb(0,0,0,0.03)] sticky top-0 z-30 transition-all border-b border-gray-100">
        <div className="max-w-md mx-auto px-5 py-4 flex items-center justify-center relative">
          <h1 className="text-xl font-bold tracking-tight text-gray-900 absolute left-5">
            History
          </h1>
          <History size={20} className="text-gray-300 pointer-events-none" />
          <div className="absolute right-5">
            <button className="text-gray-400 hover:text-gray-900 p-1 rounded-full transition-colors">
              <Receipt size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Empty State Content */}
      <main className="max-w-md mx-auto p-6 flex flex-col items-center justify-center h-[70vh]">
        <div className="bg-white w-32 h-32 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center justify-center mb-8 rotate-3">
          <Coffee size={48} className="text-gray-200" strokeWidth={1.5} />
        </div>
        
        <h2 className="text-2xl font-light text-gray-900 tracking-tight mb-3 text-center">
          No orders yet
        </h2>
        
        <p className="text-center text-gray-500 font-medium leading-relaxed max-w-[250px]">
          Your past delicious experiences will magically appear here once you place an order.
        </p>

        <button className="mt-8 px-8 py-3.5 bg-gray-900 text-white rounded-2xl text-sm font-bold shadow-lg shadow-gray-900/10 hover:bg-black hover:scale-105 active:scale-95 transition-all">
          Browse Menu
        </button>
      </main>

      <BottomNavbar />
    </div>
  );
};

export default OrderHistory;
