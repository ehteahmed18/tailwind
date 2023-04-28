import React from "react";
import Image from "next/image";
import Quarter from "./Quarter";

export default function Courses() { 
    return (
        <>
            <div className=" w-full pb-20 pt-20  border-b-2    ">
                <div className="flex justify-center text-center my-4 w-full px-2">
                    <h1 className="border-2 border-black px-10 py-6 rounded-lg text-4xl font-bold ">Courses <span className="text-red-600">We</span> Offer</h1>
                </div>
                <Quarter/>
                <div className=" space-y-8 py-4">
                    <div className="lg:w-7/12 w-full flex flex-col">
                        <h1 className="sm:text-4xl text-3xl lg:px-10 px-2 py-2 font-semibold">Specialized <span className="text-red-600">Tracks:</span></h1>
                        <p className="sm:text-xl text-lg lg:px-10 px-2 py-2">After completing the first three quarters the participants will select one or more specializations consisting of two courses each:</p>
                    </div>
                    <div className="flex flex-wrap px-2 lg:space-x-10 justify-center w-full">
                        <div className="flex flex-col py-8 shadow-2xl rounded-lg my-2 w-full md:w-8/12 lg:w-3/12 text-center p-4 bg-red-200">
                            <Image src="/ai.jpg" alt="" width={"200"} height={"200"} className="m-auto md:w-60 w-auto rounded-lg" />
                            <h1 className="text-2xl font-semibold my-4">Artificial Intelligence(AI) and Deep Learning Specialization</h1>
                            <p className="text-lg my-2">The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p>
                            <a href="./courses/ai" className="mt-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                        </div>
                        <div className="flex flex-col py-8 shadow-2xl rounded-lg my-2 w-full md:w-8/12 lg:w-3/12 text-center p-4 bg-red-200">
                            <Image src="/meta.jpg" alt="" width={"220"} height={"200"} className="m-auto rounded-lg md:w-68 w-auto" />
                            <h1 className="text-2xl font-semibold my-4">Web 3.0 (Blockchain) and Metaverse    Specialization</h1>
                            <p className="text-lg my-2 ">This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds.</p>
                            <a href="./courses/meta" className="mt-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                        </div>
                        <div className="flex flex-col py-8 shadow-2xl rounded-lg my-2 w-full md:w-8/12 lg:w-3/12 text-center p-4 bg-red-200">
                            <Image src="/cc.jpg" alt="" width={"250"} height={"100"} className="m-auto md:w-68 w-auto rounded-lg" />
                            <h1 className="text-2xl font-semibold my-4">Cloud-Native Computing Specialization</h1>
                            <p className="text-lg my-12">The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</p>
                            <a href="./courses/cnc" className="mt-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                        </div>
                    </div>
                    <div className="flex flex-wrap px-2 lg:space-x-10 justify-center">
                        <div className="flex flex-col shadow-2xl py-8 rounded-lg my-2 w-full md:w-8/12 lg:w-3/12 text-center p-4 bg-red-200">
                            <Image src="/iot.jpg" alt="" width={"200"} height={"100"} className="m-auto md:w-60 w-auto rounded-lg" />
                            <h1 className="text-2xl font-semibold my-4">Ambient Computing and IoT Specialization</h1>
                            <p className="text-lg my-2">The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.</p>
                            <a href="./courses/iot" className="mt-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                        </div>
                        <div className="flex flex-col shadow-2xl py-8 rounded-lg my-2 w-full md:w-8/12 lg:w-3/12 text-center p-4 bg-red-200">
                            <Image src="/gnemonic.jpg" alt="" width={"200"} height={"100"} className="m-auto w-auto md:w-60 rounded-lg" />
                            <h1 className="text-2xl font-semibold my-4">Genomics and Bioinformatics Specialization</h1>
                            <p className="text-lg my-2">Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved.</p>
                            <a href="./courses/genomics" className="mt-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                        </div>
                        <div className="flex flex-col shadow-2xl py-8 rounded-lg my-2 w-full md:w-8/12 lg:w-3/12 text-center p-4 bg-red-200">
                            <Image src="/auto.jpeg" alt="" width={"200"} height={"100"} className="m-auto w-auto md:w-60 rounded-lg" />
                            <h1 className="text-2xl font-semibold my-4">Network Programmability and Automation Specialization</h1>
                            <p className="text-lg my-2">Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile.</p>
                            <a href="./courses/net" className="mt-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}