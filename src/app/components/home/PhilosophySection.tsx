import { Open_Sans } from "next/font/google";
import targetDartIcon from "@/app/assets/target-dart-icon.png"
import eyeIcon from "@/app/assets/eye-icon.png"
import trophyIcon from "@/app/assets/trophy-icon.png"
import Image, { StaticImageData } from "next/image";
import philosophySectionBG from "@/app/assets/philosophy-section-bg.png"
import React from "react";

interface CardProps {
    title: string
    content: string
    icon: StaticImageData
    colorClassName: string
    className?: string
}

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"]
})

const Card: React.FC<CardProps> = ({ title, content, icon, colorClassName, className }) => {
    return (
        <div className={`card ${colorClassName} ${colorClassName == "bg-neutral" ? "text-base-content" : "text-neutral"} w-full max-w-90 md:grow-1 lg:w-90.5 lg:h-131.5 md:rounded-lg shadow-lg p-0 ` + className}>
            <div className="card-body items-center text-center gap-3 lg:gap-5 py-5.5 lg:py-27.5 px-3.5">
                <figure className="size-6 lg:size-20.5">
                    <Image src={icon} alt="icon" className="w-full h-full" />
                </figure>
                <h2 className="card-title text-base lg:text-[40px] lg:font-semibold">{title}</h2>
                <p className="text-sm lg:text-base/7 grow-0">{content}</p>
            </div>
        </div>
    )
}

const PhilosophySection: React.FC = () => {

    return (
        <>
            <section className={`relative bg-neutral md:bg-primary flex flex-col py-9 md:py-10 xl:py-17.5 px-9 xl:px-39 ` + openSans.className}>
                <img src={philosophySectionBG.src} alt="background vector" className="hidden md:block top-0 left-0 absolute size-full object-cover"/>
                <div className="md:bg-primary flex flex-col md:flex-row items-center md:items-stretch lg:items-center justify-center gap-6 lg:gap-7 md:py-16 lg:py-20 xl:py-25 z-10">
                    <Card
                        title="OUR MISSION"
                        content="At Ubotex Limited, we drive corporate success by anticipating and exceeding customer needs through innovation, strategic excellence, and an unwavering commitment to sustainable, exceptional service."
                        icon={targetDartIcon}
                        className=""
                        colorClassName="bg-primary" />

                    <Card
                        title="OUR MISSION"
                        content="Our business vision is to be a leading mayor distributor, transporter amongst others in the South – South and beyond."
                        icon={eyeIcon}
                        colorClassName="bg-[#D33027]" />

                    <Card title="OUR VALUES"
                        content="Ubotex Limited is driven by customer centricity, innovation, excellence, sustainability, competence, operational efficiency, and a vision to lead in distribution and transportation across the South-South region and beyond."
                        icon={trophyIcon}
                        colorClassName="bg-neutral"
                        className="" />
                </div>
            </section>
        </>
    )
}

export default PhilosophySection;