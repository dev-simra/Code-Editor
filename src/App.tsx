import React from 'react';
import Editor from './components/Editor';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Editor />
      </main>
    </div>
  );
};

export default App;