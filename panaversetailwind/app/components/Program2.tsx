import React from "react";
import Image from "next/image";

export default function Program2() {
    return (
        <>
            <div className="flex flex-wrap-reverse pt-10  justify-center  w-full border-b-2">
                <div className="flex flex-col justify-start px-6 items-start  w-full lg:w-5/12  md:w-7/12 py-12 ">
                    <h1 className="text-3xl md:text-4xl font-bold border-l-4 border-red-700 pl-4">Program of Studies</h1>
                    <p className=" text-lg md:text-xl mt-4 pl-4 border-l-4 ">This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. </p>
                </div>
                <div className="flex justify-center items-center w-full md:w-5/12 ">
                    <Image src="/program2.jpg" alt="program" width={"200"} height={"200"} className="sm:w-[250px] lg:w-[300px]"/>
                </div>
            </div>
        </>
    )
}