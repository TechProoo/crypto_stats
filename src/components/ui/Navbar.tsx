"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-evenly items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold">
                Crypto
                <span
                  style={{ color: "#636ae8" }}
                  className="design_text text-3xl"
                >
                  Stats
                </span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/">
              <span className="hover:text-gray-300">Home</span>
            </Link>
            <Link href="/about">
              <span className="hover:text-gray-300">About</span>
            </Link>
            <Link href="/developer">
              <span className="hover:text-gray-300">Developer</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
