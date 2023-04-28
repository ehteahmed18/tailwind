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
                    Ambient Computing and IoT Specialization
                    </h1>
                </div>
                <div className="flex flex-wrap w-full py-10 mt-96  justify-center ">
                    <a href="../" className="box w-full lg:w-5/12 bg-red-200  shadow-xl flex flex-col items-center justify-center text-center py-10 px-6 space-y-6 my-4 sm:mx-4 mx-2  md:w-10/12 rounded-2xl">
                        <h1 className="sm:text-4xl text-3xl font-bold text-red-700">Quarter IV</h1>
                        <h2 className="sm:text-2xl text-xl font-semibold ">Ambient Computing with Voice Assistants and Matter Devices</h2>
                        <p className="text-lg">Ambient computing, is the concept of blending computing power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. An ambient approach gets the tech out of your way so you can live your life while getting the help you need. IoT refers to the vast array of devices that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. In this course we will learn to build smart homes with Amazon Alexa and Matter protocol. </p>
                    </a>
                    <a href="../" className="box w-full lg:w-5/12 bg-red-200 shadow-xl flex flex-col items-center justify-center text-center py-10 px-6 space-y-6 my-4 sm:mx-4 mx-2 md:w-10/12 rounded-2xl">
                        <h1 className="sm:text-4xl text-3xl font-bold text-red-700">Quarter V</h1>
                        <h2 className="sm:text-2xl text-xl font-semibold">Embedded Programming using C and using Rust</h2>
                        <p className="text-lg"> We will start by introducing embedded systems and move on to learn the  C++ and Rust programming languages. We will learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers,  playing with GPIOs, and making things that work in no time.</p>
                    </a>
                </div>
            </div>
            <Footer/>
        </>
    )
}