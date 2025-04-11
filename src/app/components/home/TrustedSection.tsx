import trustedSectionBG from "@/app/assets/trusted-section-bg.png"
import ActionButton from "../ActionButton";

const TrustedSection: React.FC = () => {

    return (
        <>
            <section style={{ backgroundImage: `linear-gradient(to bottom, #00000088, #00000088), url(${trustedSectionBG.src})` }} className="bg-cover bg-center pt-14 md:pt-20 lg:pt-28 pb-19.5 md:pb-24 lg:pb-32 xl:py-40.5 px-26 md:px-36 lg:px-56 xl:px-91">
                <div className="flex flex-col gap-3 md:gap-5 lg:gap-7 xl:gap-10 sm:px-4 md:px-10 lg:px-16 xl:px-22.5">
                    <div className="flex flex-col text-neutral text-center">
                        <h1 className="text-xl sm:text-2xl/10 md:text-3xl/15 lg:text-5xl/20 xl:text-7xl/25 font-semibold">
                            YOUR TRUSTED PARTNER IN QUALITY BUILDING MATERIALS
                        </h1>
                    </div>

                    <div className="flex justify-center items-center">
                        <ActionButton to="" className="bg-primary text-neutral">Contact Us</ActionButton>
                    </div>
                </div>

            </section>
        </>
    )
}

export default TrustedSection;