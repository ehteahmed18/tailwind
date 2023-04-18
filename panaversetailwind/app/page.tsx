import Image from 'next/image'
import { Inter } from 'next/font/google'
import panaversePic from '../public/panaverse.png';
import styles from './page.module.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Program from './components/Program';
import Program2 from './components/Program2';
import Courses from './components/Courses';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Program2/>
      <Courses/>
      <Program/>
      <Footer/>
    </>
  )
}
