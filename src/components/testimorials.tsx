"use client";
import React from 'react'
import { FaUser } from 'react-icons/fa';
import Carousel from "react-multi-carousel";

const data = [
    {
        desc: "TTS helped us transform our entire IT infrastructure. Their expert team guided us every step of the way.",
        name: "Josei",
        desig: "",
    },
    {
        desc: "Thanks to TTS automation services, we increased our productivity by 40%. Their solutions are a game-changer.",
        name: "Manami",
        desig: "",
    },
]

const Testimonials = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white py-16">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
            <h2 className='text-4xl font-bold text-center' data-aos="fade-up" data-aos-delay="300">Our <span className='text-[#1A1F65]'>Testimonial </span></h2>

            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {
                    data.map((item, i) => (
                        <div className="mx-auto h-full w-full max-w-2xl lg:max-w-4xl" key={i}>
                            <figure className="mt-10">
                                <blockquote className="text-center text-sm md:text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                                    <p>“{item.desc}”</p>
                                </blockquote>
                                <figcaption className="mt-10">
                                    <p className='flex justify-center text-2xl md:text-4xl'>
                                    <FaUser /> 
                                    </p>
                                    <div className="mt-4 flex items-center flex-col md:flex-row justify-center space-x-3 text-base">
                                        <div className="font-semibold text-gray-900">{item.name}</div>
                                        <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                                            <circle cx="1" cy="1" r="1" />
                                        </svg>
                                        <div className="text-gray-600">{item.desig}</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    ))
                }
            </Carousel>
        </section>

    )
}

export default Testimonials
