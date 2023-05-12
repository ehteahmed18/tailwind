import React from "react";
import { FaLinkedinIn, FaFacebook, FaYoutube} from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <div className="flex flex-wrap bg-gray-200 justify-center">
                <div className="flex flex-col items-center pt-10 w-full  ">
                    <Image src="/panaverse.jpg" alt="" width={"120"} height={"120"} />
                    <div className="flex  py-2  justify-center ">
                        <ul className="flex">
                            <li className="p-2"><a className="sm:text-xl text-lg font-mono" href="./">Home</a></li>
                            <li className="p-2"><a className="sm:text-xl text-lg  font-mono" href="./courses">Courses</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center border-t border-gray-400 flex-wrap w-full  ">
                    <div className="flex py-4 gap-x-2">
                        <a href="https://www.facebook.com/groups/panaverse"><FaFacebook className="lg:h-6 lg:w-6 h-4 w-4 m-2 fill-blue-600"/></a>
                        <a href="https://www.youtube.com/@panaverse/streams"><FaYoutube className="lg:h-6 lg:w-6 h-4 w-4 m-2 fill-red-600"/></a>
                        <a href="https://github.com/panaverse"><FiGithub className="lg:h-6 lg:w-6 h-4 w-4 m-2 fill-white"/></a>
                        <a href="https://twitter.com/Panaverse_edu"><FiTwitter className="lg:h-6 lg:w-6 h-4 w-4 m-2 fill-blue-400 stroke-blue-400"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}