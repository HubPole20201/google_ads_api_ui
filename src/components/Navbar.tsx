'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-center space-x-4">
        <Link href="/">
          <button className="text-white px-3 py-2 rounded-md text-sm font-medium">
            Home
          </button>
        </Link>
        <Link href="/tokens">
          <button className="text-white px-3 py-2 rounded-md text-sm font-medium">
            Tokens
          </button>
        </Link>
        <Link href="/campaigns">
          <button className="text-white px-3 py-2 rounded-md text-sm font-medium">
            Campaigns
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
