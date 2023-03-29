import React from "react";
import {TbMailFast} from "react-icons/all";

export default function Home() {
    return (
        <main className="bg-dark w-full">
            <div className="bg-primary h-screen relative overflow-x-hidden">
                <div id="triangle-topleft"/>
                <div className="flex flex-col w-[25%] whitespace-nowrap absolute top-[15vh]  left-[20vw] md:left-[15vw]">
                    <h2 className="text-[20px] md:text-[40px] font-abel text-white">HEY, MY NAME IS</h2>
                    <h2 className="text-[48px] md:text-[96px] font-amatic text-secondary self-center">Alexander Aust</h2>
                    <h2 className="text-[20px] md:text-[40px] font-abel text-white self-end">I&apos;M A DEVELOPER</h2>
                </div>
                <div className="flex flex-col absolute right-[3vw] bottom-[3vh] items-center select-none">
                    <a className="flex flex-col items-center cursor-pointer" target="_blank" href="https://github.com/alaust-dev/">
                        <img src="/github.png" className="w-[32px] md:w-[64px] h-[32px] md:h-[64px]"/>
                        <div className="text-center font-abel text-[16px] md:text-[32px]">GitHub</div>
                    </a>
                    <a className="flex flex-col items-center cursor-pointer select-none" href="mailto:mail@alexander-aust.de">
                        <TbMailFast style={{strokeWidth: "1"}} className="w-[42px] md:w-[73px] h-[42px] md:h-[73px] mr-2 md:mr-4"/>
                        <div className="text-center font-abel text-[16px] md:text-[32px]">Mail Me</div>
                    </a>
                </div>
            </div>

            {/* Featured Projects */}
            <div className="relative bg-dark min-h-[100vh] w-full">
                <h2 className="absolute left-10 top-5 text-[48px] md:text-[96px] font-amatic text-secondary">Featured Projects</h2>

                <div className="grid grid-cols-1 w-full h-full pt-[20vh] pb-[5vh] px-[10vw]">
                    <div className="my-10 flex flex-row">
                        <img src="/frostblossom.png" className="w-[550px] h-[300px] rounded-2xl w-full"/>
                        <div className="ml-5 py-7 text-primary font-abel">
                            <h3 className="text-5xl">FrostBlossomMC</h3>
                            <p className="text-2xl my-4">FrostBlossomMC is a plugin framework for Minecraft that lets developers easily add new items to the game. With a set of tools and APIs,
                                developers can create weapons, tools, and cosmetic items with unique properties. FrostBlossomMC is designed exclusively for adding new items and does not support any
                                other modifications to the game.</p>
                            <a className="border-2 border-primary p-2 text-lg hover:text-secondary hover:border-secondary rounded-md transition-colors duration-300 cursor-pointer"
                               target="_blank" href="https://github.com/alaust-dev/FrostBlossomMC">LEARN MORE</a>
                        </div>
                    </div>
                    <div className="w-[100%] h-[1px] bg-primary opacity-40 justify-self-center my-5"/>
                    <div className="my-10 flex flex-row">
                        <div className="ml-5 py-7 text-primary font-abel">
                            <h3 className="text-5xl">Honoka-Maid</h3>
                            <p className="text-2xl my-4">Honoka is a friendly and efficient bot designed to maintain and moderate discord servers, ensuring a pleasant and relaxed atmosphere for all
                                users. With its intuitive features and responsive commands, Honoka is the ideal addition to any server seeking to improve communication and community engagement.</p>
                            <a className="border-2 border-primary p-2 text-lg hover:text-secondary hover:border-secondary rounded-md transition-colors duration-300 cursor-pointer"
                               target="_blank" href="https://github.com/alaust-dev/Honoka-Maid">LEARN MORE</a>
                        </div>
                        <img src="/honoka-maid.png" className="w-[550px] h-[300px] scale-125 rounded-2xl w-full"/>
                    </div>
                </div>
            </div>
        </main>
    )
}
