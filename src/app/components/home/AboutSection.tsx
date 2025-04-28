import { openSans } from "@/app/layout";
import companyImage from "@/app/assets/company-image.png"
import companyImageDesktop from "@/app/assets/company-image-desktop.png"

const AboutSection: React.FC = () => {

    return (
        <>
            <section id="about" className="target_section bg-neutral px-17.5 md:px-25 lg:px-40 xl:px-61.5 py-15 md:py-24 lg:py-32 xl:py-40">
                <div className="flex flex-col gap-15 md:gap-20 lg:gap-30 xl:gap-40">
                    <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-15">
                        <h3 className="text-primary text-xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold xl:font-medium max-w-53 md:max-w-96 lg:max-w-128 xl:max-w-158.5 opacity-80">
                            WHO ARE WE?
                        </h3>

                        <p className={"text-sm/6 md:text-base text-justify " + openSans.className}>
                            Incorporated in 2002, Ubotex Limited is a leading Nigerian firm specializing in cement distribution, building materials, and transport haulage. Committed to excellence, we deliver reliable, efficient, and innovative services across a wide network. Backed by an experienced team, we strive to exceed customer expectations and lead in distribution and transportation across the South-South and beyond.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-15">
                        <h3 className="text-primary text-xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold xl:font-medium max-w-53 md:max-w-96 lg:max-w-128 xl:max-w-158.5 opacity-80">
                            STRENGTH YOU CAN BUILD ON
                        </h3>

                        <div className="card md:card-side self-center bg-neutral w-full max-w-103 md:max-w-full rounded-none gap-4 md:gap-6 lg:gap-8 xl:gap-11">
                            <figure className="md:w-[50%]">
                                <img
                                    className="md:hidden"
                                    src={companyImage.src}
                                    alt="company" />

                                <img
                                    className="hidden md:flex"
                                    src={companyImageDesktop.src}
                                    alt="company" />
                            </figure>
                            <div className="card-body md:w-[50%] md:justify-center p-0">
                                <p className={"text-sm/6 md:text-base/8 xl:font-semibold text-base-content grow-0 " + openSans.className}>
                                    From top-grade cement to premium building materials, Ubotex Limited is your trusted partner in construction. With a commitment to quality, reliability, and efficiency, we provide the essentials that bring your projects to life on time and with excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection;