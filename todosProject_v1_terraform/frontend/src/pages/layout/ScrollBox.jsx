import React from "react";

function ScrollBox({ children }) {
    return (
        <div
            className={
                "w-full h-full flex flex-col mb-1 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100"
            }
        >
            {children}
        </div>
    );
}

export default ScrollBox;
