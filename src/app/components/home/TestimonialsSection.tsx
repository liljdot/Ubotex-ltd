import { openSans } from "@/app/layout";
import davidOImage from "@/app/assets/david-o-image.jpg"

interface TestimonialCardProps {

}

const TestimonialCard: React.FC<TestimonialCardProps> = () => {

    return (
        <>
            <div className={"card w-90 shrink-0 shadow-sm text-base-content " + openSans.className}>
                <div className="card-body gap-2 px-8 py-5">
                    <div className="flex justify-start items-center gap-2">
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={davidOImage.src} />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h6 className="text-sm font-semibold">David O.</h6>
                            <p className="text-xs">Construction Manager</p>
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
            <section className="flex flex-col gap-6">
                <div className="flex flex-col gap-1 px-9">
                    <h1 className="text-primary text-xl font-semibold">What Our Clients Say</h1>
                    <p className={"text-base-content text-xs " + openSans.className}>At Ubotex, customer satisfaction is at the heart of everything we do. We take pride in providing high-quality building materials, reliable distribution, and exceptional service. But don’t just take our word for it, hear from our satisfied clients who trust us to deliver the best for their projects.</p>
                </div>

                <div className="flex flex-row gap-2 overflow-x-scroll">
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