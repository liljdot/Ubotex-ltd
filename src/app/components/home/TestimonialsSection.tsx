import { openSans } from "@/app/layout";
import davidOImage from "@/app/assets/david-o-image.jpg"

interface TestimonialCardProps {

}

const TestimonialCard: React.FC<TestimonialCardProps> = () => {

    return (
        <>
            <div className={"card w-90 shrink-0 shadow-sm text-base-content " + openSans.className}>
                <div className="card-body gap-2 md:gap-4 px-8 xl:px-4 py-5">
                    <div className="flex justify-start items-center gap-2">
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={davidOImage.src} />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h6 className="text-sm xl:text-lg font-semibold">David O.</h6>
                            <p className="text-xs md:text-sm">Construction Manager</p>
                        </div>
                    </div>

                    <p className="text-sm">
                        Ubotex has been our go-to supplier for premium cement and building materials. Their reliability and product quality have made a huge difference in our projects.
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
                    <TestimonialCard>

                    </TestimonialCard>

                    <TestimonialCard>

                    </TestimonialCard>

                    <TestimonialCard>

                    </TestimonialCard>

                    <TestimonialCard>

                    </TestimonialCard>

                    <TestimonialCard>

                    </TestimonialCard>
                </div>
            </section>
        </>
    )
}

export default TestimonialsSection;