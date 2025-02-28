import React, { useEffect } from "react";
import MobileDeviceMockup from "./MobileDeviceMockup";
import MenuButton from "../../components/MenuButton";
import HomeIcon from "../../components/symbols/HomeIcon";
import CalenderIcon from "../../components/symbols/CalenderIcon";
import PlusIcon from "../../components/symbols/PlusIcon";
import FileEarmarkCheck from "../../components/symbols/FileEarmarkCheck";
import PersonIcon from "../../components/symbols/PersonIcon";
import { isUserLogin } from "../../context/authentication";
import DoorOpen from "../../components/symbols/DoorOpen";

function MainLayout({ children, maxHeightPosBottom, setMaxHeightPosBottom, pageMain, setPageMain, comesFromPage, setComesFromPage }) {
    const setPageHandler = (page) => {
        console.log(page);
        setComesFromPage(pageMain);
        setPageMain(page);
    };

    const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return (
        <MobileDeviceMockup>
            <div id="mainParent" className={"flex justify-center items-center h-full " + (!mobileCheck ? "w-[480px] min-w-[480px] " : "w-full")}>
                <div id="main" className={" bg-gray-200 " + (!mobileCheck ? " rounded-2xl border-4 border-gray-400 " : " ") + " w-full h-full"}>
                    <div className="flex flex-col pb-15 h-full max-h-full">
                        {children}
                        <div className="right-1 bottom-1 left-1 z-50 absolute bg-gray-200 rounded-b-xl">
                            <div className="bg-black mb-2 h-[2px]"></div>
                            <div className="flex flex-row flex-wrap justify-evenly w-full">
                                <MenuButton onClick={() => setPageHandler("start")}>
                                    <HomeIcon></HomeIcon>
                                </MenuButton>
                                {/* <MenuButton onClick={() => setPageHandler("calendar")}>
                                    <CalenderIcon number={new Date(Date.now()).getDate()}></CalenderIcon>
                                </MenuButton> */}
                                <MenuButton inverted={false} onClick={() => setPageHandler("add")}>
                                    <PlusIcon></PlusIcon>
                                </MenuButton>
                                {/* <MenuButton onClick={() => setPageHandler("tasklist")}>
                                    <FileEarmarkCheck></FileEarmarkCheck>
                                </MenuButton> */}
                                {isUserLogin() && (
                                    <MenuButton onClick={() => setPageHandler("profile")}>
                                        <PersonIcon></PersonIcon>
                                    </MenuButton>
                                )}
                                {!isUserLogin() && (
                                    <MenuButton onClick={() => setPageHandler("login")}>
                                        <DoorOpen></DoorOpen>
                                    </MenuButton>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MobileDeviceMockup>
    );
}

export default MainLayout;
