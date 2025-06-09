
import Navigation from '../components/Navigation';
import leftImage from '@assets/0cf5bdf2-b836-4f1e-8d7b-aa90de53ae78.png';
import rightImage from '@assets/524d947f-0bf2-4e57-99cb-325f5bf3f2e7.png';

const Index = () => {
  return (
    <>
      {/* Desktop version */}
      <div className="hidden md:flex min-h-screen relative overflow-hidden">
        <Navigation />
        
        {/* Left side with background image */}
        <div className="w-1/2 h-screen relative flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${leftImage})`
            }}
          />
          
          {/* Title content */}
          <div className="relative z-10 text-center mt-20">
            <h1 className="font-horizon font-black text-9xl lg:text-[12rem] text-black leading-none">
              <div>SA</div>
              <div>BI</div>
              <div className="text-7xl lg:text-8xl mt-4">CAFÈ</div>
            </h1>
          </div>
        </div>

        {/* Right side with background image */}
        <div className="w-1/2 h-screen relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${rightImage})`
            }}
          />
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden min-h-screen relative overflow-hidden">
        <Navigation />
        
        {/* Full screen background with title */}
        <div className="h-screen relative flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${leftImage})`
            }}
          />
          
          {/* Title content for mobile */}
          <div className="relative z-10 text-center px-4">
            <h1 className="font-horizon font-black text-6xl text-black leading-none">
              <div>SA</div>
              <div>BI</div>
              <div className="text-4xl mt-2">CAFÈ</div>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
