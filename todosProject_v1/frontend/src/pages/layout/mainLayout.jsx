import React, { useEffect } from "react";
import MobileDeviceMockup from "./MobileDeviceMockup";

function MainLayout({ children, maxHeightPosBottom, setMaxHeightPosBottom }) {
    const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return (
        <MobileDeviceMockup>
            <div id="mainParent" className={"flex justify-center items-center w-full h-full" + (!mobileCheck ? " min-w-[480px] " : "")}>
                <div id="main" className={" bg-gray-200 " + (!mobileCheck ? " rounded-2xl border-4 border-gray-400 " : " ") + " w-full h-full"}>
                    {children}
                </div>
            </div>
        </MobileDeviceMockup>
    );
}

export default MainLayout;
