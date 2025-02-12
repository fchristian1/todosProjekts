import React from "react";
import { isUserLogin } from "../context/authentication";
import { DEBUG } from "../context/config";
import HomeIcon from "./symbols/HomeIcon";
import PersonIcon from "./symbols/PersonIcon";
import DoorOpen from "./symbols/DoorOpen";

const UserLogo = () => {
    return (
        <div className="flex justify-center items-center bg-amber-600 rounded-full w-12 h-12">
            <div className="relative top-[1px] -left-[1px] font-bold text-3xl text-white">C</div>
        </div>
    );
};

function Greetings() {
    setTimeout(() => {
        setShow(false);
        setTimeout(() => {
            setShow2(false);
        }, 500);
    }, 5000);
    const [show, setShow] = React.useState(true);
    const [show2, setShow2] = React.useState(true);
    return (
        show2 && (
            <div className={"w-full transition-all duration-500 ease-in-out " + (show ? " " : "transform w-0 opacity-0")}>
                {isUserLogin() ? (
                    <div className="flex flex-row justify-between items-center">
                        <div className="aspect-square">
                            <UserLogo></UserLogo>
                        </div>
                        <div className="w-full ms-2">
                            <div className="text-md">Hi UserName</div>
                            <div className="text-xs">Lets get startet your tasks today</div>
                        </div>
                        <div className="flex justify-center items-center bg-gray-300 rounded-md w-12 h-12 aspect-square">
                            <div className="w-10 h-10 text-amber-600">
                                <HomeIcon></HomeIcon>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-row justify-between items-center">
                        <div className="w-12 h-12 text-amber-600 aspect-square">
                            <PersonIcon></PersonIcon>
                        </div>
                        <div className="w-full ms-2">
                            <div className="text-md">Hi, Login to save your data online</div>
                            <div className="text-xs">Lets get startet your tasks today</div>
                        </div>
                        <div className="flex justify-center items-center bg-gray-300 rounded-md w-12 h-12 aspect-square">
                            <div className="w-10 h-10 text-amber-600">
                                <DoorOpen></DoorOpen>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    );
}

export default Greetings;
