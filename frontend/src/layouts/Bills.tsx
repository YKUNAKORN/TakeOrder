import { Sidebar } from '../components/Sidebar';
import { Receipt, CreditCard, QrCode, Banknote, Search, Calendar, ChevronDown } from 'lucide-react';

interface Bill {
    id: string;
    tableId: number;
    items: { name: string; qty: number; price: number }[];
    subtotal: number;
    tax: number;
    total: number;
    status: 'unpaid' | 'paid';
    time: string;
}

const mockBills: Bill[] = [
    {
        id: 'BILL-001',
        tableId: 2,
        items: [
            { name: 'Spaghetti Carbonara', qty: 2, price: 25.00 },
            { name: 'Caesar Salad', qty: 1, price: 15.00 },
            { name: 'Tiramisu', qty: 2, price: 12.00 }
        ],
        subtotal: 89.00,
        tax: 6.23,
        total: 95.23,
        status: 'unpaid',
        time: '1:15 PM'
    },
    {
        id: 'BILL-002',
        tableId: 4,
        items: [
            { name: 'Grilled Salmon', qty: 1, price: 35.00 },
            { name: 'Mashed Potatoes', qty: 1, price: 8.00 }
        ],
        subtotal: 43.00,
        tax: 3.01,
        total: 46.01,
        status: 'unpaid',
        time: '1:20 PM'
    }
];

function Bills() {
    return (
        <div className="min-h-screen bg-[#F8F9FA] font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
            <Sidebar />
            
            <main className="ml-64 pt-8 p-10 max-w-[1600px] mx-auto">
                <header className="mb-12 flex items-end justify-between">
                    <div>
                        <h1 className="text-4xl font-light tracking-tight text-gray-900 mb-2">
                            Transactions
                        </h1>
                        <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">
                            Bills & Payments
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <div className="relative group">
                            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-600 transition-colors" />
                            <input 
                                type="text" 
                                placeholder="Search bill ID or Table..." 
                                className="pl-10 pr-4 py-2.5 w-64 bg-white border border-gray-200 rounded-full text-sm font-medium hover:border-gray-300 focus:border-gray-400 focus:ring-4 focus:ring-gray-100 transition-all outline-none shadow-sm shadow-gray-100/50" 
                            />
                        </div>
                        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-gray-300 transition-colors shadow-sm">
                            <Calendar size={16} className="text-gray-400" />
                            <span>Today</span>
                            <ChevronDown size={14} className="text-gray-400 ml-1" />
                        </button>
                    </div>
                </header>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* List of Unpaid Bills */}
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                        {mockBills.map(bill => (
                            <div key={bill.id} className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-7 relative overflow-hidden group hover:shadow-[0_12px_40px_rgb(0,0,0,0.06)] transition-shadow">
                                {/* Decorative receipt edge top */}
                                <div className="absolute top-0 left-0 right-0 flex justify-around opacity-20 -translate-y-2">
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="w-4 h-4 rounded-full bg-gray-200"></div>
                                    ))}
                                </div>
                                
                                <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100/80 pt-2">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-900 font-bold text-lg border-2 border-white shadow-sm">
                                            {bill.tableId}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Table {bill.tableId}</h3>
                                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">{bill.id}</p>
                                        </div>
                                    </div>
                                    <span className="px-3.5 py-1.5 bg-red-50 text-red-600 border border-red-100/50 text-[10px] font-bold rounded-full uppercase tracking-wider">
                                        {bill.status}
                                    </span>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {bill.items.map((item, idx) => (
                                        <div key={idx} className="flex justify-between text-sm items-center">
                                            <span className="text-gray-800 font-medium">
                                                <span className="text-gray-400 mr-2 inline-block w-4">{item.qty}x</span>
                                                {item.name}
                                            </span>
                                            <span className="text-gray-900 font-semibold tracking-tight">฿ {(item.price * item.qty).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3 pt-6 border-t border-dashed border-gray-200 mb-8">
                                    <div className="flex justify-between text-sm font-medium text-gray-500">
                                        <span>Subtotal</span>
                                        <span className="text-gray-800">฿ {bill.subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-medium text-gray-500">
                                        <span>Tax (7%)</span>
                                        <span className="text-gray-800">฿ {bill.tax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-end mt-4 pt-4 border-t border-gray-100">
                                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Total amount</span>
                                        <span className="text-3xl font-light tracking-tight text-gray-900">฿ {bill.total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <button className="flex items-center justify-center gap-2 py-3.5 border-2 border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                                        <Receipt size={18} /> Print Bill
                                    </button>
                                    <button className="flex items-center justify-center gap-2 py-3.5 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-black transition-colors shadow-lg shadow-gray-900/10">
                                        <CreditCard size={18} /> Checkout
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Payment Methods / Summary Panel */}
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 lg:sticky lg:top-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Payment Method</h3>
                        
                        <div className="space-y-4">
                            {/* Active method example */}
                            <button className="w-full flex items-center justify-between p-4 border-2 border-gray-900 bg-gray-50 rounded-2xl transition-all relative overflow-hidden group">
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-gray-900">
                                        <Banknote size={24} strokeWidth={2} />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-gray-900 text-sm mb-0.5">Cash</p>
                                        <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">Pay at counter</p>
                                    </div>
                                </div>
                                <div className="w-5 h-5 rounded-full border-4 border-gray-900 bg-white relative z-10"></div>
                            </button>

                            <button className="w-full flex items-center justify-between p-4 border-2 border-gray-100 hover:border-gray-300 bg-white rounded-2xl transition-all group">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-50 group-hover:bg-white rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgb(0,0,0,0.04)] text-gray-400 group-hover:text-gray-900 transition-colors">
                                        <QrCode size={24} strokeWidth={2} />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-gray-900 text-sm mb-0.5">Thai QR</p>
                                        <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">Scan to pay</p>
                                    </div>
                                </div>
                                <div className="w-5 h-5 rounded-full border-2 border-gray-200 group-hover:border-gray-400"></div>
                            </button>

                            <button className="w-full flex items-center justify-between p-4 border-2 border-gray-100 hover:border-gray-300 bg-white rounded-2xl transition-all group">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-50 group-hover:bg-white rounded-xl flex items-center justify-center shadow-[0_2px_8px_rgb(0,0,0,0.04)] text-gray-400 group-hover:text-gray-900 transition-colors">
                                        <CreditCard size={24} strokeWidth={2} />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-gray-900 text-sm mb-0.5">Credit Card</p>
                                        <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">Visa, Mastercard</p>
                                    </div>
                                </div>
                                <div className="w-5 h-5 rounded-full border-2 border-gray-200 group-hover:border-gray-400"></div>
                            </button>
                        </div>

                        <div className="mt-10 pt-8 border-t border-gray-100">
                            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Daily Summary</h4>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <span className="text-gray-600 font-medium">Total Received</span>
                                    <span className="font-bold text-gray-900 text-lg">฿ 1,245.00</span>
                                </div>
                                <div className="flex justify-between items-center text-sm px-4">
                                    <span className="text-gray-500 font-medium">Transactions</span>
                                    <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg">24</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Bills;
