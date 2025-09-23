import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // You can use icons from 'react-icons'
import { FaTwitter, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { useState } from 'react';

const App = () => {
  const year = useState(new Date().getFullYear());
   const myUsername = "0xfemmanuel"  // without @ ... "https://x.com/0xfeMMANUEL"
   const roles = ['◽ Smart contracts development - solidity', '◽ Fullstack web development - MERN', '◽ Smart contracts auditing']
  const [projectData, setprojectData ] = useState([
    {
      project: 1,
      name : "cryptoSnoop",
      image : "./rypto1.png",
      story: "Cryptosnoop - a crypto portfolio and tracker web-app, keeps track of the live statistics and prices of selected crtptocurrencies",
      githubLink : "https://github.com/shola-devv",
      externalLink : "https://crypto-snoop-v2.vercel.app",

    },
    { 
      project: 2,
      name : "Privimigration",
      image : "./journals2.png",
      story: "a journaling web-app, it helps you safely keep your thoughts in journal form",
      githubLink : "https://github.com/shola-devv",
      externalLink : "https://journals2me.vercel.app",
},
{ 
  project: 3,
  name : "privimigration",
  image : "./privi.png",
  story: "a social media web-app where people can share their journey plans, get advice and give advice on imigration",
  githubLink : "https://github.com/shola-devv",
  externalLink : "https://privimigration.vercel.app",
},
/*
{ 
  project: 4,
  name : "cryptoSnoop",
  image : "./rypto1.png",
  story: "Cryptosnoop - a crypto portfolio and tracker web-app, keeps track of the live statistics and prices of selected crtptocurrencies",
  githubLink : "https://github.com/shola-devv",
  externalLink : "https://crypto-snoop-v2.vercel.app",
},
{ 
  project: 5,
  name : "cryptoSnoop",
  image : "./rypto1.png",
  story: "Cryptosnoop - a crypto portfolio and tracker web-app, keeps track of the live statistics and prices of selected crtptocurrencies",
  githubLink : "https://github.com/shola-devv",
  externalLink : "https://crypto-snoop-v2.vercel.app",
}
  */,
   ])

   const [postData, setpostData ] = useState([
    {
      id: 1,
      title : "git and github",
      excerpt: "how does git and github works",
      image:"",
      externalLink : "https://crypto-snoop-v2.vercel.app",

    },
    { 
      id: 1,
      title : "git and github",
      excerpt: "how does git and github works",
      image:"",
      externalLink : "https://crypto-snoop-v2.vercel.app",
    
},
 
  ])

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-mono">
      {/* Background Video */}
      <video
  autoPlay
  loop
  muted
  playsInline
  className="fixed top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover object-center -z-10"
   >
  <source src="/videos/background.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
  
     
      {/* Overlay (your content) */}
      <div className="relative flex flex-col justify-start items-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black/20">
        
        {/* Header Section */}
        <div className="relative flex justify-center mt-10 mb-16">
  <div className="rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg p-8 max-w-2xl w-full text-center">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
      Emmanuel Shola
    </h1>

    {/* Descriptions */}
    <div className="mt-4 space-y-2">
      <p className="text-lg sm:text-xl md:text-2xl text-white font-bold">
        WEB3 SOFTWARE DEVELOPER
      </p>
     <p className="list-disc text-lg sm:text-xl md:text-2xl text-white ">{roles[0]}</p>
     <p className="text-lg sm:text-xl md:text-2xl text-white ">{roles[1]}</p>
     <p className="text-lg sm:text-xl md:text-2xl text-white ">{roles[2]}</p>
    </div>
  </div>
</div>


        {/* Button Section */}
        <div className="flex flex-col space-y-4 mb-10 max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl">
          <a href="https://github.com/shola-devv" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-2 flex text-white rounded-full font-semibold bg-gradient-to-b from-blue-300/80 to-blue-600 shadow-[0_10px_15px_-2px_rgba(0,0,0,0.4)] active:translate-y-1 active:shadow-none hover:brightness-95 overflow-hidden">
              github
              <FaGithub className="ml-2 text-2xl text-gray-200 hover:text-white transition duration-300" />
            </button>
          </a>
  
          <a href={`https://twitter.com/intent/follow?screen_name=${myUsername}`} target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-2 flex text-white rounded-full font-semibold bg-gradient-to-b from-blue-300/80 to-blue-600 shadow-[0_10px_15px_-2px_rgba(0,0,0,0.4)] active:translate-y-1 active:shadow-none hover:brightness-95 overflow-hidden">
            X
              <FaXTwitter className="text-2xl ml-6 text-gray-200 hover:text-white transition duration-300" />
           
            </button>
          </a>
  
          <a href="mailto:creekemmanuelf@gmail.com">
            <button className="px-6 py-2 flex text-white rounded-full font-semibold bg-gradient-to-b from-blue-300/80 to-blue-600 shadow-[0_10px_15px_-2px_rgba(0,0,0,0.4)] active:translate-y-1 active:shadow-none hover:brightness-95 overflow-hidden">
              Email
              <FaEnvelope className="text-2xl ml-2 text-gray-200 hover:text-white transition duration-300" />
            </button>
          </a>
  
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-2 flex text-white rounded-full font-semibold bg-gradient-to-b from-blue-300/80 to-blue-600 shadow-[0_10px_15px_-2px_rgba(0,0,0,0.4)] active:translate-y-1 active:shadow-none hover:brightness-95 overflow-hidden">
              Youtube
              <FaYoutube className="ml-2 text-2xl text-gray-200 hover:text-white transition duration-300" />
            </button>
          </a>
        </div>
  
        {/* Projects Section */}
        <div className="w-full max-w-screen-lg px-6">
          <h2 className="text-3xl sm:text-3xl font-semibold text-center text-white mb-8">
            PROJECTS
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {projectData.map((item) => (
              <div
                key={item.name}
                className="backdrop-blur-md bg-white/20 shadow-lg rounded-lg overflow-hidden"
              >
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-200">
                      <FaGithub className="text-2xl hover:text-white" />
                    </a>
                    <p className="px-4 text-white">
                      <span className="font-bold">{item.name}</span> - a journaling web-app, it helps you safely keep your thoughts in journal form
                    </p>
                    <a href={item.externalLink} target="_blank" rel="noopener noreferrer" className="text-gray-200">
                      <FaExternalLinkAlt className="text-2xl hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Green "something cool" text */}
          <div className="text-center mt-12">
            <a href="https://emmanuel-not-devin.vercel.app">
              <p className="text-green-400 font-mono text-sm font-bold underline">
                something cool
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  
         
}
export default App;





/* 
todo :
paper background with blue clouds and pink floral pattern
blog section at the bottom- 3 recent posts
wanna see something cool - to the hacker website -rewrite with tailwind
neew ai images 
add an about me page in a blog post

 {/* Project 1 
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
 

bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition duration-300*/