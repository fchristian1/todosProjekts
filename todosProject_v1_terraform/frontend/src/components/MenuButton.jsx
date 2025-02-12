import React from "react";

function MenuButton({ children, onClick, inverted = true }) {
    return (
        <>
            {!inverted && (
                <button
                    role="button"
                    onClick={onClick}
                    className="flex justify-center items-center bg-amber-500 hover:bg-amber-700 border-3 border-transparent rounded-full w-12 h-12 text-white"
                >
                    {children}
                </button>
            )}
            {inverted && (
                <button
                    role="button"
                    onClick={onClick}
                    className="flex justify-center items-center hover:bg-amber-100 p-2 border-3 border-transparent rounded-full w-12 h-12 text-amber-800"
                >
                    {children}
                </button>
            )}
        </>
    );
}

export default MenuButton;
