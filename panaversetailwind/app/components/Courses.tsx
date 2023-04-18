import React from "react";
import Image from "next/image";

export default function Courses() { 
    return (
        <>
            <div className=" w-full pb-20 pt-20  border-b-2    ">
                <div className="flex justify-center text-center my-4 w-full px-2">
                    <h1 className="border-2 border-black px-10 py-6 rounded-lg text-4xl font-bold ">Courses <span className="text-red-600">We</span> Offer</h1>
                </div>
                <div className=" space-y-8 py-4">
                    <div className="flex flex-wrap px-2 lg:space-x-10 justify-center w-full">
                        <div className="flex flex-col py-8 border-2 border-black rounded-lg my-2 w-full lg:w-3/12 text-center p-4 bg-red-200">
                            <Image src="/ai.jpg" alt="" width={"200"} height={"100"} className="m-auto w-auto rounded-lg" />
                            <h1 className="text-2xl font-semibold my-4">Artificial Intelligence(AI) and Deep Learning Specialization</h1>
                            <p className="text-lg my-2">The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p>
                            <a href="" className="mt-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                        </div>
                        <div className="flex flex-col py-8 border-2 border-black rounded-lg my-2 w-full lg:w-3/12 text-center p-4 bg-red-200">
                            <Image src="/ai.jpg" alt="" width={"200"} height={"100"} className="m-auto w-auto rounded-lg" />
                            <h1 className="text-2xl font-semibold my-4">Artificial Intelligence(AI) and Deep Learning Specialization</h1>
                            <p className="text-lg my-2">The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p>
                            <a href="" className="mt-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                        </div>
                        <div className="flex flex-col py-8 border-2 border-black rounded-lg my-2 w-full lg:w-3/12 text-center p-4 bg-red-200">
                            <Image src="/ai.jpg" alt="" width={"200"} height={"100"} className="m-auto w-auto rounded-lg" />
                            <h1 className="text-2xl font-semibold my-4">Artificial Intelligence(AI) and Deep Learning Specialization</h1>
                            <p className="text-lg my-2">The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p>
                            <a href="" className="mt-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                        </div>
                    </div>
                    <div className="flex flex-wrap px-2 lg:space-x-10 justify-center">
                        <div className="flex flex-col border-2 border-black py-8 rounded-lg my-2 w-full lg:w-3/12 text-center p-4 bg-red-200">
                            <Image src="/ai.jpg" alt="" width={"200"} height={"100"} className="m-auto w-auto rounded-lg" />
                            <h1 className="text-2xl font-semibold my-4">Artificial Intelligence(AI) and Deep Learning Specialization</h1>
                            <p className="text-lg my-2">The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p>
                            <a href="" className="mt-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                        </div>
                        <div className="flex flex-col border-2 border-black py-8 rounded-lg my-2 w-full lg:w-3/12 text-center p-4 bg-red-200">
                            <Image src="/ai.jpg" alt="" width={"200"} height={"100"} className="m-auto w-auto rounded-lg" />
                            <h1 className="text-2xl font-semibold my-4">Artificial Intelligence(AI) and Deep Learning Specialization</h1>
                            <p className="text-lg my-2">The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p>
                            <a href="" className="mt-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                        </div>
                        <div className="flex flex-col border-2 border-black py-8 rounded-lg my-2 w-full lg:w-3/12 text-center p-4 bg-red-200">
                            <Image src="/ai.jpg" alt="" width={"200"} height={"100"} className="m-auto w-auto rounded-lg" />
                            <h1 className="text-2xl font-semibold my-4">Artificial Intelligence(AI) and Deep Learning Specialization</h1>
                            <p className="text-lg my-2">The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p>
                            <a href="" className="mt-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}