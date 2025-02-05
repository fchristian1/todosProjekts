import React from "react";

function MenuButton({ children, onClick, inverted = true }) {
    return (
        <>
            {!inverted && (
                <button className="w-12 h-12 rounded-full text-white bg-amber-500 border-3 border-transparent hover:bg-amber-700 hover:border-amber-500">
                    {children}
                </button>
            )}
            {inverted && (
                <button className="w-12 h-12 rounded-full text-amber-800 border-3 border-transparent hover:border-gray-300 hover:bg-gray-100">
                    {children}
                </button>
            )}
        </>
    );
}

export default MenuButton;
