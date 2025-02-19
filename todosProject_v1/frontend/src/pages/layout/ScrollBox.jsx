import React from "react";

function ScrollBox({ children, p }) {
    return (
        <div
            className={`p-${p} w-full h-full flex flex-col overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100`}
        >
            <div className="">{children}</div>
        </div>
    );
}

export default ScrollBox;
