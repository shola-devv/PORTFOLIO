import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // You can use icons from 'react-icons'
import { FaTwitter, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { useState } from 'react';

const App = () => {
  const year = useState(new Date().getFullYear());
   const myUsername = "0xfemmanuel"  // without @ ... "https://x.com/0xfeMMANUEL"
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
    <div className="min-h-screen flex flex-col justify-start items-center bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 font-mono">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-40">Emmanuel Shola</h1>
        
        {/* Descriptions */}
        <div className="mt-4 space-y-2">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-900 text-bold">WEB3 SOFTWARE DEVELOPER</p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700">smart contracts development-Solidity</p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700">Fullstack web development-Mern </p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700">Smart contracts auditing</p>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex flex-col space-y-4 mb-12 max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl">
      
      <a href="https://github.com/shola-devv" target="_blank" rel="noopener noreferrer"><button className="px-6 py-2 flex text-white rounded-full font-semibold bg-gradient-to-b from-blue-300/80 to-blue-600 shadow-[0_7px_6px_-0px_rgba(0,0,0,0.25)]  active:translate-y-1  active:shadow-none hover:brightness-95  boder-white/20 border-b border-black/20 overflow-hidden"><span class="absolute inset-0 rounded-lg bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></span>github   <FaGithub className="ml-2 text-2xl text-gray-700 hover:text-gray-900 transition duration-300" /></button></a>
      <a href={`https://twitter.com/intent/follow?screen_name=${myUsername}`} target="_blank" rel="noopener noreferrer"> <button className="px-6 py-2 flex text-white rounded-full font-semibold bg-gradient-to-b from-blue-300/80 to-blue-600 shadow-[0_7px_6px_-0px_rgba(0,0,0,0.25)]  active:translate-y-1  active:shadow-none hover:brightness-95  boder-white/20 border-b border-black/20 overflow-hidden">x  <FaXTwitter className="text-2xl ml-6 text-gray-700 hover:text-grey-700 transition duration-300" /></button></a>
      <a href="mailto:creekemmanuelf@gmail.com"> <button className="px-6 py-2 flex text-white rounded-full font-semibold bg-gradient-to-b from-blue-300/80 to-blue-600 shadow-[0_7px_6px_-0px_rgba(0,0,0,0.25)]  active:translate-y-1  active:shadow-none hover:brightness-95  boder-white/20 border-b border-black/20 overflow-hidden">Email <FaEnvelope className="text-2xl ml-2 text-gray-700 hover:text-grey-700 transition duration-300" /></button></a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"> <button className="px-6 py-2 flex text-white rounded-full font-semibold bg-gradient-to-b from-blue-300/80 to-blue-600 shadow-[0_7px_6px_-0px_rgba(0,0,0,0.25)]  active:translate-y-1  active:shadow-none hover:brightness-95  border-b border-black/20 overflow-hidden">Youtube    <FaYoutube className="ml-2 text-2xl text-gray-700 hover:text-grey-700 transition duration-300" /></button></a>
      </div>

      {/* my Projects Section */}
      <div className="w-full max-w-screen-lg px-6">
        <h2 className="text-3xl sm:text-3xl font-semibold text-center text-gray-800 mb-8">PROJECTS</h2>
        
        {/* Grid of Projects */} 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          
          {/* projects */}
          {projectData.map((item) =>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
             <img src={item.image} alt="Project 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-700">
                  <FaGithub className="text-2xl hover:text-gray-900" />
                </a>
                <p className='px-4'><span className='font-bold'>{item.name}</span> - a journaling web-app, it helps you safely keep your thoughts in journal form</p>
                <a href={item.externalLink}
                    target="_blank" rel="noopener noreferrer" className="text-gray-700">
                  <FaExternalLinkAlt className="text-2xl hover:text-gray-900" />
                </a>
              </div>
            </div>
          </div>
        )}
     
{/*Blog*/}
     <div className="max-w-4xl mx-auto px4 py-8 font-mono">
      <h1 className="text-3xl font-bold mb-6"><span className="underline">Blog</span>(yes, i write too)</h1>
      <div className= "space-y-6">
        {postData.map((post => (
          <a key={post.id} href={post.link} className="block rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300 group">
          <img src={post.src} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="p-4">
           <h2 className ="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
           <p className="text-sm sm:text-base text-gray-600">{post.excerpt}</p>
          </div>
          </a>
        )))

        }
        </div> 

     </div>
        
        </div>
      </div>
      
      <div className='h-32'></div>
     <footer className="w-full text-gray-900 mt-auto">
        
        <div className="max-w-7xl mx-auto px-6 py-8">
     {/* topsecion*/}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
     {/* branding */}
     <div>
      <h2 className= "text-xl font-bold">Shola Emmanuel</h2>
      <a href="">
        <p className='lg:pl-96 xl:pl-96 text-green-600 font-mono text-xl font-bold underline '> wanna see something cool?</p>
      </a>
     </div>
      <nav className="flex gap-4 text-xl font-bold">
       <a href="#about" className="hover:text-grey-600 underline transition">About</a>
       <a href="#contact" className="hover:text-grey-600 underline transition">Contact</a>
       <a href="#projects" className="hover:text-grey-600 underline transition">Project</a>
       <a href="#blog" className="hover:text-grey-600 underline transition">Blog</a>
      </nav>
        </div>
      /""
      </div>
      <div className="border-t-4  border-gray-700 my-6 text-xl font-bold">
       <div> &copy;{year} Shola Emmanuel. All rights reserved(lol)</div>
      </div>
     </footer>
    </div>
  );
};
/

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