import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowRightIcon, UserGroupIcon, PlusCircleIcon, ShoppingCartIcon, WrenchIcon } from '@heroicons/react/24/outline';
import { MdClose, MdMenu } from 'react-icons/md';

interface MenuItem {
  name: string;
  icon: JSX.Element;
  href: string;
}

const menuItems: MenuItem[] = [
  { name: 'Overview Metrics', icon: <UserGroupIcon className="h-6 w-6" />, href: '/' },
  { name: 'Shop Management', icon: <PlusCircleIcon className="h-6 w-6" />, href: '/shop' },
  { name: 'Product Management', icon: <ShoppingCartIcon className="h-6 w-6" />, href: '/products' },
  { name: 'Order Management', icon: <WrenchIcon className="h-6 w-6" />, href: '/orders' },
];

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigation = (href: string) => {
    if (href) {
      router.push(href);
      setSidebarOpen(false); // Close sidebar after navigation
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`relative h-full transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button onClick={toggleSidebar} className="absolute top-5 left-5 md:hidden p-4 z-50">
        {isSidebarOpen ? (
          <MdClose className="w-8 h-8 text-gray-900" />
        ) : (
          <MdMenu className="w-8 h-8 text-gray-900" />
        )}
      </button>

      <div className={`bg-green text-black h-screen p-6 flex flex-col justify-between transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div>
          <div className="p-4">
            <Image
              src="/images/shopyangulogo.png"
              alt="ShopYangu Logo"
              className="w-20 mx-auto mb-4 mt-12"
              width={80}
              height={80}
              priority
            />
          </div>

          <nav>
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href="#"
                    onClick={() => handleNavigation(item.href)}
                    className="flex items-center hover:bg-gray-800 p-2 rounded-md"
                  >
                    <div className="bg-gray-800 p-2 rounded-md mr-2">
                      {item.icon}
                    </div>
                    {item.name}
                    <ArrowRightIcon className="h-6 w-6 ml-auto" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">Help & Support</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                onClick={() => handleNavigation('/documentation')}
                className="flex items-center hover:bg-gray-800 p-2 rounded-md"
              >
                <div className="bg-gray-800 p-2 rounded-md mr-2">
                  <WrenchIcon className="h-6 w-6" />
                </div>
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavigation('/contact-support')}
                className="flex items-center hover:bg-gray-800 p-2 rounded-md"
              >
                <div className="bg-gray-800 p-2 rounded-md mr-2">
                  <WrenchIcon className="h-6 w-6" />
                </div>
                Contact Support
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:bg-gray-800 p-2 rounded-md">
                <div className="bg-gray-800 p-2 rounded-md mr-2">
                  <WrenchIcon className="h-6 w-6" />
                </div>
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;