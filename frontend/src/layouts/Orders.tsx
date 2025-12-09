import { Sidebar } from '../components/Sidebar';
import { Clock } from 'lucide-react';

interface OrderItem {
    name: string;
    qty: number;
    note?: string;
}

interface Order {
    id: string;
    tableId: number;
    items: OrderItem[];
    status: 'awating' | 'cooking' | 'ready';
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
        status: 'awating',
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
        <div className="min-h-screen bg-bg-secondary font-sans">
            <Sidebar />
            
            <main className="ml-64 pt-16 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-text-heading">Kitchen Orders</h1>
                    <div className="flex gap-2">
                        <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-text-heading border border-gray-200">All Orders</span>
                        <span className="px-3 py-1 bg-transparent rounded-full text-sm font-medium text-text-subheading hover:bg-white cursor-pointer">Awating</span>
                        <span className="px-3 py-1 bg-transparent rounded-full text-sm font-medium text-text-subheading hover:bg-white cursor-pointer">Cooking</span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
                    {/* Awating Column */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-status-txtawaiting"></div>
                            <h2 className="font-bold text-text-heading">Awating</h2>
                            <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">1</span>
                        </div>
                        
                        {mockOrders.filter(o => o.status === 'awating').map(order => (
                            <OrderCard key={order.id} order={order} />
                        ))}
                    </div>

                    {/* Cooking Column */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-status-txtcooking"></div>
                            <h2 className="font-bold text-text-heading">Cooking</h2>
                            <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">1</span>
                        </div>

                        {mockOrders.filter(o => o.status === 'cooking').map(order => (
                            <OrderCard key={order.id} order={order} />
                        ))}
                    </div>

                    {/* Ready Column */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-status-txtserved"></div>
                            <h2 className="font-bold text-text-heading">Ready to Serve</h2>
                            <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">1</span>
                        </div>

                        {mockOrders.filter(o => o.status === 'ready').map(order => (
                            <OrderCard key={order.id} order={order} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

function OrderCard({ order }: { order: Order }) {
    return (
        <div className="bg-bg-main p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                    <span className="bg-bg-secondary text-text-heading font-bold px-2 py-1 rounded text-sm">
                        T-{order.tableId}
                    </span>
                    <span className="text-xs text-text-subheading">#{order.id}</span>
                </div>
                <div className="flex items-center text-xs text-text-subheading">
                    <Clock size={12} className="mr-1" />
                    {order.time}
                </div>
            </div>

            <div className="space-y-2 mb-4">
                {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                        <span className="text-text-heading">
                            <span className="font-bold mr-2">{item.qty}x</span>
                            {item.name}
                        </span>
                    </div>
                ))}
                {order.items.some(i => i.note) && (
                    <div className="text-xs text-yellow-600 bg-yellow-50 p-2 rounded mt-2">
                        Note: {order.items.find(i => i.note)?.note}
                    </div>
                )}
            </div>

            <div className="flex gap-2 mt-4">
                {order.status === 'awating' && (
                    <button className="flex-1 bg-status-txtcooking text-white py-2 rounded-lg text-sm font-medium hover:bg-status-txtcooking flex items-center justify-center gap-2">
                        Start Cooking
                    </button>
                )}
                {order.status === 'cooking' && (
                    <button className="flex-1 bg-status-txtserved text-white py-2 rounded-lg text-sm font-medium hover:bg-status-txtserved flex items-center justify-center gap-2">
                        Mark Ready
                    </button>
                )}
                {order.status === 'ready' && (
                    <button className="flex-1 bg-bg-secondary text-text-subheading py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                        Served
                    </button>
                )}
            </div>
        </div>
    );
}

export default Orders;
