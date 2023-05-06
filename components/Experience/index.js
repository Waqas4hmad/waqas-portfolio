import React from 'react'
import { Container } from '..'
import Image from 'next/image'
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import skillsf from "../../data/techskills.json"


function Experience() {
    return (
        <div id="skills-section" className="w-full h-auto  py-[50px]">
            <Container>
                <div className="head mx-auto flex flex-col items-center justify-center text-center md:items-center md:justify-start md:flex-row md:px-0">
                    <h1 data-aos="fade-right" className="text-[35px] font-bold md:mr-[50px]">Work
                        <span className='text-green-700'> Experiences</span></h1>
                    <p data-aos="fade-left" className="text-[12px] text-white-200 ">Best Skills</p>
                </div>
                <div id="quote-cont" className='w-full h-auto mt-[20px] relative p-2 md:p-0'>

                    <QuoteCard />
                </div>
            </Container>
        </div>
    )
}

export default Experience

function QuoteCard(props) {

    return (

        <div className='flex  flex-wrap items-center justify-center  ' >
            {
                skillsf.skill.map((skill, i) => {
                    return (

                        <div data-aos="zoom-out-right" className='flex flex-col w-[180px] m-5 '>
                            <div id="t-box" className='relative h-auto  flex flex-col items-center border-2 border-slate-400  justify-center  md:px-[20px] md:py-[50px] rounded-[100px] overflow-hidden hover:border-2 hover:border-green-500'>
                                <Image src={skill.img} width={80} height={80} />
                                <h1 className='text-3xl center pt-5 text-green-500'>{skill.rating}</h1>
                            </div>
                            <p className='text-xl  pt-5 text-white  text-center'>{skill.name}</p>
                        </div>
                    )
                }
                )
            }

        </div>
    )
}

