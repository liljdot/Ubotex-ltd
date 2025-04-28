"use client"

import { Open_Sans } from "next/font/google"
import project1Image from "@/app/assets/project-1-image.png"
import project2Image from "@/app/assets/project-2-image.png"
import project3Image from "@/app/assets/project-3-image.png"
import { StaticImageData } from "next/image";
import { ClickActionButton } from "../ActionButton";
import GalleryModal from "./GalleryModal"
import { useState } from "react"

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

interface ProjectCardProps {
    image: StaticImageData
    title: string
    date: string
    directory?: string
    setmodalIsOpen: (val: boolean) => void
    setProjectDirectory?: (val: string) => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, setmodalIsOpen, title, date, directory, setProjectDirectory }) => {

    return (
        <>
            <div className="card shrink-0 w-full max-w-103 xl:w-135 xl:max-w-135 shadow-sm rounded-none pb-4 xl:pb-8 self-stretch mx-auto">
                <figure>
                    <img
                        src={image.src}
                        alt="Project" />
                </figure>
                <div className={"card-body gap-2 text-base-content px-3 xl:px-5 pt-3 xl:pt-1 " + openSans.className}>
                    <h2 className="card-title text-base xl:text-2xl font-semibold">{title}</h2>
                    <p className="text-xs xl:text-xl xl:font-semibold">{date}</p>
                </div>

                <div className="card-actions self-center">
                    <ClickActionButton click={() => {
                        if (setProjectDirectory) {
                            setProjectDirectory(directory!)
                        }
                        setmodalIsOpen(true)
                    }} className="bg-primary text-neutral">
                        View Gallery
                    </ClickActionButton>
                </div>
            </div>
        </>
    )
}

const ProjectsSection: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [projectDirectory, setProjectDirectory] = useState<string>("")

    return (
        <>
            <section id="projects" className="target_section flex flex-col 
            gap-8 md:gap-12 lg:gap-14 xl:gap-17.5 
            px-9 md:pl-16 lg:pl-24 xl:pl-32.5 md:pr-0 
            py-15 md:py-0
            md:mb-20 lg:mb-40 xl:mb-61">
                {modalIsOpen && <GalleryModal directory={projectDirectory} setModalIsOpen={setModalIsOpen} />}
                <div className="md:bg-[url(assets/projects-section-bg.png)] bg-cover bg-center flex flex-col 
                gap-2 md:gap-4 lg:gap-6 xl:gap-8 
                md:pt-20 lg:pt-40 xl:pt-61">
                    <h1 className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-medium">OUR PROJECTS</h1>

                    <p className={"text-xs md:text-sm lg:text-base md:max-w-md xl:max-w-126 text-base-content text-justify " + openSans.className}>At UBOTEX, our projects showcase our expertise in cement distribution and high-quality building materials. From residential and commercial developments to large-scale infrastructure, we supply the essential materials that bring these constructions to life. Explore the projects below to see how UBOTEX is shaping the future of construction with strength and reliability</p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-center md:overflow-x-scroll">
                    <ProjectCard directory="school" title="THE MODEL PRIMARY SCHOOL PROJECT, IKOT ISONG" date="Date of Commission: Friday, April 18th, 2025." setmodalIsOpen={setModalIsOpen} image={project1Image} setProjectDirectory={setProjectDirectory} />
                    <ProjectCard directory="akpabin" title="Ibesikpo asuntan LGA Ikot Akpabin" date="Date of Commission: 12th April, 2015" setmodalIsOpen={setModalIsOpen} image={project2Image} setProjectDirectory={setProjectDirectory} />
                    <ProjectCard directory="school" title="THE MODEL PRIMARY SCHOOL PROJECT, IKOT ISONG" date="Date of Commission: Friday, April 18th, 2025." setmodalIsOpen={setModalIsOpen} image={project3Image} setProjectDirectory={setProjectDirectory} />
                </div>
            </section>
        </>
    )
}

export default ProjectsSection;