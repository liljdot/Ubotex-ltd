"use client"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { useState } from "react"
import GalleryModal from "./GalleryModal"
import { useRouter } from "next/navigation"

const GalleryImage: React.FC<{ image: StaticImport, carouselIndex:number, setModalOpen: (val: boolean) => void }> = ({ image, setModalOpen, carouselIndex }) => {
    const router = useRouter()

    return (
        <>
            <figure onClick={() => {
                setModalOpen(true)
                router.push(`#slide${carouselIndex}`)
            }} className="size-full relative shrink-0 overflow-hidden after:absolute after:size-full after:top-0 hover:after:bg-[#00000022] hover:cursor-pointer after:transition-all after:duration-300">
                <Image src={image} alt="gallery image" />
            </figure>
        </>
    )
}

const GallerySection: React.FC = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const importAll = (r: any) => { return r.keys().map(r) }
    const images = importAll(require.context("/public/gallery", false, /\.(png|jpe?g|JPE?G)$/))

    return (
        <>
            <section className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-15 py-15 md:py-20 lg:py-30 xl:py-40">
                {modalIsOpen && <GalleryModal directory="" setModalIsOpen={setModalIsOpen} images={images} />}
                <h1 className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold opacity-80 text-center">OUR GALLERY</h1>

                {/* <div className="grid grid-flow-col grid-rows-1 lg:grid-rows-2 auto-cols-[264px] lg:auto-cols-[360px] auto-rows-[264px] lg:auto-rows-[360px] gap-0 overflow-scroll"> */}
                <div className="flex flex-row md:grid grid-cols-3 xl:grid-cols-[repeat(3,_370px)] md:auto-rows-[200px] lg:auto-rows-[330px] xl:auto-rows-[358px] gap-2.5 md:gap-4 xl:gap-5 overflow-x-scroll md:overflow-visible md:justify-center">
                    {images.map((image: any, index: number) => <GalleryImage carouselIndex={index+1} key={`gallery-image-${index}`} image={image} setModalOpen={setModalIsOpen} />)}
                </div>
            </section>
        </>
    )
}

export default GallerySection;