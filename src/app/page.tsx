import React from "react";
import {TbMailFast} from "react-icons/all";

export default function Home() {
    return (
        <main className="bg-primary h-[100vh] relative">
            <div id="triangle-topleft"/>
            <div className="flex flex-col w-[25%] whitespace-nowrap absolute top-[15vh] left-[10vw]">
                <h2 className="text-[40px] font-amatic text-white">Hey, my name is</h2>
                <h2 className="text-[96px] font-amatic text-secondary self-center">Alexander Aust</h2>
                <h2 className="text-[40px] font-amatic text-white self-end">I&apos;m a Developer</h2>
            </div>
            <div className="flex flex-col absolute right-[25px] bottom-[25px]">
                <a className=" flex flex-col content-center">
                    <img src="/github.png" className="w-[64px] h-[64px]"/>
                    <div className="text-center font-abel text-[32px]">GitHub</div>
                </a>
                <a className="flex flex-col">
                    <TbMailFast className="w-[64px] h-[64px]"/>
                    <div className="text-center font-abel text-[32px]">GitHub</div>
                </a>
            </div>
        </main>
    )
}