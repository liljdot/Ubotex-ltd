"use client"
import galleryImage1 from "@/app/assets/hero-bg.png"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"


const GalleryImage: React.FC<{ image: StaticImport }> = ({ image }) => {

    return (
        <>
            <figure className="size-full">
                <Image src={image} alt="gallery image" />
            </figure>
        </>
    )
}

const GallerySection: React.FC = () => {
    const importAll = (r: any) => { return r.keys().map(r) }
    const images = importAll(require.context("/public/gallery", false, /\.(png|jpe?g)$/))

    return (
        <>
            <section className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-15 py-15 md:py-20 lg:py-30 xl:py-40">
                <h1 className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold opacity-80 text-center">OUR GALLERY</h1>

                <div className="grid grid-flow-col grid-rows-1 lg:grid-rows-2 auto-cols-[264px] lg:auto-cols-[360px] auto-rows-[264px] lg:auto-rows-[360px] gap-0 overflow-scroll">
                    {images.map((image: any, index: number) => <GalleryImage key={`gallery-image-${index}`} image={image} />)}
                </div>
            </section>
        </>
    )
}

export default GallerySection;