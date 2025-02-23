import React from "react";

function ButtonSquareColor({ children, onClick, p, color = "gray", normal = "400", hover = "500" }) {
    return (
        <button
            className={`p-${p} bg-${color}-${normal} hover:bg-${color}-${hover} rounded-lg w-10 aspect-square flex justify-center items-center`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default ButtonSquareColor;
