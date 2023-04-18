import React from "react";
import { FaLinkedinIn, FaFacebook} from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <div className="flex flex-wrap bg-gray-200 justify-center">
                <div className="flex  sm:justify-center pt-10 items-start w-full sm:w-3/12 ">
                    <Image src="/panaverse.jpg" alt="" width={"150"} height={"150"} />
                </div>
                <div className="flex flex-wrap w-full sm:w-6/12 ">
                    <div className="flex sm:w-6/12 w-full sm:py-10 py-4 sm:justify-center ">
                        <ul>
                            <li className="p-2"><a className="text-2xl  font-mono" href="./">Home</a></li>
                            <li className="p-2"><a className="text-2xl  font-mono" href="./courses">Courses</a></li>
                            <li className="p-2"><a className="text-2xl  font-mono" href="./">About</a></li>
                        </ul>
                    </div>
                    <div className="flex sm:w-6/12 w-full sm:py-10 py-4 justify-center">
                        <FaFacebook className="lg:h-8 lg:w-8 h-6 w-6 m-2"/>
                        <FaLinkedinIn className="lg:h-8 lg:w-8 h-6 w-6 m-2"/>
                        <FiGithub className="lg:h-8 lg:w-8 h-6 w-6 m-2"/>
                        <FiTwitter className="lg:h-8 lg:w-8 h-6 w-6 m-2"/>
                    </div>
                </div>
            </div>
        </>
    )
}