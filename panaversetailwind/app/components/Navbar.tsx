'use client'

import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="w-full fixed bg-gray-200  font-mono z-20 " >
                <div className="w-full justify-between h-auto  px-4 md:items-baseline md:flex md:px-8">
                    <div>
                        <div className=" flex  items-center justify-between py-3 md:py-2 md:block">
                            <Image src="/panaverse.jpg" alt="panaverse" width={"80"} height={"50"} />
                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="md:hidden ">
                                <button
                                    className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <AiOutlineClose width={30} height={30} />
                                    ) : (
                                        <HiMenu

                                            width={30}
                                            height={30}
                                            className="focus:border-none active:border-none "
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex  relative justify-center  md:items-center  md:absolute md:ml-28 md:top-1 left-0 pb-2 mt-8 md:block md:pb-0  md:mt-0  ${navbar ? 'p-12 lg:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="h-40 md:h-auto justify-center md:flex px-4 ">
                                <li className="text-center md:mx-3 p-2 my-2 nav1  hover:bg-red-400 rounded-md">
                                    <a href="../" onClick={() => setNavbar(!navbar)}>
                                        <span className="text-xl">Home</span>
                                    </a>
                                </li>
                                <li className=" text-center md:mx-3 my-2 p-2 nav2 hover:bg-red-400 rounded-md">
                                    <a href="../courses" onClick={() => setNavbar(!navbar)}>
                                        <span className="text-xl ">Courses</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}