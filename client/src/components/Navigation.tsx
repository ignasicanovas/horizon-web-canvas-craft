
import { Link } from "wouter";

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 px-8 py-6">
      <div className="flex justify-start items-center w-full">
        {/* All menu elements aligned to the left */}
        <div className="flex space-x-12">
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
      </div>
    </nav>
  );
};

export default Navigation;
