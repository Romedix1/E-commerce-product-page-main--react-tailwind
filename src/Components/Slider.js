import React, { useState } from "react";
import SliderData from '../Data/SliderData'
import { AnimatePresence, motion } from 'framer-motion'

export default function Slider() {
    
    // default slider section states
        const [currentSlide, setCurrentSlide] = useState(0)
        const [direction, setDirection] = useState(0)

    // desktop overlay slides section    
        const [biggerSlideStatus, setBiggerSlideStatus] = useState(false)
        const [currentBiggerSlide, setCurrentBiggerSlide] = useState(0)


    // default changing slide functions
    
    const nextSlide = () => {
        setCurrentSlide(currentSlide + 1)
        setDirection(1)

        if(currentSlide > SliderData.length-2)
        {
          setCurrentSlide(0)
        }
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide - 1)
        setDirection(-1)

        if(currentSlide <= 0)
        {
             setCurrentSlide(3)
        }
        console.log(currentSlide)
     }

    // changing slides overlay functions
    const nextBiggerSlide = () => {
        setCurrentBiggerSlide(currentBiggerSlide + 1)
        setDirection(1)

        if(currentBiggerSlide > SliderData.length-2)
        {
            setCurrentBiggerSlide(0)
        }
    }

    const prevBiggerSlide = () => {
        setCurrentBiggerSlide(currentBiggerSlide - 1)
        setDirection(-1)

        if(currentBiggerSlide <= 0)
        {
            setCurrentBiggerSlide(3)
        }
        console.log(currentBiggerSlide)

     }

     function desktopChangeSlide(item) {
        setCurrentSlide(item.id-1);
    }

    function desktopChangeBiggerSlide(item) {
        setCurrentBiggerSlide(item.id-1);
    }

    //  setting direction functions

     function desktopBiggerSetDirection(item) {
        if (currentBiggerSlide > item.id-1)
        {
            setDirection(-1)
        } else {
            setDirection(1)
        }
    }


    function desktopSetDirection(item) {
        if (currentSlide > item.id-1)
        {
            setDirection(-1)
        } else {
            setDirection(1)
        }
    }

    // open slider overlay function

    const openBiggerSlides = () => {
        if(window.innerWidth >= 1024)
        {
            setBiggerSlideStatus(true)
        }

     }


    // slides elements 
     
    const sliderThumbnails = SliderData.map(item => {
        return (
            <img onClick={() => {
                desktopChangeSlide(item);
                desktopSetDirection(item)
            }}className={`w-[21%] rounded-2xl mx-2 border-4 border-solid hover:opacity-40 cursor-pointer xl:w-[22%] duration-300
            ${currentSlide===item.id-1 ? "border-orange-500 " : "border-transparent"}`} key={item.id} src={`images/${item.thumbnailUrl}`}/>
        )
    })

    const variants = {
        initial: (direction) => {
            return {
                x: direction > 0 ? 300 : -300,
            }
        },
        animate: {
            x: 0,
        },
        exit: direction => {
            return {
                x: direction > 0 ? -300 : 300,
            }
        }
    }

    const biggerSliderThumbnails = SliderData.map(item => {
        return (
            <img onClick={() => {
                desktopChangeBiggerSlide(item);
                desktopBiggerSetDirection(item)
            }}className={`w-[21%] rounded-2xl mx-2 border-4 border-solid hover:opacity-40 cursor-pointer xl:w-[18%] duration-300
            ${currentBiggerSlide===item.id-1 ? "border-orange-500 " : "border-transparent"}`} key={item.id} src={`images/${item.thumbnailUrl}`}/>
        )
    })

    const DesktoBigSlider = () => {
        return(
            <section className="hidden lg:block place-items-center w-screen h-screen absolute top-0 left-0 z-60">
                    <div className="bg-black w-screen fixed h-screen opacity-70 top-0 left-0 z-50 "></div>

                    <div className="lg:grid place-items-center relative top-24 z-50">
                        <div className="w-[39%] flex justify-end items-center xl:w-[28%] 2xl:w-[28.5%]">
                            <svg onClick={() => setBiggerSlideStatus(false)} className="scale-x-[1.6] scale-y-[1.6] w-[14px] h-[15px] mb-7 fill-white lg:cursor-pointer lg:hover:fill-orange-500 duration-300" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"/></svg>
                        </div>
                    
                    <div className="overflow-x-hidden w-2/5 xl:w-[29.5%]" >
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.img 
                                src={`${SliderData[currentBiggerSlide].url}`}
                                variants={variants} 
                                animate="animate" initial="initial" 
                                exit="exit" 
                                key={SliderData[currentBiggerSlide].id}
                                custom={direction}
                                alt="" 
                                className="slider--slide-img  lg:rounded-2xl h-[40vw] xl:h-[30vw]"
                                />
                        </AnimatePresence>

                        <button className="slider--dekstop-button   bg-white z-60 px-[2.5vw] py-[2.3vw] flex items-center justify-center absolute top-[40%] left-[27vw] rounded-full cursor-pointer xl:left-[32vw] xl:py-[2vw] xl:px-[2.2vw]"
                        onClick={() => prevBiggerSlide()}>
                            <svg className="slider--arrow-icon  duration-300 w-[15px] h-[20px] scale-x-[1.2] scale-y-[1.2] cursor-pointer  rotate-180" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                        </button>

                        <button className="slider--dekstop-button   bg-white z-60 px-[2.5vw] py-[2.3vw] flex items-center justify-center absolute top-[40%] right-[27vw] rounded-full cursor-pointer xl:right-[32vw] xl:py-[2vw] xl:px-[2.2vw]"
                        onClick={() => nextBiggerSlide()}>
                            <svg className="slider--arrow-icon  duration-300 w-[15px] h-[20px] scale-x-[1.2] scale-y-[1.2] cursor-pointer " xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8"     stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                        </button>
                    </div> 

                <div className="flex w-2/5 justify-center mt-6 xl:w-[35%]">
                    {biggerSliderThumbnails}
                    </div>
                </div>

            </section>
        )
        
    }
    
    ////////////////////////////////////////////////////////////////

    return (
        <>
            <section className="z-10 -top-6 w-full sm:w-6/12 sm:mx-auto sm:mt-5 lg:w-6/12 xl:w-4/12 xl:ml-12 xl:mr-24 2xl:w-[30%] 2xl:ml-36">
                <div className="h-[100vw] overflow-x-hidden relative sm:h-[50vw] lg:h-[37vw] lg:rounded-2xl xl:grid xl:place-items-center xl:h-[30vw] 2xl:h-[25vw]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img 
                            src={`${SliderData[currentSlide].url}`}
                            variants={variants} 
                            animate="animate" initial="initial" 
                            exit="exit" 
                            key={SliderData[currentSlide].id}
                            custom={direction}
                            alt="" 
                            className="slider--slide-img w-full sm:rounded-2xl absolute lg:rounded-2xl lg:cursor-pointer"
                            onClick={() => openBiggerSlides()}/>
                    </AnimatePresence>
                    <button className="bg-white px-[5vw] py-[4vw] flex items-center justify-center absolute top-[45%] left-3 rounded-full cursor-pointer sm:px-[3vw] sm:py-[2.5vw] lg:hidden"
                    onClick={() => prevSlide()}>
                        <img src="./images/icon-previous.svg" alt="previous slide" className="w-[3.5vw] cursor-pointer sm:w-[2vw]" />
                    </button>

                    <button className="bg-white px-[5vw] py-[4vw] flex items-center justify-center absolute top-[45%] right-3 rounded-full cursor-pointer sm:px-[3vw] sm:py-[2.5vw] lg:hidden"
                    onClick={() => nextSlide()}>
                        <img src="./images/icon-previous.svg" alt="next slide" className="rotate-180 w-[3.5vw] cursor-pointer sm:w-[2vw]" />
                    </button>
                </div>
                
                <div className="hidden lg:flex justify-center xl:mt-2 2xl:mt-8 ">
                    {sliderThumbnails}
                </div>

            </section>
                {biggerSlideStatus===true && <DesktoBigSlider />}
        </>
    )
}