import React from "react";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // You can use icons from 'react-icons'
import { FaTwitter, FaEnvelope, FaYoutube, FaUser } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Portfolio = () => {
  const myUsername = "0xfemmanuel"  // without @ ... "https://x.com/0xfeMMANUEL"
const skills = [
{ name: "HTML", color: "bg-purple-100", icon: "🌐" },
{ name: "CSS", color: "bg-purple-100", icon: "🎨" },
{ name: "JavaScript", color: "bg-purple-100", icon: "🟨" },
{ name: "TypeScript", color: "bg-purple-100", icon: "🔵" },
{ name: "Solidity", color: "bg-purple-100", icon: "" },
{ name: "React", color: "bg-purple-100", icon: "⚛️" },
{ name: "Next.js", color: "bg-purple-100", icon: "⬛" },
{ name: "Node.js", color: "bg-purple-100", icon: "🟩" },
{ name: "Express.js", color: "bg-purple-100", icon: "📦" },
{ name: "Foundry", color: "bg-purple-100", icon: "" },
{ name: "Remix", color: "bg-purple-100", icon: "" },
{ name: "ethersjs", color: "bg-purple-100", icon: "" },
{ name: "Git", color: "bg-purple-100", icon: "" },
{ name: "MongoDB", color: "bg-purple-100", icon: "" },
{ name: "wagmi", color: "bg-purple-100", icon: "" },
{ name: "viem", color: "bg-purple-100", icon: "" },
];

const projects = [
{
name: "Cryptosnoop",
desc: "Cryptosnoop - a crypto portfolio and tracker web-app, keeps track of the live statistics and prices of selected crtptocurrencies.",
link: "https://cryptosnoop.app",
code: "https://github.com/shola-devv/cryptoSnoop"
},

{
name: "Distributed-newsletter-email-delivery-with-kafka",
desc: "A distributed system that sends out newsletter notifications and newsletter itself to selected emails using nodejs and Kafka cloud achitecture",
link: "https://github.com/shola-devv/Distributed-newsletter-email-delivery-with-kafka",
code: "https://github.com/shola-devv/Distributed-newsletter-email-delivery-with-kafka",
},

{
name: "Smart gas gauge ",
desc: "mart Contract Gauge AI analyzes smart contract complexity to estimate gas costs across major EVM chains and delivers AI-generated, actionable optimization suggestions to help developers ship more efficient smart contracts.",
link: "https://github.com/shola-devv/SmartContractsGauge-AI",
code:"https://github.com/shola-devv/SmartContractsGauge-AI"
},

{
name: "NFT powered onchain DAO ",
desc: "A NFT powered fully on chain DAO to invest in NFT collections as a group",
link: "https://github.com/shola-devv/NFT-powered-onchain-DAO-",
code:"https://github.com/shola-devv/NFT-powered-onchain-DAO-"
},

{
name: "Web3 landing pages",
desc: "A collection of web3 themed landing pages deployed on the blockchain - modern, responsive, and built to showcase decentralized aps, Nft projects and blockchain startups ",
link: "https://web3-landing-pages-nkshxuosn-emmanuel-s-projects-5c6a2d82.vercel.app/",
code:"https://github.com/shola-devv/Web3LandingPages"
},
//add cryptosnoop, landing pages, Nft with a whitelist, j2m3(change wheen you make a new one)
{
name: "Privimigration",
desc: "A social media web-app where people can share their journey plans, get advice and give advice on imigration",
link: "https://privimigration.vercel.app",
code:"https://github.com/shola-devv/PRIVIMIGRATION"
},
];

return ( <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">
{/* About Me */} <section className="text-center"> <img
       src="/mypic.jpeg"
       alt="Profile"
       className="w-40 h-40 mx-auto rounded-full shadow-lg"
     /> <h1 className="text-3xl md:text-4xl font-bold mt-6">
Hello, I'm Shola Emmanuel Fayinminu </h1>
 <p className="text-gray-700 mt-4 max-w-2xl mx-auto leading-relaxed">
    I'm a{" "}
    <span className="text-black">web3 </span>
     software developer {" "}
    with a strong{" "}
    <span className="text-black">
      interest in the future of decentralized technology.
    </span>
  </p>

  <p className="text-gray-700 mt-4 max-w-2xl mx-auto leading-relaxed">
    I'm strongly interested in the{" "}
    <span className="text-black">gamification of web3</span> and passionate
    about{" "}
    <span className="text-black">
      building software that feels forward-looking
    {" "}
    - my work and portfolio reflects just that.
    </span>
  </p>
</section>

  {/* My Skills */}
  <section>
    <h2 className="text-2xl font-bold text-center mb-8">My Skills</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, i) => (
        <span
          key={i}
          className="px-4 py-2 rounded-xl bg-black backdrop-blur-md text-white font-medium shadow-sm"
        >
           {skill.name}
        </span>
      ))}
    </div>
  </section>

  {/* Projects */}
  <section>
    <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project, i) => (
        <div
          key={i}
          className="p-6 rounded-2xl shadow-lg border bg-white flex flex-col justify-between"
        >
          <div>
           <div className="flex justify-between items-center">
             <h3 className="text-xl font-bold text-black-">
              {project.name}
            </h3>
            <a
             href={project.code}
             className= " text-black underline">
              code
                 </a>
           </div>
           
            <p className="text-gray-600 mt-2">{project.desc}</p>
          </div>
          <a
            href={project.link}
            className="mt-4 inline-block text-center bg-black text-white px-4 py-2 rounded-lg hover:bg-black-700 transition"
          >
            View Project
          </a>
        </div>
      ))}
        
    </div>
  </section>
  <div className="mt-4 flex justify-center space-x-1">
  <a href={`https://twitter.com/intent/follow?screen_name=${myUsername}`} target="_blank" rel="noopener noreferrer">
    <FaXTwitter className="ml-2 text-2xl text-black hover:text-gray-700 transition duration-300 shadow-lg active:translate-x-2" />
  </a>
  <a href="https://github.com/shola-devv" target="_blank" rel="noopener noreferrer">
    <FaGithub className="ml-2 text-2xl text-black hover:text-gray-700 transition duration-300 shadow-lg active:translate-x-2" />
  </a>
  <a href="mailto:creekemmanuelf@gmail.com" target="_blank" rel="noopener noreferrer">
    <FaEnvelope className="ml-2 text-2xl text-black hover:text-gray-700 transition duration-300 shadow-lg active:translate-x-2" />
  </a>
</div>

</div>


);
};

export default Portfolio;
