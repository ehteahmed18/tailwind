import React from "react";
import Image from "next/image";

export default function Program() {
    return (
        <>
            <div className="flex flex-wrap py-10  w-full border-b-2">
                <div className="flex justify-center items-center w-full md:w-5/12 lg:w-6/12 ">
                    <Image src="/program.jpg" alt="program" width={"200"} height={"200"} className="sm:w-[250px] lg:w-[300px]"/>
                </div>
                <div className="flex flex-col justify-start px-6 items-center w-full md:w-7/12 lg:w-5/12 py-12 ">
                    <h1 className="text-3xl lg:text-4xl font-bold border-l-4 border-red-700 pl-4">The Program in a Nutshell: Earn While You Learn</h1>
                    <p className=" text-lg md:text-xl mt-4 pl-4 border-l-4 ">In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program&#39;s beginning. It resembles a cross between a corporate venture and an educational project.</p>
                </div>
            </div>
        </>
    )
}