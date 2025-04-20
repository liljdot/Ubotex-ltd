import heroBG from "@/app/assets/hero-bg.png"
import { openSans } from "@/app/layout";
import ActionButton from "../ActionButton";
import { whatsappContact } from "@/app/data";

const HeroSection: React.FC = () => {

    return (
        <>
            <section style={{ backgroundImage: `linear-gradient(to bottom, #000000EE, #00000000), url(${heroBG.src})` }} className="bg-cover bg-center pt-17 md:pt-24 lg:pt-40 xl:pt-55 pb-12.5 md:pb-16 lg:pb-24 xl:pb-37">
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10">
                    <div className="flex flex-col gap-5 xl:gap-15 text-neutral text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[105px] xl:font-medium px-5 xl:px-18">Building Dreams, One Brick at a Time.</h1>
                        <p className={"text-sm xl-text-base px-16 xl:px-31 " + openSans.className}>
                            Supplying quality cement and building materials to turn visions into reality.
                            <br />
                             At Ubotex Ltd, every brick lays the foundation for a stronger future.
                        </p>
                    </div>

                    <div className="flex justify-center items-center">
                        <ActionButton to={whatsappContact} className="bg-primary text-neutral">Contact Us</ActionButton>
                    </div>
                </div>

            </section>
        </>
    )
}

export default HeroSection;