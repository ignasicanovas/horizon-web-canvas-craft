import Navigation from '../components/Navigation';
import leftImage from '@assets/0cf5bdf2-b836-4f1e-8d7b-aa90de53ae78.png';
import rightImage from '@assets/524d947f-0bf2-4e57-99cb-325f5bf3f2e7.png';
import antioquiaImage from '@assets/fotoantioquia_1749493210770.jpg';

const SobreSabi = () => {
  return (
    <>
      {/* Desktop version */}
      <div className="hidden md:block min-h-screen relative overflow-hidden">
        <Navigation />
        
        <div className="flex min-h-screen">
          {/* Left side with text content */}
          <div className="w-1/2 relative flex items-center justify-center p-16">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${leftImage})`
              }}
            />
            
            <div className="relative z-10 max-w-md">
              <p className="text-black text-lg leading-relaxed font-medium text-justify">
                Estem molt contents de compartir amb vosaltres l'inici de Sabi.
                <br/><br/>
                Aquest projecte neix de la nostra passió pel cafè i de les ganes de fer les coses amb principis i molta passió.
                <br/><br/>
                El nostre principal objectiu és crear un canal de comerç just amb productors de cafè amics i coneguts d'Antioquia, Colòmbia. Perquè creiem que el bon cafè va acompanyat de bones històries i relacions sinceres.
                <br/><br/>
                Així que ja ho sabeu, ara teniu un nou lloc on aconseguir aquell cafetó que no pot faltar a les vostres matins!
              </p>
            </div>
          </div>

          {/* Right side with green circle */}
          <div className="w-1/2 relative flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${rightImage})`,
                filter: 'blur(8px)'
              }}
            />
            
            <div 
              className="relative z-10 w-80 h-80 rounded-full overflow-hidden"
              style={{
                backgroundColor: '#2d5a2d'
              }}
            >
              <img 
                src={antioquiaImage} 
                alt="Antioquia landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden min-h-screen relative overflow-hidden">
        <Navigation />
        
        {/* Mobile layout - stacked vertically */}
        <div className="min-h-screen">
          {/* Text section */}
          <div className="h-screen relative flex items-center justify-center p-6">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${leftImage})`
              }}
            />
            
            <div className="relative z-10 max-w-sm">
              <p className="text-black text-sm leading-relaxed font-medium text-justify">
                Estem molt contents de compartir amb vosaltres l'inici de Sabi.
                <br/><br/>
                Aquest projecte neix de la nostra passió pel cafè i de les ganes de fer les coses amb principis i molta passió.
                <br/><br/>
                El nostre principal objectiu és crear un canal de comerç just amb productors de cafè amics i coneguts d'Antioquia, Colòmbia. Perquè creiem que el bon cafè va acompanyat de bones històries i relacions sinceres.
                <br/><br/>
                Així que ja ho sabeu, ara teniu un nou lloc on aconseguir aquell cafetó que no pot faltar a les vostres matins!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreSabi;