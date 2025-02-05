import React from "react";

function Container({ children }) {
    return (
        <div className="w-full flex flex-col itmes-center justify-center">
            <div className="z-10 w-full p-2 bg-gray-50  border-2 border-black rounded-xl">{children}</div>
            <div className="w-11/12 relative self-center h-2 -top-[5px] rounded-b-2xl z-0 bg-black"></div>
        </div>
    );
}

export default Container;
