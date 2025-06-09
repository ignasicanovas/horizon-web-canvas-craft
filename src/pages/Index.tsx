
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
        
        {/* Contenido del título */}
        <div className="relative z-10 text-center">
          <h1 className="font-horizon font-black text-8xl md:text-9xl text-black leading-none">
            <div>SA</div>
            <div>BI</div>
            <div className="text-6xl md:text-7xl mt-2">CAFÉ</div>
          </h1>
        </div>
      </div>

      {/* Lado derecho con imagen de fondo */}
      <div className="w-1/2 h-screen relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lovable-uploads/0c5e3e45-0f2f-4d35-9717-37ea6eb57476.png')`
          }}
        />
      </div>
    </div>
  );
};

export default Index;
