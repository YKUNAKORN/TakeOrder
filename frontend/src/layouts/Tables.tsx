import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { QrCode, Users, MoreHorizontal } from 'lucide-react';

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
        { id: 2, name: 'Table 2', status: 'occupied', guests: 4, orderTotal: '฿125.00' },
        { id: 3, name: 'Table 3', status: 'available' },
        { id: 4, name: 'Table 4', status: 'occupied', guests: 2, orderTotal: '฿45.50' },
        { id: 5, name: 'Table 5', status: 'available' },
        { id: 6, name: 'Table 6', status: 'available' },
    ]);

    const [selectedTable, setSelectedTable] = useState<Table | null>(null);

    const handleOpenTable = (table: Table) => {
        setSelectedTable(table);
        // In a real app, this would generate a session and QR code
    };

    return (
        <div className="min-h-screen bg-bg-secondary font-sans">
            <Sidebar />
            
            <main className="ml-64 pt-16 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-text-heading">Tables Management</h1>
                    <div className="flex gap-2">
                        <span className="flex items-center text-sm text-text-subheading"><span className="w-3 h-3 rounded-full bg-status-txtserved mr-2"></span>Available</span>
                        <span className="flex items-center text-sm text-text-subheading"><span className="w-3 h-3 rounded-full bg-status-txtawaiting mr-2"></span>Occupied</span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {tables.map((table) => (
                        <div key={table.id} className="bg-bg-main rounded-xl border border-gray-100 shadow-sm p-6 relative group hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl
                                    ${table.status === 'available' ? 'bg-status-txtserved' : 
                                      table.status === 'occupied' ? 'bg-status-txtawaiting' : 'bg-yellow-500'}`}>
                                    {table.id}
                                </div>
                                <button className="text-text-subheading hover:text-text-heading">
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>
                            
                            <h3 className="text-lg font-bold text-text-heading mb-1">{table.name}</h3>
                            <p className="text-sm text-text-subheading capitalize mb-4">{table.status}</p>

                            {table.status === 'occupied' && (
                                <div className="mb-4 pt-4 border-t border-gray-50">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-text-subheading flex items-center gap-1"><Users size={14}/> Guests</span>
                                        <span className="font-medium text-text-heading">{table.guests}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-subheading">Current Total</span>
                                        <span className="font-bold text-primary">{table.orderTotal}</span>
                                    </div>
                                </div>
                            )}

                            {table.status === 'available' ? (
                                <button 
                                    onClick={() => handleOpenTable(table)}
                                    className="w-full py-2 bg-bg-secondary text-text-heading rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                                >
                                    <QrCode size={16} /> Open Table
                                </button>
                            ) : (
                                <button className="w-full py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">
                                    View Order
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* QR Code Modal Mockup */}
                {selectedTable && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 cursor-pointer" onClick={() => setSelectedTable(null)}>
                        <div className="bg-white p-8 rounded-2xl max-w-sm w-full text-center" onClick={e => e.stopPropagation()}>
                            <h3 className="text-xl font-bold text-text-heading mb-2">Scan to Order</h3>
                            <p className="text-text-subheading mb-6">Table {selectedTable.id}</p>
                            
                            <div className="bg-white p-4 rounded-xl border-2 border-dashed border-gray-200 mb-6 inline-block">
                                <img 
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://takeorder.app/table/${selectedTable.id}`} 
                                    alt="QR Code" 
                                    className="w-48 h-48"
                                />
                            </div>
                            
                            <p className="text-sm text-text-subheading mb-6">
                                Show this QR code to customers to let them scan and start ordering.
                            </p>
                            
                            <button 
                                onClick={() => setSelectedTable(null)}
                                className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90"
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
