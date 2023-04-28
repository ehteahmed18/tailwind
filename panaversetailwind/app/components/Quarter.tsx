import React from "react";

export default function Quarter() {
    return (
        <>
            <div className="w-full ">
                <div className="w-full flex flex-col ">
                    <h1 className="sm:text-4xl text-3xl lg:px-10 px-2 py-2 font-semibold">Core <span className="text-red-600"> Courses</span> (Common In All Specialization)</h1>
                    <p className="sm:text-xl text-lg lg:px-10 px-2 py-2">Every participant of the program will start by completing the following three core courses:</p>
                </div>
                <div className="flex flex-wrap w-full py-10 justify-center ">
                    <a href="./" className="box w-full lg:w-5/12 bg-red-200  shadow-xl flex flex-col items-center justify-center text-center py-10 px-6 space-y-6 my-4 sm:mx-4 mx-2  md:w-10/12 rounded-2xl">
                        <h1 className="sm:text-4xl text-3xl font-bold text-red-700">Quarter I (Core)</h1>
                        <h2 className="sm:text-2xl text-xl font-semibold ">CS 101: Object Oriented Programming Using Typescript</h2>
                        
                    </a>
                    <a href="./" className="box w-full lg:w-5/12 bg-red-200 shadow-xl flex flex-col items-center justify-center text-center py-10 px-6 space-y-6 my-4 sm:mx-4 mx-2 md:w-10/12 rounded-2xl">
                        <h1 className="sm:text-4xl text-3xl font-bold text-red-700">Quarter II (Core)</h1>
                        <h2 className="sm:text-2xl text-xl font-semibold">W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</h2>
                        
                    </a>
                    <a href="./" className="box w-full lg:w-5/12 bg-red-200  shadow-xl  flex flex-col items-center justify-center text-center lg:py-16 py-10 px-6 space-y-6 my-4 sm:mx-4 mx-2 md:w-10/12 rounded-2xl">
                        <h1 className="sm:text-4xl text-3xl font-bold text-red-700">Quarter III (Core)</h1>
                        <h2 className="sm:text-2xl text-xl font-semibold ">CS 101: Object Oriented Programming Using Typescript</h2>
                        
                    </a>
                </div>
            </div>
        </>
    )
} 