import React from 'react';
import { Play } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#252526] border-b border-[#3C3C3C] px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/python.svg" alt="Python Logo" className="h-8 w-8" />
          <h1 className="text-xl font-semibold">Python Editor</h1>
        </div>
        <button 
          className="flex items-center space-x-2 bg-[#4CAF50] hover:bg-[#45a049] px-4 py-2 rounded-md transition-colors"
          onClick={() => console.log('Run code')}
        >
          <Play size={18} />
          <span>Run</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;