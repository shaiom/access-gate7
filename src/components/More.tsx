import React from 'react';
import {
  Newspaper,
  Bell,
  User,
  Phone,
  Package,
  MessageSquare,
  Info,
  HeartHandshake,
  Settings,
  LogOut,
  ChevronRight,
} from 'lucide-react';
import { MORE_MENU_ITEMS } from '../data';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Newspaper':
      return <Newspaper className="w-6 h-6 text-gray-900" strokeWidth={1.8} />;
    case 'Bell':
      return <Bell className="w-6 h-6 text-gray-900" strokeWidth={1.8} />;
    case 'User':
      return <User className="w-6 h-6 text-gray-900" strokeWidth={1.8} />;
    case 'Phone':
      return <Phone className="w-6 h-6 text-gray-900" strokeWidth={1.8} />;
    case 'FileText':
      return <Package className="w-6 h-6 text-gray-900" strokeWidth={1.8} />;
    case 'Building2':
      return <MessageSquare className="w-6 h-6 text-gray-900" strokeWidth={1.8} />;
    case 'Info':
      return <Info className="w-6 h-6 text-gray-900" strokeWidth={1.8} />;
    case 'Settings':
      return <Settings className="w-6 h-6 text-gray-900" strokeWidth={1.8} />;
    case 'LogOut':
      return <LogOut className="w-6 h-6 text-gray-900" strokeWidth={1.8} />;
    case 'HeartHandshake':
    default:
      return <HeartHandshake className="w-6 h-6 text-gray-900" strokeWidth={1.8} />;
  }
};

export const More: React.FC = () => {
  return (
    <div
      id="more-screen-content"
      className="w-full flex flex-col px-4 pt-4 pb-4 gap-3 select-none"
    >
      {MORE_MENU_ITEMS.map((item) => (
        <button
          key={item.id}
          id={`more-menu-item-${item.id}`}
          type="button"
          className="w-full bg-white rounded-[26px] flex items-center justify-between px-5 py-4 active:bg-gray-50 transition-colors text-left focus:outline-none shadow-[0_1px_4px_rgba(15,23,42,0.08)]"
        >
          <div className="flex items-center gap-4">
            {getIcon(item.iconName)}
            <span className="text-[18px] font-bold text-gray-900">
              {item.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {item.badge && (
              <span className="text-[12px] font-bold px-2.5 py-1 rounded-full bg-red-500 text-white">
                {item.badge}
              </span>
            )}
            <ChevronRight className="w-5 h-5 text-[#106EAD]" strokeWidth={2.5} />
          </div>
        </button>
      ))}
    </div>
  );
};

export const MoreScreen = More;
