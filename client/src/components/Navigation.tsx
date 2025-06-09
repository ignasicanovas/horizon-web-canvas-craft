
import { Link } from "wouter";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-20 px-4 md:px-8 py-4 md:py-6">
      <div className="flex justify-between items-center w-full">
        {/* Desktop menu - hidden on mobile */}
        <div className="hidden md:flex space-x-12">
          <Link 
            href="/sobre-sabi" 
            className="text-black font-horizon font-bold text-lg hover:opacity-70 transition-opacity"
          >
            SOBRE SABI
          </Link>
          <Link 
            href="/el-cafe" 
            className="text-black font-horizon font-bold text-lg hover:opacity-70 transition-opacity"
          >
            EL CAFÈ
          </Link>
          <a 
            href="https://www.instagram.com/sabi.cafee/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-black font-horizon font-bold text-lg hover:opacity-70 transition-opacity"
          >
            CONTACTE
          </a>
        </div>

        {/* Mobile hamburger menu button */}
        <button
          className="md:hidden text-black font-bold text-xl z-30"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Mobile menu overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center z-25 md:hidden">
            <div className="flex flex-col space-y-8 text-center">
              <Link 
                href="/sobre-sabi" 
                className="text-black font-horizon font-bold text-2xl hover:opacity-70 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                SOBRE SABI
              </Link>
              <Link 
                href="/el-cafe" 
                className="text-black font-horizon font-bold text-2xl hover:opacity-70 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                EL CAFÈ
              </Link>
              <a 
                href="https://www.instagram.com/sabi.cafee/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-horizon font-bold text-2xl hover:opacity-70 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                CONTACTE
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
