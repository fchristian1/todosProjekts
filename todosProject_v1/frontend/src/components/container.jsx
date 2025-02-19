import React from "react";

function Container({ children, onClick }) {
    return (
        <div className="flex flex-col justify-center w-full itmes-center">
            <div className="z-10 bg-gray-50 hover:bg-amber-100 p-2 border-2 border-black rounded-xl w-full" onClick={onClick}>
                {children}
            </div>
            <div className="-top-[5px] z-0 relative self-center bg-black rounded-b-2xl w-11/12 h-2"></div>
        </div>
    );
}

export default Container;
