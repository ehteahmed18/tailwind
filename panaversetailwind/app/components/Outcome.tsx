'use client'
import React from "react";
import Image from "next/image";
import { TbArrowBadgeRight } from 'react-icons/tb';
import { motion, Variants } from "framer-motion";

export default function Outcome() {
    const introHeaderVariants: Variants = {
        hide: {
            opacity: 0,
            y: 50,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay:0.5,
            },
        },
    };
    return (
        <>
            <motion.div className="flex flex-wrap py-10 lg:space-x-28 space-y-4 md:space-y-0 md:space-x-12 space-x-0 lg:justify-center w-full border-b-2" initial="hide" whileInView="show" exit="hide" variants={introHeaderVariants}>
                <div className="flex flex-col  lg:justify-center px-6 items-start  w-full lg:w-5/12   lg:py-12 py-2 ">
                    <h1 className="text-3xl lg:text-4xl font-bold border-l-4 border-red-700 pl-4">The Outcome for Participants of the Program</h1>
                    <p className=" text-lg lg:text-xl mt-4 pl-4 border-l-4 ">The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.</p>
                </div>
                <div className="flex flex-col lg:pt-0 md:pt-12 justify-start  w-full lg:w-5/12 ">
                    <div className="flex ">
                        <TbArrowBadgeRight className="md:w-10 w-14 sm:h-16 h-14" />
                        <div className="flex flex-col py-4 lg:ml-4">
                            <p className="sm:text-lg">Top 5 Metaverse jobs that will rule the future of tech industry</p>
                            <a href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms" className="text-blue-400 hover:underline">https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms</a>
                        </div>
                    </div>
                    <div className="flex ">
                        <TbArrowBadgeRight className="lg:w-6 w-8 sm:h-16 h-14" />
                        <div className="flex flex-col py-4 lg:ml-4">
                            <p className="sm:text-lg">Blockchain Developer Salary - Jun 2022</p>
                            <a href="https://web3.career/web3-salaries/blockchain-developer" className="text-blue-400 hover:underline">https://web3.career/web3-salaries/blockchain-developer</a>
                        </div>
                    </div>
                    <div className="flex ">
                        <TbArrowBadgeRight className="lg:w-6 w-8 sm:h-16 h-14" />
                        <div className="flex flex-col py-4 lg:ml-4">
                            <p className="sm:text-lg">Web3 Salaries Soar to $750,000 for Rank-and-File Devs</p>
                            <a href="https://thedefiant.io/web3-soaring-salaries/ " className="text-blue-400 hover:underline">https://thedefiant.io/web3-soaring-salaries/ </a>
                        </div>
                    </div>
                    <div className="flex ">
                        <TbArrowBadgeRight className="md:w-8 w-12 sm:h-16 h-14" />
                        <div className="flex flex-col py-4 lg:ml-4">
                            <p className="sm:text-lg">The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internets Uncharted Waters</p>
                            <a href="https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022 " className="text-blue-400 hover:underline">https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022 </a>
                        </div>
                    </div>
                    <div className="flex ">
                        <TbArrowBadgeRight className="lg:w-6 md:w-8 w-12 sm:h-16 h-14" />
                        <div className="flex flex-col py-4 lg:ml-4">
                            <p className="sm:text-lg">How To Become Metaverse Developer: Scope, Skills, and Salary</p>
                            <a href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/ " className="text-blue-400 hover:underline">https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/ </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}