import React from 'react';
import ezhandlelogo from '../assets/ezhandlelogo.png'; // Adjust the path as necessary

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <img src="ezhandlelogo.png" alt="projectlogo" />
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        ezhandle
      </h1>
    </div>
  );
};

export default Logo; 