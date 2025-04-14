"use client"

import { AdvancedMarker, APIProvider, InfoWindow, Map, Pin } from "@vis.gl/react-google-maps";

const ContactSection: React.FC = () => {
    const position = { lat: 5.005508505707144, lng: 7.9667609365457785 }

    return (
        <>
            <section className="flex flex-col gap-16 xl:gap-50">
            <h1 className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold opacity-80 text-center">CONTACT US</h1>

                <div className="h-50 xl:h-175">
                    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
                        <Map
                            style={{ width: '100%', height: '100%' }}
                            defaultCenter={position}
                            center={position}
                            defaultZoom={18}
                            disableDefaultUI={true}
                            mapId={"781efce71051fc32"}
                        />
                        <AdvancedMarker position={position}>
                            <Pin/>
                        </AdvancedMarker>
                    </APIProvider>
                </div>
            </section>
        </>
    )
}

export default ContactSection;