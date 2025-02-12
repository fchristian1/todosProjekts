import React, { useEffect } from "react";
import MobileDeviceMockup from "./MobileDeviceMockup";
import MenuButton from "../../components/MenuButton";
import HomeIcon from "../../components/symbols/HomeIcon";
import CalenderIcon from "../../components/symbols/CalenderIcon";
import PlusIcon from "../../components/symbols/PlusIcon";
import FileEarmarkCheck from "../../components/symbols/FileEarmarkCheck";
import PersonIcon from "../../components/symbols/PersonIcon";

function MainLayout({ children, maxHeightPosBottom, setMaxHeightPosBottom, page, setPage }) {
    const setPageHandler = (page) => {
        console.log(page);
        setPage(page);
    };

    const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return (
        <MobileDeviceMockup>
            <div id="mainParent" className={"flex justify-center items-center h-full w-[480px]" + (!mobileCheck ? " min-w-[480px] " : "")}>
                <div id="main" className={" bg-gray-200 " + (!mobileCheck ? " rounded-2xl border-4 border-gray-400 " : " ") + " w-full h-full"}>
                    <div className="flex flex-col p-1 h-full max-h-full">
                        {children}
                        <div className="w-full">
                            <div className="bg-black mb-2 h-[2px]"></div>
                            <div className="flex flex-row flex-wrap justify-evenly w-full">
                                <MenuButton onClick={() => setPageHandler("start")}>
                                    <HomeIcon></HomeIcon>
                                </MenuButton>
                                <MenuButton onClick={() => setPageHandler("calendar")}>
                                    <CalenderIcon number={new Date(Date.now()).getDate()}></CalenderIcon>
                                </MenuButton>
                                <MenuButton inverted={false} onClick={() => setPageHandler("add")}>
                                    <PlusIcon></PlusIcon>
                                </MenuButton>
                                <MenuButton onClick={() => setPageHandler("tasklist")}>
                                    <FileEarmarkCheck></FileEarmarkCheck>
                                </MenuButton>
                                <MenuButton onClick={() => setPageHandler("profile")}>
                                    <PersonIcon></PersonIcon>
                                </MenuButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MobileDeviceMockup>
    );
}

export default MainLayout;
