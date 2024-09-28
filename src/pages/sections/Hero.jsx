import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components";
import React, { useEffect } from "react";
import { logo, widget } from "@/assets";
import { arrowRight } from "@/assets/icons";
import { statistics } from "@/constant";
const inter = Inter({ subsets: ["latin"] });

const Hero = () => {

  return (
    <>
    <section
      id="home"
      className="relative overflow-hidden bg-gray-dark xl:pl-[100px] xl:pt-[10px] pt-[60px] md:pb-[120px] md:pt-[150px] xl:padding-l wide:padding-r padding-b "
    >
    
    <section
    id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-205 max-container'
  >
    <div className='relative xl:w-2/5  flex flex-col justify-center items-start w-full  padding-x pt-28'>
    <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
      <span className=' xl:whitespace-nowrap relative z-10 pr-10'>
        Creating
      </span>
      <br />
      <span className='text-coral-red inline-block mt-3'>EverLasting</span>
    </h1>
    <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
      <span className=' xl:whitespace-nowrap relative z-10 pr-10'>
        Impressions
      </span>
      <br />
   
    </h1>
      <p className='font-montserrat text-slate-gray text-lg leading-2 mt-6 mb-12 '>
      We merge expertise in craftsmanship with innovative thinking to provide brands with the ability to derive value through design
      </p>
  



      <div className='flex justify-start items-start flex-wrap w-full  gap-16'>
      
      <Image
      src={widget}
      alt='shoe colletion'
      width={110}
      height={102}
      className='object-contain relative z-10'
     />
      </div>
    </div>

    <div className='relative flex-1 flex justify-center items-center  ml-20 max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
    <video width="320" height="240" controls autoPlay muted className=' sm:hidden  md:hidden xl:flex'>
      <source src="/n.mp4" type="video/mp4" />
     
 
    </video>

   
    </div>
  </section>


    </section>
  </>
  
  );
}
 export default Hero
