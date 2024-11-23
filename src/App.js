import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // You can use icons from 'react-icons'
import { FaTwitter, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-mono">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-40">Emmanuel Shola</h1>
        
        {/* Descriptions */}
        <div className="mt-4 space-y-2">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700">FULLSTACK WEB DEVELOPER</p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700">WEB3 DEVELOPER</p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700">SMART CONTRACT AUDITOR</p>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex flex-col space-y-4 mb-12 max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl">
      <a href="https://github.com/shola-devv" target="_blank" rel="noopener noreferrer"><button className="px-6 py-2 flex text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition duration-300">Github <FaGithub className="text-2xl text-gray-700 hover:text-gray-900 transition duration-300" /></button></a>
      <a href="https://x.com/0xfeMMANUEL" target="_blank" rel="noopener noreferrer"> <button className="px-6 py-2 flex text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition duration-300">x  <FaXTwitter className="text-2xl ml-6 text-gray-700 hover:text-grey-700 transition duration-300" /></button></a>
      <a href="mailto:creekemmanuelf@gmail.com.com"> <button className="px-6 py-2 flex text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition duration-300">Email <FaEnvelope className="text-2xl ml-2 text-gray-700 hover:text-grey-700 transition duration-300" /></button></a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"> <button className="px-6 py-2 flex text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition duration-300">Youtube    <FaYoutube className="ml-2 text-2xl text-gray-700 hover:text-grey-700 transition duration-300" /></button></a>
      </div>

      {/* my Projects Section */}
      <div className="w-full max-w-screen-lg px-6">
        <h2 className="text-3xl sm:text-3xl font-semibold text-center text-gray-800 mb-8">PROJECTS</h2>
        
        {/* Grid of Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="./rypto1.png" alt="Project 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <a href="https://github.com/shola-devv" target="_blank" rel="noopener noreferrer" className="text-gray-700">
                  <FaGithub className="text-2xl hover:text-gray-900" />
                </a>
                <p className='px-4'><span className='font-bold'>Cryptosnoop</span> - a crypto portfolio and tracker web-app, keeps track of the live statistics and prices of selected crtptocurrencies</p>
                <a href="https://crypto-snoop-v2.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-700">
                  <FaExternalLinkAlt className="text-2xl hover:text-gray-900" />
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="./journals2.png" alt="Project 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <a href="https://github.com/shola-devv" target="_blank" rel="noopener noreferrer" className="text-gray-700">
                  <FaGithub className="text-2xl hover:text-gray-900" />
                </a>
                <p className='px-4'><span className='font-bold'>journals2me</span> - a journaling web-app, it helps you safely keep your thoughts in journal form</p>
                <a href="https://journals2me.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-700">
                  <FaExternalLinkAlt className="text-2xl hover:text-gray-900" />
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="./privi.png" alt="Project 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <a href="https://github.com/shola-devv/PRIVIMIGRATION" target="_blank" rel="noopener noreferrer" className="text-gray-700">
                  <FaGithub className="text-2xl hover:text-gray-900" />
                </a>
                <p className='px-4'><span className='font-bold'>Privimigration</span> - a social media web-app where people can share their journey plans, get advice and give advice on imigration</p>
                <a href="https://privimigration.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-700">
                  <FaExternalLinkAlt className="text-2xl hover:text-gray-900" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-32'></div>
    </div>
  );
};

export default App;





/* bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition duration-300*/