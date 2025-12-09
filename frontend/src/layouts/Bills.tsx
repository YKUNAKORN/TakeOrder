import { Sidebar } from '../components/Sidebar';
import { Receipt, CreditCard, QrCode, Banknote } from 'lucide-react';

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
        <div className="min-h-screen bg-bg-secondary font-sans">
            <Sidebar />
            
            <main className="ml-64 pt-16 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-text-heading">Bills & Payments</h1>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {/* List of Unpaid Bills */}
                    <div className="col-span-2 grid grid-cols-2 gap-6">
                        {mockBills.map(bill => (
                            <div key={bill.id} className="bg-bg-main rounded-xl border border-gray-100 shadow-sm p-6">
                                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                            {bill.tableId}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-text-heading">Table {bill.tableId}</h3>
                                            <p className="text-xs text-text-subheading">ID: {bill.id}</p>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 bg-status-bgunpaid text-status-txtunpaid text-xs font-medium rounded-full uppercase">
                                        {bill.status}
                                    </span>
                                </div>

                                <div className="space-y-3 mb-6">
                                    {bill.items.map((item, idx) => (
                                        <div key={idx} className="flex justify-between text-sm">
                                            <span className="text-text-heading">
                                                <span className="text-text-subheading mr-2">{item.qty}x</span>
                                                {item.name}
                                            </span>
                                            <span className="text-text-heading font-medium">${(item.price * item.qty).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-2 pt-4 border-t border-gray-50 mb-6">
                                    <div className="flex justify-between text-sm text-text-subheading">
                                        <span>Subtotal</span>
                                        <span>${bill.subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-text-subheading">
                                        <span>Tax (7%)</span>
                                        <span>${bill.tax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-bold text-text-heading mt-2">
                                        <span>Total</span>
                                        <span className="text-primary">${bill.total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <button className="flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-lg text-sm font-medium text-text-heading hover:bg-gray-50">
                                        <Receipt size={16} /> Print Bill
                                    </button>
                                    <button className="flex items-center justify-center gap-2 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90">
                                        <CreditCard size={16} /> Checkout
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Payment Methods / Summary Panel */}
                    <div className="bg-bg-main rounded-xl border border-gray-100 shadow-sm p-6 h-fit">
                        <h3 className="font-bold text-text-heading mb-4">Payment Methods</h3>
                        
                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-between p-4 border border-primary bg-primary/5 rounded-xl transition-all">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-primary">
                                        <Banknote size={20} />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-text-heading text-sm">Cash</p>
                                        <p className="text-xs text-text-subheading">Pay at counter</p>
                                    </div>
                                </div>
                                <div className="w-4 h-4 rounded-full border-4 border-primary"></div>
                            </button>

                            <button className="w-full flex items-center justify-between p-4 border border-gray-200 hover:border-primary/50 rounded-xl transition-all group">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-50 group-hover:bg-white rounded-lg flex items-center justify-center shadow-sm text-text-subheading group-hover:text-primary">
                                        <QrCode size={20} />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-text-heading text-sm">Thai QR</p>
                                        <p className="text-xs text-text-subheading">Scan to pay</p>
                                    </div>
                                </div>
                                <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                            </button>

                            <button className="w-full flex items-center justify-between p-4 border border-gray-200 hover:border-primary/50 rounded-xl transition-all group">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-50 group-hover:bg-white rounded-lg flex items-center justify-center shadow-sm text-text-subheading group-hover:text-primary">
                                        <CreditCard size={20} />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-text-heading text-sm">Credit Card</p>
                                        <p className="text-xs text-text-subheading">Visa, Mastercard</p>
                                    </div>
                                </div>
                                <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                            </button>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-50">
                            <h4 className="font-bold text-text-heading mb-4">Daily Summary</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-text-subheading">Total Sales</span>
                                    <span className="font-medium text-text-heading">฿1,245.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-text-subheading">Transactions</span>
                                    <span className="font-medium text-text-heading">24</span>
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
