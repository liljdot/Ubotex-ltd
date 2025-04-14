"use client"

import { AdvancedMarker, APIProvider, InfoWindow, Map, Pin } from "@vis.gl/react-google-maps";

const ContactSection: React.FC = () => {
    const position = { lat: 5.005508505707144, lng: 7.9667609365457785 }

    return (
        <>
            <section>
                <div className="size-full">
                    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
                        <Map
                            style={{ width: '100vw', height: '100vh' }}
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