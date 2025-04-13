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
            <section className="flex flex-col gap-4 py-15">
                <h1 className="text-primary text-xl font-semibold opacity-80 text-center">OUR GALLERY</h1>

                <div className="grid grid-flow-col grid-rows-2 auto-cols-[136px] auto-rows-[136px] gap-0 overflow-scroll">
                    {images.map((image: any, index: number) => <GalleryImage key={`gallery-image-${index}`} image={image} />)}
                </div>
            </section>
        </>
    )
}

export default GallerySection;