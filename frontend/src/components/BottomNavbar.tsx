import { History, HandPlatter } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/70 backdrop-blur-sm border-t border-gray-200 flex justify-around items-center h-16 pb-safe">
      <button
        onClick={() => navigate('/menu')}
        className={`flex flex-col items-center justify-center w-full h-full ${
          isActive('/menu') ? 'text-primary' : 'text-gray-500'
        }`}
      >
        <HandPlatter size={24} />
        <span className="text-xs mt-1">Menu</span>
      </button>
      <button
        onClick={() => navigate('/order-history')}
        className={`flex flex-col items-center justify-center w-full h-full ${
          isActive('/order-history') ? 'text-primary' : 'text-gray-500'
        }`}
      >
        <History size={24} />
        <span className="text-xs mt-1">History</span>
      </button>
    </div>
  );
};

export default BottomNavbar;