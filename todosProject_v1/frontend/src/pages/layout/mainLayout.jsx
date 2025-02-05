import React, { useEffect } from "react";

function MainLayout({ children, maxHeightPosBottom, setMaxHeightPosBottom }) {
    window.onresize = () => {
        resize();
    };
    // ratio of main div is 9:16 in relation to the parent div parentMain the maximum height is befor site is scrollable
    function resize() {
        const parentMain = document.getElementById("mainParent");
        const main = document.getElementById("main");
        const width = parentMain.offsetWidth;
        const height = parentMain.offsetHeight;
        let maxHeight;
        let maxHeightPosBottom = 0;
        if (width / height > 9 / 16) {
            main.style.width = height * (9 / 16) + "px";
            maxHeight = height;
            main.style.height = maxHeight + "px";
            maxHeightPosBottom = main.offsetTop + main.offsetHeight;
        } else {
            main.style.width = width + "px";
            maxHeight = width * (16 / 9);
            main.style.height = maxHeight + "px";
            maxHeightPosBottom = main.offsetTop + main.offsetHeight;
        }
        setMaxHeightPosBottom(maxHeight);
    }
    useEffect(() => {
        resize();
    }, []);
    return (
        <div id="mainParent" className="h-full w-full flex justify-center items-center min-w-[400px]">
            <div id="main" className="shadow-rbc h-full sm:border-4 border-gray-100 sm:rounded-2xl bg-gray-200">
                {children}
            </div>
        </div>
    );
}

export default MainLayout;
