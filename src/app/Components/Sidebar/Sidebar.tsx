import { FC } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaCog } from 'react-icons/fa'; 

// interface SidebarProps {
//   isOpen: boolean;
// }

const Sidebar = () => {
  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-18 transform translate-x-0 transition-transform duration-300 ease-in-out`}>
      {/* <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1 className="text-2xl font-semibold">MyApp</h1>
      </div> */}
      <nav className="mt-24">
        <Link href="/" className="flex items-center px-4 py-10 text-emerald-300 hover:bg-gray-700 hover:text-white">
          <FaHome className="ml-2 text-2xl" />
        </Link>
        <Link href="#" className="flex items-center px-4 py-10 text-emerald-300 hover:bg-gray-700 hover:text-white">
          <FaUser className="ml-2 text-2xl" />
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;