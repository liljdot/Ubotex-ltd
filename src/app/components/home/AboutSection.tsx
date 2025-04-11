import { openSans } from "@/app/layout";

const AboutSection: React.FC = () => {

    return (
        <>
            <section className="bg-neutral px-17.5 py-15">
                <div className="flex flex-col gap-15">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-primary text-xl font-semibold max-w-53 opacity-80">
                            WHO ARE WE?
                        </h3>

                        <p className={"text-sm/6 " + openSans.className}>
                            Incorporated in 2002, Ubotex Limited is a leading Nigerian firm specializing in cement distribution, building materials, and transport haulage. Committed to excellence, we deliver reliable, efficient, and innovative services across a wide network. Backed by an experienced team, we strive to exceed customer expectations and lead in distribution and transportation across the South-South and beyond.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-primary text-xl font-semibold max-w-53 opacity-80">
                            STRENGTH YOU CAN BUILD ON
                        </h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection;