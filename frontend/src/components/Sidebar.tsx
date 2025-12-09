import { ChartPie, LayoutGrid, ClipboardList, Receipt, LogOut } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { icon: ChartPie, label: "Dashboard", path: "/dashboard" },
  { icon: LayoutGrid, label: "Tables", path: "/tables" },
  { icon: ClipboardList, label: "Orders", path: "/orders" },
  { icon: Receipt, label: "Bills", path: "/bills" },
];

export function Sidebar() {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <div className="w-64 bg-bg-main h-screen border-r border-gray-100 flex flex-col fixed left-0 top-0">
      <div className="text-center p-6 flex gap-2 justify-center"> 
        <span className="text-xl font-bold text-primary">TakeOrder</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = activePath === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-text-subheading hover:bg-bg-secondary hover:text-text-heading"
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-100">
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-text-subheading hover:bg-primary/10 hover:text-primary transition-colors"
        >
          <LogOut size={20} />
          Sign out
        </Link>
      </div>
    </div>
  );
}