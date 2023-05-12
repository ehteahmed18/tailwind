import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Ai() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col">
                <div className="w-full absolute top-[62px] flex justify-center items-center bg-gradient-to-r from-red-400 to-purple-800">
                    <h1 className="text-center text-4xl font-bold my-20 py-10  text-white w-8/12 ">
                        Artificial Intelligence(AI) and Deep Learning Specialization
                    </h1>
                </div>
                <div className="flex flex-wrap w-full py-10 mt-[500px] sm:mt-96  justify-center ">
                    <a href="../" className="box w-full lg:w-5/12 bg-red-200  shadow-xl flex flex-col items-center justify-center text-center py-10 px-6 space-y-6 my-4 sm:mx-4 mx-2  md:w-10/12 rounded-2xl">
                        <h1 className="sm:text-4xl text-3xl font-bold text-red-700">Quarter IV</h1>
                        <h2 className="sm:text-2xl text-xl font-semibold ">AI-351: Developing Planet-Scale Intelligent APIs and Python Programming</h2>
                        
                    </a>
                    <a href="../" className="box w-full lg:w-5/12 bg-red-200 shadow-xl flex flex-col items-center justify-center text-center py-10 px-6 space-y-6 my-4 sm:mx-4 mx-2 md:w-10/12 rounded-2xl">
                        <h1 className="sm:text-4xl text-3xl font-bold text-red-700">Quarter V</h1>
                        <h2 className="sm:text-2xl text-xl font-semibold">AI-361: Deep Learning and MLOps</h2>
                        
                    </a>
                </div>
            </div>
            <Footer/>
        </>
    )
}