import React from "react";

function Button({ children, active, onClick }) {
    return (
        <>
            {active == "true" && (
                <button
                    onClick={onClick}
                    role="button"
                    className="flex flex-row justify-start items-center gap-1 bg-gray-400 hover:bg-gray-500 shadow-rbc px-2 py-2 border-2 border-amber-700/50 hover:border-amber-500/50 rounded-xl text-left"
                >
                    {children}
                </button>
            )}
            {active != "true" && (
                <button
                    onClick={onClick}
                    role="button"
                    className="flex flex-row justify-start items-center gap-1 bg-gray-400 hover:bg-gray-500 shadow-rbc px-2 py-2 border-2 border-gray-500 hover:border-gray-400 rounded-xl text-left"
                >
                    {children}
                </button>
            )}
        </>
    );
}

export default Button;
