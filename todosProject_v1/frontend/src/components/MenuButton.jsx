import React from "react";

function MenuButton({ children, onClick, inverted = true }) {
    return (
        <>
            {!inverted && (
                <button className="flex justify-center items-center border-3 hover:border-amber-500 bg-amber-500 hover:bg-amber-700 border-transparent rounded-full w-12 h-12 text-white">
                    {children}
                </button>
            )}
            {inverted && (
                <button className="flex justify-center items-center border-3 hover:border-gray-300 hover:bg-gray-100 p-2 border-transparent rounded-full w-12 h-12 text-amber-800">
                    {children}
                </button>
            )}
        </>
    );
}

export default MenuButton;
