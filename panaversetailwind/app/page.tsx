import Image from 'next/image'
import { Inter } from 'next/font/google'
import panaversePic from '../public/panaverse.png';
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <>
      <div className='navbar flex flex-wrap '>
        <Image src={panaversePic} width={50} height={20} alt={"panaverse"} className="image" />

        <a href="https://google.com">Home</a>
        <a href="https://google.com">Course</a>
        <a href="https://google.com">About Us</a>
        <a href="https://google.com">Apply</a>
      </div>
      <section className="main w-full h-full text-white border-2">
        <h1 className="text-3xl w-1/2 p-3">Become A Certified Web 3.0 and Metaverse Developer</h1>
        <p className="w-1/2 p-3">A One and Quarter Years Panaverse DAO Earn as you Learn Program<br></br>
          Getting Ready for the Next Generation of the Internet<br></br>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies </p>
      </section>
    </>
  )
}
