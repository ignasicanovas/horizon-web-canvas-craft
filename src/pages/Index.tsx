
import React from 'react';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen flex relative overflow-hidden">
      <Navigation />
      
      {/* Lado izquierdo con imagen de fondo */}
      <div className="w-1/2 h-screen relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lovable-uploads/0cf5bdf2-b836-4f1e-8d7b-aa90de53ae78.png')`
          }}
        />
        
        {/* Contenido del título - más grande y más abajo */}
        <div className="relative z-10 text-center mt-20">
          <h1 className="font-horizon font-black text-9xl md:text-[12rem] text-black leading-none">
            <div>SA</div>
            <div>BI</div>
            <div className="text-7xl md:text-8xl mt-4">CAFÈ</div>
          </h1>
        </div>
      </div>

      {/* Lado derecho con imagen de fondo */}
      <div className="w-1/2 h-screen relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lovable-uploads/524d947f-0bf2-4e57-99cb-325f5bf3f2e7.png')`
          }}
        />
      </div>
    </div>
  );
};

export default Index;
