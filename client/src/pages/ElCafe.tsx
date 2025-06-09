import Navigation from '../components/Navigation';
import leftImage from '@assets/0cf5bdf2-b836-4f1e-8d7b-aa90de53ae78.png';
import rightImage from '@assets/524d947f-0bf2-4e57-99cb-325f5bf3f2e7.png';
import coffeePackage from '@assets/IMG_4455-removebg_1749491947968.png';

const ElCafe = () => {
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
              <p className="text-black text-sm leading-relaxed font-medium text-justify">
                Aquesta no és una venda qualsevol.
                <br/><br/>
                Només tenim 8 quilos —aproximadament 32 bosses de 250 g— d'una joia colombiana que ha creuat l'Atlàntic gràcies a una empresa amiga. I ara, amb el teu suport, volem portar el nostre propi cafè de finca directament a Barcelona.
                <br/><br/>
                En emportar-te aquesta edició ultra limitada, no només gaudeixes d'un cafè espectacular, sinó que també et converteixes en una part essencial del nostre projecte.
                <br/><br/>
                T'expliquem una mica més sobre aquest cafè:
                <br/><br/>
                La Finca El Girasol es troba a 1.750 metres sobre el nivell del mar, a les muntanyes del departament del Quindío, a Colòmbia. El cafè creix envoltat de plàtans, cítrics, alvocaters i bosc. Cada cirera de cafè es cull amb cura, només quan és al punt òptim de maduració.
                <br/><br/>
                I el caficultor? Es diu Robinson Ortiz, un jove apassionat pel cafè d'especialitat i tercera generació de caficultors.
                <br/><br/>
                El cafè és una combinació de les varietats Caturra, Castillo i Colombia, processat amb el mètode innovador semi-washed. Aquest procés únic inclou dues fermentacions meticuloses, que aporten complexitat i caràcter a la tassa.
                <br/><br/>
                Per tancar el cercle, l'hem torrat al Maresme de la mà de Panoramic Cafè.
              </p>
            </div>
          </div>

          {/* Right side with coffee package */}
          <div className="w-1/2 relative flex flex-col items-center justify-center">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${rightImage})`,
                filter: 'blur(8px)'
              }}
            />
            
            {/* SABI CAFÈ text on the right */}
            <div className="absolute top-6 right-8 z-20">
              <a 
                href="/" 
                className="text-black font-horizon font-black text-2xl hover:opacity-70 transition-opacity"
              >
                SABI CAFÈ
              </a>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <img 
                src={coffeePackage} 
                alt="SABI Coffee Package"
                className="w-96 h-auto mb-8"
              />
              
              <a 
                href="https://checkout.stripe.com/dummy-link" 
                className="bg-white hover:bg-gray-50 text-green-800 font-bold py-3 px-8 rounded-full transition-colors border-2 border-green-800"
              >
                comprar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden min-h-screen relative overflow-hidden">
        <Navigation />
        
        {/* Mobile layout - single screen with coffee package */}
        <div className="h-screen relative flex flex-col items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${leftImage})`
            }}
          />
          
          {/* SABI CAFÈ text on top right */}
          <div className="absolute top-16 right-4 z-20">
            <a 
              href="/" 
              className="text-black font-horizon font-black text-lg hover:opacity-70 transition-opacity"
            >
              SABI CAFÈ
            </a>
          </div>
          
          {/* Coffee package and button */}
          <div className="relative z-10 flex flex-col items-center px-6">
            <img 
              src={coffeePackage} 
              alt="SABI Coffee Package"
              className="w-72 h-auto mb-6"
            />
            
            <a 
              href="https://checkout.stripe.com/dummy-link" 
              className="bg-white hover:bg-gray-50 text-green-800 font-bold py-3 px-8 rounded-full transition-colors border-2 border-green-800"
            >
              comprar
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElCafe;