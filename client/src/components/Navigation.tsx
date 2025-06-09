
const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 px-8 py-6">
      <div className="flex justify-start items-center w-full">
        {/* Todos los elementos del menú alineados a la izquierda */}
        <div className="flex space-x-12">
          <a 
            href="#sobre-sabi" 
            className="text-black font-horizon font-bold text-lg hover:opacity-70 transition-opacity"
          >
            SOBRE SABI
          </a>
          <a 
            href="#el-cafe" 
            className="text-black font-horizon font-bold text-lg hover:opacity-70 transition-opacity"
          >
            EL CAFÈ
          </a>
          <a 
            href="#contacte" 
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
