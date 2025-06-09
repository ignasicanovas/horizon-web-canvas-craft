import Navigation from '../components/Navigation';

const SobreSabi = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navigation />
      
      {/* Main content area with gradient background */}
      <div className="flex min-h-screen">
        {/* Left side with text content */}
        <div 
          className="w-1/2 flex items-center justify-center p-16"
          style={{
            background: 'linear-gradient(135deg, #f0f9f0 0%, #e8f5e8 30%, #d0e8d0 70%, #b8ddb8 100%)'
          }}
        >
          <div className="max-w-md">
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

        {/* Right side with green circle and gradient background */}
        <div 
          className="w-1/2 relative flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #d0e8d0 0%, #a8d0a8 50%, #80c080 100%)'
          }}
        >
          {/* Large green circle */}
          <div 
            className="w-80 h-80 rounded-full"
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