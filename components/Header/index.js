import { useState, useEffect } from "react"
import { Container } from ".."
import userAvatar from "../../public/images/avatar/avatar.png"
import { TypeAnimation } from 'react-type-animation';

import usersInfo from "../../data/usersInfo.json"
import languages from "../../data/languages.json"

export default function Header({ children }) {

    const [resumeActive, setResumeActive] = useState(false)
    const [reposcount, setReposCount] = useState(0)
    const [avatar, setAvatar] = useState("")

    const userName = usersInfo.github_username;

    function openResume() {

        setResumeActive(!resumeActive)
    }

    // fetch github repos count
    async function getReposCount() {
        let res;
        if (localStorage.getItem("repo_counts") === null) {

            res = await fetch(`https://api.github.com/users/${userName}`)
            let data = await res.json()

            if (data && data.public_repos !== undefined) {
                const { public_repos, avatar_url } = data;
                localStorage.setItem("repo_counts", JSON.stringify(public_repos))
                // store github user avatar
                localStorage.setItem("github_avatar", JSON.stringify(avatar_url))
                setReposCount(public_repos)
            }
        }

        // get data from cahched localstorage
        let data = JSON.parse(localStorage.getItem("repo_counts"))
        let useravatar = JSON.parse(localStorage.getItem("github_avatar"))

        setReposCount(data)
        setAvatar(useravatar)

        return data
    }

    useEffect(() => {

        (async () => {
            await getReposCount()

        })()

    }, [])




    return (
        <header className={` header w-full h-[850px]  md:h-auto pt-[40px]`}>
            <Container>
                {children}

                {/* shows on desktop */}
                <div className={` w-full  flex align-center items-center justify-center flex-row p-[20px] flex-wrap mt-[25px]`}>

                    <div className={`w-full h-auto  relative md:w-[50%]`}>
                        <div className={``}>
                            <span data-aos="fade-up" className={`py-[2px]  font-bold text-white text-[15px] text-capitalize  `}>
                                HELLO, <span className="text-green-700 ">MY NAME IS </span>
                            </span>

                            <br />
                            <span data-aos="fade-up"
                                style={{
                                    textShadow: " 2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000, 5px 5px 0px rgb(0 0 0 / 20%)"
                                }}
                                className={`font-[Jost] tracking-wide py-[2px]  font-bold text-green-700 text-[80px] text-capitalize whitespace-nowrap  `}>
                                WAQAS <span className="font-[Jost] text-white-200">AHMAD</span>
                            </span>
                            <br />
                            <TypeAnimation
                                sequence={['I', 1000, 'I AM', 1000, 1500]}
                                //  Continuing previous Text
                                className={`py-[2px] text-white font-bold tracking-wider text-[15px] text-capitalize  `}
                                wrapper="span"
                                cursor={false}

                            />
                            <TypeAnimation
                                sequence={[ 3000,'Mobile Application Developer', 4000, 'Full Stack Developer', 4000,]}
                                 speed={270} 
                                 cursor={false}

                                className={`font-[Caveat] text-[30px] px-2 `}
                                wrapper="span"
                                repeat={Infinity}
                            />
                            {/* <span data-aos="fade-up" className={`py-[2px] text-white font-bold tracking-wider text-[15px] text-capitalize  `}>
                                I AM <span className=" font-[Caveat] text-[30px] px-2  ">  Mobile Application Developer </span>
                            </span> */}

                            <br />
                            <br />
                            <span data-aos="fade-in" className={` text-[20px] md:text-[18px] text-gray-300 leading-7 `}>
                                {usersInfo.subTitle}
                            </span>
                            <br />
                        </div>
                        <div className={` top-[0px] flex align-start items-start justify-start w-full py-5`}>
                            <a className="btn hover:bg-green-700 hover:text-white-300" onClick={openResume}> DOWNLOAD CV</a>
                        </div>

                        {resumeActive && <ResumeViewer openResume={openResume} />}
                    </div>
                    <div data-aos="fade-left" className={`main w-full h-full hidden md:flx  relative`}>
                        <div data-aos="fade-up" className={`img-cont p-[15vmin]   ss  `}>

                            <img src={"/images/pic.png"} className={`sliderimage`} />
                            <div className="circle circle-1"></div>
                            <img src={"/images/pat-2.png"} className={`circle img1`} />
                            <img src={"/images/pat-2.png"} className={`circle img2`} />
                            <img src={"/images/pat-2.png"} className={`circle img3`} />
                            <div className="info-list">

                                <ul>
                                    <li>
                                        <span class='num'>
                                            6 <strong className="text-green-700">+</strong>
                                        </span>
                                        <span class='value'>
                                            Years of<strong className="text-green-700"> Experiance</strong>
                                        </span>
                                    </li>
                                    <li>
                                        <span class='num'>
                                            25 <strong>+</strong>
                                        </span>
                                        <span class='value'>
                                            Completed<strong className="text-green-700"> Project</strong>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div data-aos="fade-up" className={`circleA`}>
                            <img src={languages.languages.length === 0 && languages.languages.length > 2 ? "/images/svg/react_native.svg" : languages.languages[0]} className={`langImgA`} />
                        </div>
                        <div data-aos="fade-right" className={`circleB`}>
                            <img src={languages.languages.length === 0 && languages.languages.length > 2 ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" : languages.languages[1]} className={`langImgB`} />
                        </div>
                        <div data-aos="fade-left" className={`circleC`}>
                            <img src={languages.languages.length === 0 && languages.languages.length > 2 ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" : languages.languages[2]} className={`langImgC`} />
                        </div> */}
                    </div>
                </div>
            </Container>
        </header>
    )
}

function ResumeViewer({ openResume }) {

    function dowloadCv() {
        let link = document.createElement("a")
        link.href = resume;
        link.download = "resume.pdf"
        link.click()
    }

    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-dark-400 z-[1500] flex flex-row items-center justify-center">
            <div id="box" className="w-[100%] h-[99%] mx-auto bg-dark-100 overflow-hidden rounded-md md:w-[70%]">
                <div id="head" className="w-full h-auto p-3 bg-dark-200 flex items-start justify-start">
                    <h2>My Resume / CV</h2>
                    <button className="px-3 py-1 flex flex-row items-center justify-center bg-green-300 ml-4 text-[12px] text-dark-300 font-bold rounded-[5px] scale-[.90] transition-all hover:scale-[.95]  " onClick={dowloadCv}>Download</button>
                    <button className="px-3 py-1 flex flex-row items-center justify-center bg-red-500 ml-4 text-[12px] text-dark-300 font-bold rounded-[5px] scale-[.90] transition-all hover:scale-[.95] " onClick={openResume}>Close</button>
                </div>
                <iframe src={"/CV/resume.pdf"} frameborder="0" className="w-full h-full overflow-scroll bg-white-200 mt-0"></iframe>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}


