import React from "react";

function InfoTextAmber({ children }) {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex items-center bg-amber-300 px-4 py-2 rounded-lg font-bold text-xs">{children}</div>
        </div>
    );
}

export default InfoTextAmber;
