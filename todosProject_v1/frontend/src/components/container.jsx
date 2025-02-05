import React from "react";

function Container({ children }) {
    return (
        <div className="flex flex-col justify-center w-full itmes-center">
            <div className="z-10 border-2 bg-gray-50 p-2 border-black rounded-xl w-full">{children}</div>
            <div className="relative -top-[5px] z-0 bg-black rounded-b-2xl w-11/12 h-2 self-center"></div>
        </div>
    );
}

export default Container;
