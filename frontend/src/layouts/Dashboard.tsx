import { Sidebar } from '../components/Sidebar';
import { TrendingUp, TrendingDown, Filter, Search, Calendar, ChevronDown, MoreHorizontal } from 'lucide-react';

function Dashboard() {
    return (
        <div className="min-h-screen bg-[#F8F9FA] font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
            <Sidebar />
            
            <main className="ml-64 pt-8 p-10 max-w-[1600px] mx-auto">
                <header className="mb-12 flex items-end justify-between">
                    <div>
                        <h1 className="text-4xl font-light tracking-tight text-gray-900 mb-2">
                            Overview
                        </h1>
                        <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">
                            Today's Performance
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-gray-300 transition-colors shadow-sm">
                            <Calendar size={16} className="text-gray-400" />
                            <span>15 March 2026</span>
                            <ChevronDown size={14} className="text-gray-400 ml-1" />
                        </button>
                    </div>
                </header>

                {/* Stats Section with Asymmetric Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <StatCard 
                        title="Gross Revenue" 
                        value="฿ 32,427" 
                        change="12.4%" 
                        isPositive={true}
                        highlight
                    />
                    <StatCard 
                        title="Avg. Order Value" 
                        value="฿ 227.50" 
                        change="0.56%" 
                        isPositive={false} 
                    />
                    <StatCard 
                        title="Total Orders" 
                        value="142" 
                        change="3.5%" 
                        isPositive={true} 
                    />
                    <StatCard 
                        title="Customer Retention" 
                        value="68%" 
                        change="2.1%" 
                        isPositive={true} 
                    />
                </div>

                {/* Main Content Area */}
                <div className="grid lg:grid-cols-3 gap-8 mb-10">
                    {/* Revenue Chart */}
                    <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-[80px] opacity-50 -mr-20 -mt-20 pointer-events-none transition-opacity duration-700 group-hover:opacity-80"></div>
                        
                        <div className="flex justify-between items-start mb-10 relative z-10">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">Revenue Flow</h3>
                                <p className="text-sm text-gray-500 mt-1">Hourly tracking for today</p>
                            </div>
                            <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-lg border border-gray-100">
                                <button className="px-3 py-1 text-xs font-semibold rounded-md bg-white shadow-sm text-gray-800">Today</button>
                                <button className="px-3 py-1 text-xs font-medium rounded-md text-gray-500 hover:text-gray-800 transition-colors">Week</button>
                            </div>
                        </div>
                        
                        <div className="h-64 relative z-10 w-full">
                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 300">
                                <defs>
                                    <linearGradient id="lineColor" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#D72638" stopOpacity="0.4" />
                                        <stop offset="50%" stopColor="#D72638" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#D72638" stopOpacity="0.8" />
                                    </linearGradient>
                                    <linearGradient id="areaColor" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#D72638" stopOpacity="0.15" />
                                        <stop offset="100%" stopColor="#D72638" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                {/* Area underneath the line */}
                                <path d="M0,250 C150,220 250,280 400,180 S550,50 700,120 S850,200 1000,80 L1000,300 L0,300 Z" fill="url(#areaColor)" />
                                {/* Main line */}
                                <path d="M0,250 C150,220 250,280 400,180 S550,50 700,120 S850,200 1000,80" fill="none" stroke="url(#lineColor)" strokeWidth="4" strokeLinecap="round" className="drop-shadow-md" />
                                {/* Data points */}
                                <circle cx="400" cy="180" r="5" fill="#fff" stroke="#D72638" strokeWidth="3" className="shadow-lg" />
                                <circle cx="700" cy="120" r="5" fill="#fff" stroke="#D72638" strokeWidth="3" className="shadow-lg" />
                                <circle cx="1000" cy="80" r="5" fill="#fff" stroke="#D72638" strokeWidth="3" className="shadow-lg" />
                            </svg>
                            
                            {/* X-axis labels */}
                            <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                                <span>10:00</span>
                                <span>12:00</span>
                                <span>14:00</span>
                                <span>16:00</span>
                                <span>18:00</span>
                                <span>20:00</span>
                                <span>22:00</span>
                            </div>
                        </div>
                    </div>

                    {/* Activity Feed / Performance block */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col">
                        <div className="flex justify-between items-start mb-8">
                            <h3 className="text-lg font-medium text-gray-900">Peak Hours</h3>
                            <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>
                        
                        <div className="flex-1 flex items-end justify-between gap-3 h-56 mt-auto">
                            {[40, 60, 35, 100, 50, 85, 45].map((h, i) => (
                                <div key={i} className="w-full h-full relative group flex flex-col justify-end">
                                    <div 
                                        className={`w-full rounded-md transition-all duration-500 ease-out 
                                        ${i === 3 ? 'bg-[#D72638] shadow-[0_4px_12px_rgba(215,38,56,0.3)]' : 'bg-gray-100 group-hover:bg-gray-200'}`}
                                        style={{ height: `${h}%` }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-[11px] font-medium text-gray-400 tracking-wider">
                            <span>M</span><span>T</span><span>W</span><span className="text-[#D72638] font-bold">T</span><span>F</span><span>S</span><span>S</span>
                        </div>
                    </div>
                </div>

                {/* Orders Table */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                    <div className="p-8 border-b border-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
                            <p className="text-sm text-gray-500 mt-1">Live updates from the dining floor</p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <div className="relative group">
                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                <input 
                                    type="text" 
                                    placeholder="Search by table or food..." 
                                    className="pl-9 pr-4 py-2 w-64 bg-gray-50 border border-transparent rounded-full text-sm hover:bg-gray-100 focus:bg-white focus:border-gray-200 focus:ring-4 focus:ring-gray-50 transition-all outline-none" 
                                />
                            </div>
                            <button className="p-2 border border-gray-200 rounded-full text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm">
                                <Filter size={18} />
                            </button>
                        </div>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-[11px] text-gray-400 uppercase tracking-widest bg-gray-50/50">
                                <tr>
                                    <th className="px-8 py-4 font-semibold">Table</th>
                                    <th className="px-6 py-4 font-semibold">Time</th>
                                    <th className="px-6 py-4 font-semibold w-1/3">Item Details</th>
                                    <th className="px-6 py-4 font-semibold text-center">Qty</th>
                                    <th className="px-6 py-4 font-semibold text-right">Amount</th>
                                    <th className="px-8 py-4 font-semibold text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[
                                    { id: 'T-12', date: '10:42 AM', product: 'Grilled Pork Neck (คอหมูย่าง)', qty: 1, amount: 90, status: 'ON DELIVERY', isPriority: false },
                                    { id: 'T-04', date: '10:38 AM', product: 'Omelet over Rice (ข้าวไข่เจียว)', qty: 2, amount: 80, status: 'COOKING', isPriority: true },
                                    { id: 'T-08', date: '10:15 AM', product: 'Stir-fried Noodles (ผัดซีอิ๊ว)', qty: 1, amount: 50, status: 'SERVED', isPriority: false },
                                    { id: 'T-21', date: '09:55 AM', product: 'Tom Yum Spicy Soup (ต้มยำทะเล)', qty: 1, amount: 150, status: 'SERVED', isPriority: false },
                                    { id: 'T-02', date: '09:30 AM', product: 'Papaya Salad (ส้มตำไทย)', qty: 1, amount: 60, status: 'SERVED', isPriority: false },
                                ].map((order, i) => (
                                    <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-8 py-5">
                                            <div className="inline-flex items-center justify-center min-w-10 h-10 rounded-lg bg-gray-100/80 text-gray-900 font-semibold text-xs relative">
                                                {order.id}
                                                {order.isPriority && <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-gray-500">{order.date}</td>
                                        <td className="px-6 py-5">
                                            <span className="font-medium text-gray-900 group-hover:text-[#D72638] transition-colors">{order.product}</span>
                                        </td>
                                        <td className="px-6 py-5 text-center font-medium text-gray-600">{order.qty}</td>
                                        <td className="px-6 py-5 text-right font-medium text-gray-900">฿ {order.amount.toFixed(2)}</td>
                                        <td className="px-8 py-5 text-center">
                                            <StatusBadge status={order.status} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}

function StatCard({ title, value, change, isPositive, highlight = false }: { title: string, value: string, change: string, isPositive: boolean, highlight?: boolean }) {
    return (
        <div className={`p-7 rounded-2xl border transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 ${highlight ? 'bg-gray-900 text-white border-gray-800 shadow-xl' : 'bg-white text-gray-900 border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)]'}`}>
            <h3 className={`text-sm font-medium mb-4 ${highlight ? 'text-gray-400' : 'text-gray-500'}`}>{title}</h3>
            
            <div className="flex items-end justify-between">
                <div>
                    <div className="text-3xl font-light tracking-tight mb-2">{value}</div>
                    <div className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                        highlight 
                            ? (isPositive ? 'text-emerald-400' : 'text-red-400')
                            : (isPositive ? 'text-emerald-600' : 'text-red-600')
                    }`}>
                        <div className={`p-1 rounded-full ${
                            highlight
                                ? (isPositive ? 'bg-emerald-400/10' : 'bg-red-400/10')
                                : (isPositive ? 'bg-emerald-100' : 'bg-red-100')
                        }`}>
                            {isPositive ? <TrendingUp size={12} strokeWidth={3} /> : <TrendingDown size={12} strokeWidth={3} />}
                        </div>
                        {change}
                    </div>
                </div>
                
                {/* Decorative element replacing generic graph */}
                <div className={`w-16 h-10 right-0 bottom-0 opacity-20 ${isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                    {isPositive ? (
                        <svg viewBox="0 0 100 40" stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0,40 C20,30 30,10 50,20 S70,10 100,5" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 100 40" stroke="currentColor" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0,5 C20,10 30,30 50,20 S70,30 100,40" />
                        </svg>
                    )}
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    // Map status to styles ensuring we don't use simple generic colors
    const getStatusStyle = () => {
        switch (status) {
            case 'ON DELIVERY':
                return 'bg-blue-50 text-blue-700 border-blue-100/50';
            case 'COOKING':
                return 'bg-amber-50 text-amber-700 border-amber-100/50';
            case 'SERVED':
                return 'bg-emerald-50 text-emerald-700 border-emerald-100/50';
            default:
                return 'bg-gray-50 text-gray-600 border-gray-200';
        }
    };

    return (
        <span className={`inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider border ${getStatusStyle()}`}>
            {status}
        </span>
    );
}

export default Dashboard;