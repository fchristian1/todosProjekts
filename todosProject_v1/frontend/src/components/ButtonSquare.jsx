import React from "react";

function ButtonSquare({ children, onClick, p }) {
    return (
        <button className={`p-${p} bg-gray-300 hover:bg-gray-400 rounded-lg w-10 aspect-square`} onClick={onClick}>
            {children}
        </button>
    );
}

export default ButtonSquare;
