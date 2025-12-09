import { Sidebar } from '../components/Sidebar';
import { TrendingUp, TrendingDown, Filter } from 'lucide-react';

function Dashboard() {
    return (
        <div className="min-h-screen bg-bg-secondary font-sans">
            <Sidebar />
            
            <main className="ml-64 pt-16 p-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                    <StatCard 
                        title="Gross Revenue" 
                        value="฿2,427" 
                        change="+0.45%" 
                        isPositive={true} 
                    />
                    <StatCard 
                        title="Avg. Order value" 
                        value="฿2,27.28" 
                        change="-0.56%" 
                        isPositive={false} 
                    />
                    <StatCard 
                        title="Total Orders" 
                        value="2,427" 
                        change="-0.35%" 
                        isPositive={false} 
                    />
                    <StatCard 
                        title="Lifetime value" 
                        value="฿2,427" 
                        change="+0.15%" 
                        isPositive={true} 
                    />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="col-span-2 bg-bg-main p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-text-heading">Order</h3>
                            <select className="text-sm text-text-subheading border-none bg-transparent focus:ring-0 cursor-pointer">
                                <option>This Day</option>
                            </select>
                        </div>
                        <div className="h-64 flex items-end justify-between gap-2 px-4 relative">
                            {/* Mock Chart Line */}
                            <div className="absolute inset-0 flex items-center justify-center text-text-subheading text-sm">
                                [Chart Visualization Placeholder]
                            </div>
                            {/* Simple visual representation of the line chart in the image */}
                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                <path d="M0,150 C50,100 100,180 150,120 S250,50 300,100 S400,150 500,80 S600,120 700,100" fill="none" stroke="var(--color-primary)" strokeWidth="3" />
                                <path d="M0,180 C50,130 100,200 150,150 S250,80 300,130 S400,180 500,110 S600,150 700,130" fill="none" stroke="var(--color-primary)" strokeOpacity="0.3" strokeWidth="3" />
                            </svg>
                        </div>
                        <div className="flex justify-between mt-4 text-xs text-text-subheading">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                        </div>
                    </div>

                    <div className="bg-bg-main p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-text-heading">Performance</h3>
                            <select className="text-sm text-text-subheading border-none bg-transparent focus:ring-0 cursor-pointer">
                                <option>Week</option>
                                <option>Year</option>
                            </select>
                        </div>
                        <div className="h-64 flex items-end justify-between gap-2">
                            {[40, 60, 35, 80, 50, 90, 45].map((h, i) => (
                                <div key={i} className="w-full bg-primary/10 rounded-t-lg relative group">
                                    <div 
                                        className={`absolute bottom-0 w-full rounded-t-lg transition-all duration-300 ${i === 3 ? 'bg-primary' : 'bg-primary/30 group-hover:bg-primary/50'}`}
                                        style={{ height: `${h}%` }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-xs text-text-subheading">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Wed</span><span>Wed</span><span>Wed</span><span>Wed</span>
                        </div>
                    </div>
                </div>

                {/* Order List */}
                <div className="bg-bg-main rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-bold text-text-heading">Order List</h3>
                        <div className="flex gap-4">
                            <div className="relative">
                                <input type="text" placeholder="Search" className="pl-8 pr-4 py-1.5 bg-bg-secondary rounded-lg text-sm focus:outline-none" />
                            </div>
                            <button className="flex items-center gap-2 text-sm text-text-subheading">
                                <Filter size={16} /> Filter
                            </button>
                        </div>
                    </div>
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-text-subheading uppercase bg-bg-secondary">
                            <tr>
                                <th className="px-6 py-3">Talbe number</th>
                                <th className="px-6 py-3">Order Date</th>
                                <th className="px-6 py-3">Food Name</th>
                                <th className="px-6 py-3">Quantity</th>
                                <th className="px-6 py-3">Amounts</th>
                                <th className="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { id: 1, date: '24 May, 2025', product: 'คอหมูย่าง', qty: 1, amount: 90, status: 'ON DELIVERY', statusColor: 'text-status-txtserved bg-status-bgserved' },
                                { id: 2, date: '1 Feb, 2025', product: 'ไข่เจียว', qty: 100, amount: 40, status: 'PENDING', statusColor: 'text-status-txtcooking bg-status-bgcooking' },
                                { id: 4, date: '22 Oct, 2025', product: 'ผัดซีอิ๊ว', qty: 264, amount: 50, status: 'REMOVED', statusColor: 'text-status-txtawaiting bg-status-bgawaiting' },
                                { id: 3, date: '8 Sep, 2025', product: 'ต้มยำทะเลหม้อไฟ', qty: 225, amount: 150, status: 'ON DELIVERY', statusColor: 'text-status-txtserved bg-status-bgserved' },
                            ].map((order, i) => (
                                <tr key={i} className="border-b border-gray-50 hover:bg-bg-secondary">
                                    <td className="px-6 py-4 font-medium text-text-heading flex items-center gap-2">
                                        {order.id}
                                    </td>
                                    <td className="px-6 py-4 text-text-subheading">{order.date}</td>
                                    <td className="px-6 py-4 text-text-heading">{order.product}</td>
                                    <td className="px-6 py-4 text-text-subheading">{order.qty}</td>
                                    <td className="px-6 py-4 text-text-heading font-medium">{order.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.statusColor}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

function StatCard({ title, value, change, isPositive }: { title: string, value: string, change: string, isPositive: boolean }) {
    return (
        <div className="bg-bg-main p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-sm text-text-subheading mb-2">{title}</h3>
            <div className="text-2xl font-bold text-text-heading mb-2">{value}</div>
            <div className={`flex items-center text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {isPositive ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
                {change} <span className="text-text-subheading ml-1 font-normal">From last day</span>
            </div>
        </div>
    );
}

export default Dashboard;