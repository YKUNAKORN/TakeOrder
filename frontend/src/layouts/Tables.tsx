import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { QrCode, Users, MoreVertical, X } from 'lucide-react';

interface Table {
    id: number;
    name: string;
    status: 'available' | 'occupied';
    guests?: number;
    orderTotal?: string;
}

function Tables() {
    const [tables, setTables] = useState<Table[]>([
        { id: 1, name: 'Table 1', status: 'available' },
        { id: 2, name: 'Table 2', status: 'occupied', guests: 4, orderTotal: '฿ 1,245.00' },
        { id: 3, name: 'Table 3', status: 'available' },
        { id: 4, name: 'Table 4', status: 'occupied', guests: 2, orderTotal: '฿ 450.50' },
        { id: 5, name: 'Table 5', status: 'available' },
        { id: 6, name: 'Table 6', status: 'available' },
    ]);

    const [selectedTable, setSelectedTable] = useState<Table | null>(null);

    const handleOpenTable = (table: Table) => {
        setSelectedTable(table);
        // Generates session and QR code in real app based on backend logic
    };

    return (
        <div className="min-h-screen bg-[#F8F9FA] font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
            <Sidebar />
            
            <main className="ml-64 pt-8 p-10 max-w-[1600px] mx-auto">
                <header className="mb-12 flex items-end justify-between">
                    <div>
                        <h1 className="text-4xl font-light tracking-tight text-gray-900 mb-2">
                            Floor Plan
                        </h1>
                        <p className="text-gray-500 font-medium tracking-wide text-sm uppercase">
                            Table Status & Management
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-6 bg-white px-5 py-3 rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-gray-100">
                        <div className="flex items-center gap-2.5">
                            <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]"></span>
                            <span className="text-sm font-semibold text-gray-600">Available ({tables.filter(t => t.status === 'available').length})</span>
                        </div>
                        <div className="w-px h-5 bg-gray-200"></div>
                        <div className="flex items-center gap-2.5">
                            <span className="w-3 h-3 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.4)]"></span>
                            <span className="text-sm font-semibold text-gray-600">Occupied ({tables.filter(t => t.status === 'occupied').length})</span>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {tables.map((table) => (
                        <div 
                            key={table.id} 
                            className={`rounded-2xl border transition-all duration-300 relative group overflow-hidden
                                ${table.status === 'occupied' 
                                    ? 'bg-white border-red-100 shadow-[0_8px_25px_rgba(215,38,56,0.06)] hover:shadow-[0_12px_30px_rgba(215,38,56,0.1)]' 
                                    : 'bg-white border-gray-100 shadow-[0_4px_15px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgb(0,0,0,0.05)]'}
                            `}
                        >
                            {/* Decorative top bar for status */}
                            <div className={`h-1.5 w-full absolute top-0 left-0 ${table.status === 'occupied' ? 'bg-red-500' : 'bg-emerald-400'}`}></div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex flex-col">
                                        <h3 className="text-2xl font-light text-gray-900 tracking-tight">{table.name}</h3>
                                        <p className={`text-xs font-bold uppercase tracking-wider mt-1 ${table.status === 'occupied' ? 'text-red-500' : 'text-emerald-500'}`}>
                                            {table.status}
                                        </p>
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 p-1.5 rounded-lg transition-colors">
                                        <MoreVertical size={18} />
                                    </button>
                                </div>

                                <div className="h-24 flex flex-col justify-end">
                                    {table.status === 'occupied' ? (
                                        <div className="space-y-3 bg-gray-50/80 p-4 rounded-xl border border-gray-100/50">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-gray-500 flex items-center gap-1.5 font-medium">
                                                    <Users size={16} strokeWidth={2.5} className="text-gray-400" /> 
                                                    Party of
                                                </span>
                                                <span className="font-bold text-gray-900">{table.guests}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-500 text-sm font-medium">Bill Total</span>
                                                <span className="font-bold text-red-600 text-lg">{table.orderTotal}</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center h-full opacity-30">
                                            <Users size={32} strokeWidth={1} className="text-gray-400" />
                                        </div>
                                    )}
                                </div>

                                <div className="mt-6 pt-5 border-t border-gray-100">
                                    {table.status === 'available' ? (
                                        <button 
                                            onClick={() => handleOpenTable(table)}
                                            className="w-full py-3 bg-gray-900 hover:bg-black text-white rounded-xl text-sm font-bold transition-transform transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-md shadow-gray-900/10"
                                        >
                                            <QrCode size={16} strokeWidth={2.5} /> Generate Code
                                        </button>
                                    ) : (
                                        <button className="w-full py-3 bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2">
                                            Manage Order
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* QR Code Modal styled elegantly */}
                {selectedTable && (
                    <div 
                        className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4" 
                        onClick={() => setSelectedTable(null)}
                    >
                        <div 
                            className="bg-white p-10 rounded-3xl max-w-sm w-full text-center relative shadow-2xl animate-in fade-in zoom-in-95 duration-200" 
                            onClick={e => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setSelectedTable(null)}
                                className="absolute right-6 top-6 text-gray-400 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                            
                            <h3 className="text-2xl font-light tracking-tight text-gray-900 mb-1">Scan to Order</h3>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">{selectedTable.name}</p>
                            
                            <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 inline-block mb-8 relative">
                                {/* Decorative scanner corners */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-gray-900 rounded-tl-2xl"></div>
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-gray-900 rounded-tr-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-gray-900 rounded-bl-2xl"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-gray-900 rounded-br-2xl"></div>
                                
                                <img 
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://takeorder.app/table/${selectedTable.id}&margin=10`} 
                                    alt="Table QR Code" 
                                    className="w-48 h-48 block"
                                />
                            </div>
                            
                            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8 px-4">
                                Customer scans this QR code to view the menu and place their orders.
                            </p>
                            
                            <button 
                                onClick={() => setSelectedTable(null)}
                                className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold shadow-xl shadow-gray-900/20 hover:scale-[1.02] active:scale-95 transition-all"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Tables;
