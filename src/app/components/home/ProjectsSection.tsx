import { openSans } from "@/app/layout";
import project1Image from "@/app/assets/project-1-image.png"
import project2Image from "@/app/assets/project-2-image.png"
import project3Image from "@/app/assets/project-3-image.png"
import { StaticImageData } from "next/image";

interface ProjectCardProps {
    image: StaticImageData
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image }) => {

    return (
        <>
            <div className="card shrink-0 w-full max-w-103 xl:w-135 xl:max-w-135 shadow-sm rounded-none">
                <figure>
                    <img
                        src={image.src}
                        alt="Project" />
                </figure>
                <div className={"card-body gap-2 text-base-content px-3 xl:px-5 pt-3 xl:pt-1 pb-14 xl:pb-29.5 " + openSans.className}>
                    <h2 className="card-title text-base xl:text-2xl font-semibold">--------------- Road</h2>
                    <p className="text-xs xl:text-xl xl:font-semibold">Date of Commission: 12th April, 2015</p>
                </div>
            </div>
        </>
    )
}

const ProjectsSection: React.FC = () => {

    return (
        <>
            <section className="flex flex-col 
            gap-8 md:gap-12 lg:gap-14 xl:gap-17.5 
            px-9 md:pl-16 lg:pl-24 xl:pl-32.5 md:pr-0 
            py-15 md:py-0">
                <div className="md:bg-[url(assets/projects-section-bg.png)] bg-cover bg-center flex flex-col 
                gap-2 md:gap-4 lg:gap-6 xl:gap-8 
                md:pt-20 lg:pt-40 xl:pt-61">
                    <h1 className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-medium">OUR PROJECTS</h1>

                    <p className={"text-xs md:text-sm lg:text-base md:max-w-md xl:max-w-126 text-base-content " + openSans.className}>At UBOTEX, our projects showcase our expertise in cement distribution and high-quality building materials. From residential and commercial developments to large-scale infrastructure, we supply the essential materials that bring these constructions to life. Explore the projects below to see how UBOTEX is shaping the future of construction with strength and reliability</p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-4 items-center md:overflow-x-scroll">
                    <ProjectCard image={project1Image} />
                    <ProjectCard image={project2Image} />
                    <ProjectCard image={project3Image} />
                </div>
            </section>
        </>
    )
}

export default ProjectsSection;