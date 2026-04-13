import React, { useEffect, useRef } from "react";

const myUsername = "0xfemmanuel";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "Solidity",
  "React", "Next.js", "Node.js", "Express.js", "Kafka",
  "Foundry", "Remix", "ethers.js", "Git", "MongoDB", "wagmi", "viem",
];

const projects = [
{
name: "Cryptosnoop",
desc: "CryptoSnoop is an all-in-one platform designed to track cryptocurrency portfolios and monitor remote wallets across multiple blockchains in real-time. It functions as a comprehensive tool for portfolio management and on-chain analysis.",
link: "https://cryptosnoop.app",
code: "https://github.com/shola-devv/cryptoSnoop",
stack: [ "Next.js(typescript)", "Node.js", "Express", "MongoDB", "ethersjs", "wagmi", "viem", "solidity"],
},

{
name: "Smart gas gauge ",
desc: "Smart Contract Gauge AI analyzes smart contract complexity to estimate gas costs across major EVM chains and delivers AI-generated, actionable optimization suggestions to help developers ship more efficient smart contracts.",
link: "https://smart-contracts-gauge-u2xi2nb1c-emmanuel-s-projects-5c6a2d82.vercel.app",
code:"https://github.com/shola-devv/SmartContractsGauge-AI",
stack: ["Next.js(typescript)", "Node.js", "Express", "MongoDB", "solidity"]
},

{
name: "NFT powered onchain DAO ",
desc: "A NFT powered fully on chain DAO to invest in NFT collections as a group, built with solidity, foundry and reactn Nextjs. ",
link: "https://github.com/shola-devv/NFT-powered-onchain-DAO-",
code:"https://github.com/shola-devv/NFT-powered-onchain-DAO-",
stack: ["solidity", "foundry", "remix", "viem", "Next.js(typescript)", "Node.js", "Express", "MongoDB" ]
},

{
name: "SendMeFunds",
desc: "A full-stack fintech wallet system with ACID transactions, double-entry ledger, idempotency, and role-based access control",
link: "https://github.com/shola-devv/sendMeFunds-Frontend.git",
code: "https://github.com/shola-devv/SendMeFunds-Fintech-model-.git",
stack: ["Node.js", "nextjs", "TypeScript", "Express", "MongoDB", "sequelise", "PostgreSQL"]
},


{
name: "Distributed-newsletter-email-delivery-with-kafka",
desc: "A distributed system that sends out newsletter notifications and newsletter itself to selected emails using nodejs and Kafka cloud achitecture",
link: "https://github.com/shola-devv/Distributed-newsletter-email-delivery-with-kafka",
code: "https://github.com/shola-devv/Distributed-newsletter-email-delivery-with-kafka",
stack: ["Node.js", "Kafka",  "Express", "MongoDB", "docker",] 
},


{
name: "Web3 landing pages",
desc: "A collection of web3 themed landing pages deployed on the blockchain - modern, responsive, and built to showcase decentralized aps, Nft projects and blockchain startups ",
link: "https://web3-landing-pages-nkshxuosn-emmanuel-s-projects-5c6a2d82.vercel.app/",
code:"https://github.com/shola-devv/Web3LandingPages",
stack: ["Next.js(typescript)", "Node.js", "Express", "MongoDB", "solidity", "viem", "ethers"]
},
//add cryptosnoop, landing pages, Nft with a whitelist, j2m3(change wheen you make a new one)
{
name: "Privimigration",
desc: "A social media web-app where people can share their journey plans, get advice and give advice on imigration",
link: "https://privimigration.vercel.app",
code:"https://github.com/shola-devv/PRIVIMIGRATION",
stack: ["Next.js(javascript)", "Node.js",  ]
},
];


function usePlusGrid(fieldRef, svgRef) {
  useEffect(() => {
    function draw() {
      const field = fieldRef.current;
      const svg = svgRef.current;
      if (!field || !svg) return;

      const W = field.offsetWidth;
      const H = field.offsetHeight;
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      svg.setAttribute("width", W);
      svg.setAttribute("height", H);

      const spacing = 38;
      const arm = 9;
      const cols = Math.ceil(W / spacing) + 1;
      const rows = Math.ceil(H / spacing) + 1;

      let html = "";
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing;
          const y = r * spacing;
          const isOrange = (r * cols + c) % 7 === 3 || (r + c) % 11 === 5;
          const color = isOrange ? "#E07B3A" : "#d0cec8";
          const sw = isOrange ? 1.8 : 1;
          html += `<line x1="${x}" y1="${y - arm}" x2="${x}" y2="${y + arm}" stroke="${color}" stroke-width="${sw}"/>`;
          html += `<line x1="${x - arm}" y1="${y}" x2="${x + arm}" y2="${y}" stroke="${color}" stroke-width="${sw}"/>`;
        }
      }
      svg.innerHTML = html;
    }

    const timer = setTimeout(draw, 80);
    window.addEventListener("resize", draw);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", draw);
    };
  }, [fieldRef, svgRef]);
}

const Portfolio = () => {
  const fieldRef = useRef(null);
  const svgRef = useRef(null);
  usePlusGrid(fieldRef, svgRef);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-16 font-mono">

      {/* ── About ── */}
      <section className="mb-14 sm:mb-20">
        {/*
          Uncomment when profile photo is available:
          <img
            src="/mypic.jpeg"
            alt="Shola Emmanuel Fayinminu"
            className="w-20 h-20 rounded-full mb-5 block"
          />
        */}
        <h1 className="text-xl sm:text-2xl font-normal text-neutral-900 leading-snug mb-4">
          Shola Emmanuel<br />Fayinminu
        </h1>
        <p className="text-[13px] text-neutral-400 tracking-widest mb-5">
          Web3 software developer
        </p>
        <p className="text-sm text-neutral-500 leading-relaxed mb-3">
          I'm a web3 software developer with a
          strong interest in the future of decentralized technology. I build full-stack web3 applications using the MERN and PERN stacks, write Solidity smart contracts, and handle on-chain interactions with viem and ethers.js.
        </p>
         
        <p className="text-sm text-neutral-500 leading-relaxed">
          I'm strongly interested in the gamification of web3 and
          passionate about building software that feels{" "}
          <span className="text-[#E07B3A]">forward-looking </span>
        - My work and portfolio reflects just that.
        </p>
      </section>

      {/* ── Skills ── */}
      <section className="mb-14 sm:mb-20">
        <p className="text-[11px] uppercase tracking-widest text-neutral-300 mb-6">Skills</p>
        <div ref={fieldRef} className="relative overflow-hidden min-h-44 sm:min-h-56 p-6 sm:p-12">
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          />
          <div className="relative z-10 flex flex-wrap gap-x-5 gap-y-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-[13px] text-neutral-900 leading-relaxed tracking-wide"
                style={{ background: "rgba(255, 255, 255, 1)", padding: "2px 0" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="mb-14 sm:mb-20">
        <p className="text-[11px] uppercase tracking-widest text-neutral-300 mb-6">Projects</p>
        {projects.map((project, i) => (
          <div
            key={project.name}
            className="py-7"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-0 mb-2">
              <span className="text-[15px] font-normal text-neutral-900">
                {project.name}
              </span>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#E07B3A] underline tracking-wider"
                >
                  live ↗
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#E07B3A] underline tracking-wider"
                >
                  code ↗
                </a>
              </div>
            </div>
            <p className="text-[13px] text-neutral-500 leading-relaxed mb-2">
              {project.desc}
            </p>
            <p className="text-[11px] text-[#E07B3A] leading-relaxed tracking-wide">
              {project.stack.join(" · ")}
            </p>
          </div>
        ))}
      </section>

      {/* ── Footer ── */}
      <div
        className="flex gap-6 pt-10 sm:pt-12 "
        
      >
        <a
          href={`https://twitter.com/intent/follow?screen_name=${myUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#E07B3A] underline tracking-widest"
        >
          X / Twitter ↗
        </a>
        <a
          href="https://github.com/shola-devv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#E07B3A] underline tracking-widest"
        >
          GitHub ↗
        </a>
        <a
          href="mailto:creekemmanuelf@gmail.com"
          className="text-xs text-[#E07B3A] underline tracking-widest"
        >
          Email ↗
        </a>

         <a
          href="https://medium.com/@olusholaemmanuelfayinminu"
          className="text-xs text-[#E07B3A] underline tracking-widest"
        >
          Medium ↗
        </a>
      </div>

    </div>
  );
};

export default Portfolio;