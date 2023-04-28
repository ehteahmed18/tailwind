'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="sm:p-20 md:h-fit  w-full border-2">

                <Slider {...settings}>
                    <div className="flex flex-col py-8  shadow-2xl rounded-lg my-2 w-full md:w-8/12 lg:w-3/12 text-center p-4 bg-red-200">
                        <Image src="/ai.jpg" alt="" width={"200"} height={"200"} className="m-auto md:w-60 w-auto rounded-lg" />
                        <h1 className="text-2xl font-semibold my-4">Artificial Intelligence(AI) and Deep Learning Specialization</h1>
                        <p className="text-lg my-2">The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p>
                        <a href="./courses/ai" className="mt-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                    </div>
                    <div className="flex flex-col py-8 shadow-2xl rounded-lg my-2 w-full md:w-8/12 lg:w-3/12 text-center p-4 bg-red-200">
                        <Image src="/meta.jpg" alt="" width={"220"} height={"200"} className="m-auto rounded-lg md:w-68 w-auto" />
                        <h1 className="text-2xl font-semibold my-4">Web 3.0 (Blockchain) and Metaverse    Specialization</h1>
                        <p className="text-lg my-2 ">This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds.</p>
                        <a href="./courses/meta" className="mt-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                    </div>
                    <div className="flex flex-col py-8 shadow-2xl rounded-lg my-2 w-full md:w-8/12 lg:w-3/12 text-center p-4 bg-red-200">
                        <Image src="/cc.jpg" alt="" width={"250"} height={"100"} className="m-auto md:w-68 w-auto rounded-lg" />
                        <h1 className="text-2xl font-semibold my-4">Cloud-Native Computing Specialization</h1>
                        <p className="text-lg my-12">The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</p>
                        <a href="./courses/cnc" className="mt-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                    </div>
                    <div className="flex flex-col shadow-2xl py-8 rounded-lg my-2 w-full md:w-8/12 lg:w-3/12 text-center p-4 bg-red-200">
                        <Image src="/iot.jpg" alt="" width={"200"} height={"100"} className="m-auto md:w-60 w-auto rounded-lg" />
                        <h1 className="text-2xl font-semibold my-4">Ambient Computing and IoT Specialization</h1>
                        <p className="text-lg my-2 mb-4">The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.</p>
                        <a href="./courses/iot" className="mt-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                    </div>
                    <div className="flex flex-col h-auto shadow-2xl py-8 rounded-lg my-2 w-full md:w-8/12 lg:w-3/12 text-center p-4 bg-red-200 border border-black">
                        <Image src="/gnemonic.jpg" alt="" width={"200"} height={"100"} className="m-auto w-auto md:w-60 rounded-lg" />
                        <h1 className="text-2xl font-semibold my-4">Genomics and Bioinformatics Specialization</h1>
                        <p className="text-lg my-2">Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved.</p>
                        <a href="./courses/genomics" className="mt-4 but border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                    </div>
                    <div className="flex flex-col shadow-2xl py-8 rounded-lg my-2 w-full md:w-8/12 lg:w-3/12 text-center p-4 bg-red-200">
                        <Image src="/auto.jpeg" alt="" width={"200"} height={"100"} className="m-auto w-auto md:w-60 rounded-lg"/>
                        <h1 className="text-2xl font-semibold my-4">Network Programmability and Automation Specialization</h1>
                        <p className="text-lg my-2">Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile.</p>
                        <a href="./courses/net" className="my-4 border-2 border-black m-auto px-2 py-2 rounded-lg hover:bg-red-400">Learn More</a>
                    </div>

                </Slider>
            </div>
        );
    }
}