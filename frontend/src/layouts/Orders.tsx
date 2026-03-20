import { Sidebar } from '../components/Sidebar';
import { Clock, ChefHat, CheckCircle2, Flame } from 'lucide-react';

interface OrderItem {
    name: string;
    qty: number;
    note?: string;
}

interface Order {
    id: string;
    tableId: number;
    items: OrderItem[];
    status: 'awaiting' | 'cooking' | 'ready';
    time: string;
}

const mockOrders: Order[] = [
    {
        id: 'ORD-001',
        tableId: 2,
        items: [
            { name: 'Spaghetti Carbonara', qty: 2 },
            { name: 'Caesar Salad', qty: 1, note: 'No croutons' }
        ],
        status: 'awaiting',
        time: '12:30 PM'
    },
    {
        id: 'ORD-002',
        tableId: 4,
        items: [
            { name: 'Grilled Salmon', qty: 1 },
            { name: 'Mashed Potatoes', qty: 1 }
        ],
        status: 'cooking',
        time: '12:35 PM'
    },
    {
        id: 'ORD-003',
        tableId: 2,
        items: [
            { name: 'Tiramisu', qty: 2 }
        ],
        status: 'ready',
        time: '12:15 PM'
    }
];

function Orders() {
    return (
        <div className="min-h-screen bg-[#F8F9FA] font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
            <Sidebar />
            
            <main className="ml-64 pt-8 p-10 max-w-[1600px] mx-auto h-screen flex flex-col">
                <header className="mb-10 flex items-end justify-between shrink-0">
                    <div>
                        <h1 className="text-4xl font-light tracking-tight text-gray-900 mb-2">
                            Kitchen Board
                        </h1>
                        <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">
                            Active Orders Management
                        </p>
                    </div>
                    
                    <div className="flex bg-white rounded-xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100 p-1">
                        <button className="px-5 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium shadow-sm transition-all">
                            All Orders
                        </button>
                        <button className="px-5 py-2 text-gray-500 hover:text-gray-900 rounded-lg text-sm font-medium transition-colors">
                            Awaiting
                        </button>
                        <button className="px-5 py-2 text-gray-500 hover:text-gray-900 rounded-lg text-sm font-medium transition-colors">
                            Cooking
                        </button>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1 min-h-0 pb-8">
                    {/* Awaiting Column */}
                    <div className="flex flex-col bg-gray-50/50 rounded-2xl border border-gray-100 p-5 overflow-hidden">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200/60">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></span>
                                <h2 className="text-lg font-semibold text-gray-900">Awaiting</h2>
                            </div>
                            <span className="bg-white border border-gray-200 text-gray-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                                {mockOrders.filter(o => o.status === 'awaiting').length}
                            </span>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                            {mockOrders.filter(o => o.status === 'awaiting').map(order => (
                                <OrderCard key={order.id} order={order} />
                            ))}
                        </div>
                    </div>

                    {/* Cooking Column */}
                    <div className="flex flex-col bg-gray-50/50 rounded-2xl border border-gray-100 p-5 overflow-hidden">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200/60">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                                <h2 className="text-lg font-semibold text-gray-900">Cooking</h2>
                            </div>
                            <span className="bg-white border border-gray-200 text-gray-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                                {mockOrders.filter(o => o.status === 'cooking').length}
                            </span>
                        </div>

                        <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                            {mockOrders.filter(o => o.status === 'cooking').map(order => (
                                <OrderCard key={order.id} order={order} />
                            ))}
                        </div>
                    </div>

                    {/* Ready Column */}
                    <div className="flex flex-col bg-gray-50/50 rounded-2xl border border-gray-100 p-5 overflow-hidden">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200/60">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                                <h2 className="text-lg font-semibold text-gray-900">Ready to Serve</h2>
                            </div>
                            <span className="bg-white border border-gray-200 text-gray-900 text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                                {mockOrders.filter(o => o.status === 'ready').length}
                            </span>
                        </div>

                        <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                            {mockOrders.filter(o => o.status === 'ready').map(order => (
                                <OrderCard key={order.id} order={order} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

function OrderCard({ order }: { order: Order }) {
    return (
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_15px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgb(0,0,0,0.06)] transition-all duration-300 group">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className="bg-gray-100/80 text-gray-900 font-bold px-3 py-1.5 rounded-xl text-sm border border-gray-200/50">
                        Table {order.tableId}
                    </div>
                    <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">#{order.id}</span>
                </div>
                <div className={`flex items-center px-2.5 py-1 rounded-lg text-xs font-bold ${
                    order.status === 'awaiting' ? 'bg-red-50 text-red-600' :
                    order.status === 'cooking' ? 'bg-amber-50 text-amber-600' :
                    'bg-emerald-50 text-emerald-600'
                }`}>
                    <Clock size={12} className="mr-1.5" strokeWidth={2.5} />
                    {order.time}
                </div>
            </div>

            <div className="space-y-3 mb-6 bg-gray-50/50 p-4 rounded-xl border border-gray-50">
                {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm group/item">
                        <span className="text-gray-800 font-medium">
                            <span className="text-gray-400 mr-2.5 inline-block w-4 font-bold">{item.qty}x</span>
                            {item.name}
                        </span>
                    </div>
                ))}
                
                {/* Order Notes section */}
                {order.items.some(i => i.note) && (
                    <div className="mt-3 pt-3 border-t border-gray-200/50">
                        {order.items.filter(i => i.note).map((item, idx) => (
                            <div key={idx} className="text-xs text-amber-700 bg-amber-50/80 border border-amber-100 p-2.5 rounded-lg font-medium flex gap-2 mb-2 last:mb-0">
                                <span className="text-amber-500 uppercase text-[10px] tracking-widest mt-0.5">Note</span>
                                <span className="flex-1">{item.note}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Actions based on state */}
            <div className="mt-2">
                {order.status === 'awaiting' && (
                    <button className="w-full bg-white border-2 border-amber-500 text-amber-600 py-2.5 rounded-xl text-sm font-bold hover:bg-amber-50 transition-colors flex items-center justify-center gap-2">
                        <Flame size={16} strokeWidth={2.5} />
                        Start Cooking
                    </button>
                )}
                {order.status === 'cooking' && (
                    <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white border-2 border-emerald-500 py-2.5 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2 shadow-sm shadow-emerald-500/20">
                        <ChefHat size={16} strokeWidth={2.5} />
                        Mark as Ready
                    </button>
                )}
                {order.status === 'ready' && (
                    <button className="w-full bg-gray-100 text-gray-400 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-default border-2 border-transparent">
                        <CheckCircle2 size={16} strokeWidth={2.5} />
                        Served
                    </button>
                )}
            </div>
        </div>
    );
}

export default Orders;
