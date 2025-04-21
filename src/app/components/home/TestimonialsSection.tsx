import { openSans } from "@/app/layout";
import davidOImage from "@/app/assets/david-o-image.jpg"
import graceMImage from "@/app/assets/grace-m-image.jpg"
import tundeAImage from "@/app/assets/tunde-a-image.jpg"
import { ReactNode } from "react";
import { StaticImageData } from "next/image";

interface TestimonialCardProps {
    name: string
    title: string
    children: ReactNode
    image: StaticImageData
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, title, children, image }) => {

    return (
        <>
            <div className={"card w-90 shrink-0 shadow-sm text-base-content mx-auto " + openSans.className}>
                <div className="card-body gap-2 md:gap-4 px-8 xl:px-4 py-5">
                    <div className="flex justify-start items-center gap-2">
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={image.src} />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h6 className="text-sm xl:text-lg font-semibold">{name}</h6>
                            <p className="text-xs md:text-sm">{title}</p>
                        </div>
                    </div>

                    <p className="text-sm">
                        {children}
                    </p>
                </div>
            </div>
        </>
    )
}

const TestimonialsSection: React.FC = () => {

    return (
        <>
            <section className="flex flex-col gap-6 md:gap-8 lg:gap-12 xl:gap-16 md:py-8 lg:py-10 xl:py-12.5">
                <div className="flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4 px-9 md:px-12 lg:px-20 xl:px-30">
                    <h1 className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold">What Our Clients Say</h1>
                    <p className={"text-base-content text-xs md:text-sm xl:text-base " + openSans.className}>At Ubotex, customer satisfaction is at the heart of everything we do. We take pride in providing high-quality building materials, reliable distribution, and exceptional service. But don’t just take our word for it, hear from our satisfied clients who trust us to deliver the best for their projects.</p>
                </div>

                <div className="flex flex-row gap-2 md:gap-3 lg:gap-4 xl:gap-5 overflow-x-scroll">
                    <TestimonialCard name="Grace M." title="Interior Designer" image={graceMImage}>
                        "Excellent service and top-quality materials! The doors and ceiling boards we purchased from Ubotex were exactly what we needed for our renovation project."
                    </TestimonialCard>

                    <TestimonialCard name="David O." title="Construction Manager" image={davidOImage}>
                        “Ubotex has been our go-to supplier for premium cement and building materials. Their reliability and product quality have made a huge difference in our projects.”
                    </TestimonialCard>

                    <TestimonialCard name="Tunde A." title="Real Estate Developer" image={tundeAImage}>
                        "From cement to roofing materials, Ubotex provides everything we need with outstanding customer service. Highly recommended!"
                    </TestimonialCard>
                </div>
            </section>
        </>
    )
}

export default TestimonialsSection;