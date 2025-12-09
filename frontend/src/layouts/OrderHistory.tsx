import BottomNavbar from '../components/BottomNavbar';

const OrderHistory = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-gray-800">History order</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4">
        <div className="text-center text-gray-500 mt-10">
          <p>No order yet</p>
        </div>
      </main>

      <BottomNavbar />
    </div>
  );
};

export default OrderHistory;
