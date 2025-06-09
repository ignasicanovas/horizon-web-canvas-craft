import Navigation from '../components/Navigation';
import leftImage from '@assets/0cf5bdf2-b836-4f1e-8d7b-aa90de53ae78.png';
import rightImage from '@assets/524d947f-0bf2-4e57-99cb-325f5bf3f2e7.png';
import coffeePackage from '@assets/IMG_4455-removebg_1749491947968.png';

const ElCafe = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Main content area with background images */}
      <div className="flex min-h-screen">
        {/* Left side with text content and left background image */}
        <div className="w-1/2 relative flex items-center justify-center p-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${leftImage})`
            }}
          />
          
          <div className="relative z-10 max-w-md">
            <p className="text-black text-lg leading-relaxed font-medium text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        {/* Right side with coffee package and blurred right background image */}
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
          
          {/* Coffee package image */}
          <div className="relative z-10 flex flex-col items-center">
            <img 
              src={coffeePackage} 
              alt="SABI Coffee Package"
              className="w-96 h-auto mb-8"
            />
            
            {/* Comprar button */}
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
  );
};

export default ElCafe;