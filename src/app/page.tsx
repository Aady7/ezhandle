'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="ezhandlelogo.png" alt="projectlogo"  />
              <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">EZhandle</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Login
              </Link>
              <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Modern Library Management
            <span className="block text-blue-600 dark:text-blue-400">Made Simple</span>
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Streamline your library operations, track student attendance, and manage resources efficiently.
          </p>
        </div>
          
           {/* CTA Section */}
        <div className="mt-16 text-center">
          <Link
            href="/register"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg"
          >
            Start Managing Your Library
          </Link>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
            No credit card required • Free trial available
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Student Management */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white align-center">Key Feature</h3>
            <ul>
               <li>Track occupancy of seat</li>
               <li></li>
               <li></li>
               <li></li>
            </ul>
    
          </div>


        
        </div>



    

       
      </div>
    </div>
  );
}
