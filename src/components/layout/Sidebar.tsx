import React from 'react';
import { Globe, LucideIcon } from 'lucide-react';

interface MenuItem {
  icon: LucideIcon;
  label: string;
  screen: string;
}

interface SidebarProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
  userType: string;
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({
  activeScreen,
  setActiveScreen,
  menuItems
}) => {
  return (
    <div className="w-64 bg-gray-900 text-white p-4 h-screen">
      <div className="flex items-center mb-8">
        <Globe className="mr-3" />
        <h2 className="text-2xl font-bold">IntelliSearch</h2>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button 
            key={item.screen}
            onClick={() => setActiveScreen(item.screen)}
            className={`flex items-center w-full p-3 rounded-lg ${
              activeScreen === item.screen 
                ? 'bg-blue-600 text-white' 
                : 'hover:bg-gray-700'
            }`}
          >
            <item.icon className="mr-3" />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;