import React from 'react'
import { Container } from '..'
import Image from 'next/image'
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import academicdata from "../../data/academic.json"
import Accordion from '../Accordion'

Accordion
function Academic () {
    return (
        <div id="skills-section" className="w-full h-auto bg-dark-200 py-[50px]">
            <Container>
                <div className="head mx-auto flex flex-col items-center justify-center text-center md:items-center md:justify-start md:flex-row md:px-0">
                    <h1 data-aos="fade-right" className="text-[35px] font-bold md:mr-[50px]">My <span className='text-green-700'>Academic</span></h1>
                    <p data-aos="fade-left" className="text-[12px] text-white-200 ">Best Skills</p>
                </div>
                <div id="quote-cont" className='w-full h-auto mt-[20px] relative  md:p-0'>
                    <AcademicCard/>
                    
                </div>
            </Container>
        </div>
    )
}

export default Academic;

function AcademicCard(props) {

    return (

        <div className='flex  flex-row w-[100%] ' >
            <div className='flex-col  w-full md:w-[50%]  '>
            {
                 academicdata?.academic.map((skill, i) => {
                    return (
                        <Accordion title={skill.name} desc={skill.desc} institude={skill.institude}/>  
                )}
                )
            }
            </div>
            <div className='flex-col  w-[50%]  px-[20px]'>

  {/* {
                 Academic?.academic.map((skill, i) => {
                    return (

                        <Accordion title={"title"} content={"content"} />
                       
                )}
                )
            } */}
            </div>
        </div>
    )
}

