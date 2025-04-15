import serviceCardBG from "@/app/assets/service-card-bg.png"
import ActionButton from "../ActionButton"
import { openSans } from "@/app/layout"
import { ReactNode } from "react"

interface CardProps {
    title: string
    children: ReactNode
    bgFlip?: boolean
}

const Card: React.FC<CardProps> = ({ bgFlip, title, children }) => {

    return (
        <>
            <div className={`card w-full max-w-97 xl:max-w-97 bg-cover bg-center ${bgFlip && "-scale-x-100"}`} style={{ backgroundImage: `url(${serviceCardBG.src})` }}>
                <div className={`card-body px-2.5 md:px-4 lg:px-5 xl:px-6 py-3.5 md:py-4.5 lg:py-5 xl:pt-6 gap-2 ${bgFlip && "-scale-x-100"}`}>
                    <h2 className="card-title block text-sm md:text-base lg:text-lg xl:text-lg text-primary text-center md:text-left font-semibold">{title}</h2>
                    <p className={"text-sm xl:text-xs text-base-content text-center md:text-left " + openSans.className}>{children}</p>
                    <div className="card-actions justify-center md:justify-start md:my-4 xl:my-7.5">
                        <ActionButton to="" className="btn btn-primary">Contact Us</ActionButton>
                    </div>
                </div>
            </div>
        </>
    )
}

const ServicesSection: React.FC = () => {

    return (
        <>
            <section id="services" className="target_section bg-neutral flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-15 px-9 md:px-16 lg:px-24 xl:px-32 py-15 md:py-20 lg:py-28 xl:py-40">
                <h1 className="text-primary text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold">OUR SERVICES</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-x-5 xl:gap-x-3 lg:gap-y-10 xl:gap-y-14 mx-auto">
                    <Card title="Cement Distribution">
                        We distribute premium cement, ensuring a reliable supply for projects of all sizes with guaranteed strength and durability.
                    </Card>

                    <Card title="Ceiling Board Sales" bgFlip>
                        We offer high-quality ceiling boards that enhance interiors with style, insulation, fire resistance, and durability.
                    </Card>

                    <Card title="Nails & Fasteners">
                        We provide durable nails and fasteners designed for strong, reliable, and long-lasting construction connections.
                    </Card>

                    <Card title="Zinc Roofing Solutions" bgFlip>
                        We provide premium zinc roofing, offering durability, corrosion resistance, and lasting protection for all property types.
                    </Card>

                    <Card title="Steel Rod Supply">
                        We supply high-quality steel rods in various sizes, ensuring strength and stability for projects of all scales.
                    </Card>

                    <Card title="Door Sales" bgFlip>
                        We supply durable, stylish, and secure doors, from classic wooden designs to modern high-security options.
                    </Card>
                </div>
            </section>
        </>
    )
}

export default ServicesSection;