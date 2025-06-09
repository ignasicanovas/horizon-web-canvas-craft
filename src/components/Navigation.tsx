
import React from 'react';

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 px-8 py-6">
      <div className="flex justify-between items-center w-full">
        {/* Lado izquierdo - Sobre Sabi */}
        <div className="w-1/2 flex justify-start">
          <a 
            href="#sobre-sabi" 
            className="text-black font-horizon font-bold text-lg hover:opacity-70 transition-opacity"
          >
            SOBRE SABI
          </a>
        </div>
        
        {/* Lado derecho dividido en dos partes */}
        <div className="w-1/2 flex">
          {/* El Cafè en el centro de la parte blanca */}
          <div className="w-1/2 flex justify-center">
            <a 
              href="#el-cafe" 
              className="text-black font-horizon font-bold text-lg hover:opacity-70 transition-opacity"
            >
              EL CAFÈ
            </a>
          </div>
          
          {/* Contacte ajustado a la derecha */}
          <div className="w-1/2 flex justify-end">
            <a 
              href="#contacte" 
              className="text-black font-horizon font-bold text-lg hover:opacity-70 transition-opacity"
            >
              CONTACTE
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
