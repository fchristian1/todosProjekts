import React from "react";

function Button({ children, active, onClick, disabled }) {
    return (
        <>
            {active == "true" && (
                <button
                    onClick={onClick}
                    role="button"
                    disabled={disabled}
                    className="flex flex-row justify-center items-center gap-1 bg-gray-400 hover:bg-gray-500 disabled:hover:bg-gray-400 shadow-rbc px-2 py-2 border-2 border-amber-700/50 hover:border-amber-500/50 disabled:border-gray-400 rounded-xl disabled:text-gray-600 text-left"
                >
                    {children}
                </button>
            )}
            {active != "true" && (
                <button
                    onClick={onClick}
                    role="button"
                    disabled={disabled}
                    className="flex flex-row justify-center items-center gap-1 bg-gray-400 hover:bg-gray-500 disabled:hover:bg-gray-400 shadow-rbc px-2 py-2 border-2 border-gray-500 hover:border-gray-400 disabled:border-gray-400 rounded-xl disabled:text-gray-500 text-left"
                >
                    {children}
                </button>
            )}
        </>
    );
}

export default Button;
