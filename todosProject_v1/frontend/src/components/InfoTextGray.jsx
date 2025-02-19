import React from "react";

function InfoTextGray({ children, p = 2 }) {
    return (
        <div className="flex justify-center items-center h-full">
            <div className={`flex items-center bg-gray-300 px-${p * 2} py-${p} rounded-lg font-bold text-xs`}>{children}</div>
        </div>
    );
}

export default InfoTextGray;
