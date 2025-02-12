import React, { useEffect, useState, useRef } from "react";

/**
 * MobileDeviceMockup:
 *  - Zeigt Kinder (children) in einem "simulierten" Handy-Viewport an, falls man auf einem Desktop ist.
 *  - Zeigt Inhalte normal an, falls tatsächlich ein Mobilgerät verwendet wird.
 *  - Passt sich beim Browser-Resize und Zoom an, um das Format so gut wie möglich beizubehalten.
 */

export default function MobileDeviceMockup({ children }) {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        // Einfache Erkennung (detection) basierend auf dem User-Agent
        const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        setIsMobile(mobileCheck);
    }, []);

    useEffect(() => {
        // Funktion zum Anpassen des "scale" (Skalierung)
        const handleResize = () => {
            if (containerRef.current) {
                const desiredWidth = 500; // Breite in Pixeln z.B. iPhone-Größe
                const screenWidth = window.innerWidth;

                // Wir lassen das Element maximal so groß wie desiredWidth
                // und skalieren herunter, wenn das Fenster schmaler wird.
                const scale = 1; // screenWidth < desiredWidth ? screenWidth / desiredWidth : 1;

                // Invertierte Skalierung, damit wir immer bei "375px Breite" bleiben
                containerRef.current.style.transform = `scale(${scale})`;
                containerRef.current.style.transformOrigin = "top center";
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // einmal direkt beim Mount (Montieren) aufrufen

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Auf tatsächlichen Mobilgeräten keine Simulation:
    if (isMobile) {
        return (
            <>
                <div id="mobile" className="flex w-full h-full overflow-hidden">
                    {children}
                </div>
            </>
        );
    }

    // Auf Desktop simulieren wir ein "Phone"-Viewport
    return (
        <>
            <div id="desktop" className="flex my-3 h-full overflow-hidden" ref={containerRef}>
                {children}
            </div>
        </>
    );
}
