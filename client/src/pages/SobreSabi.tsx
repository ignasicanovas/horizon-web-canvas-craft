import Navigation from '../components/Navigation';
import leftImage from '@assets/0cf5bdf2-b836-4f1e-8d7b-aa90de53ae78.png';
import rightImage from '@assets/524d947f-0bf2-4e57-99cb-325f5bf3f2e7.png';

const SobreSabi = () => {
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

        {/* Right side with green circle and blurred right background image */}
        <div className="w-1/2 relative flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${rightImage})`,
              filter: 'blur(8px)'
            }}
          />
          
          {/* Large green circle */}
          <div 
            className="relative z-10 w-80 h-80 rounded-full"
            style={{
              backgroundColor: '#2d5a2d'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SobreSabi;