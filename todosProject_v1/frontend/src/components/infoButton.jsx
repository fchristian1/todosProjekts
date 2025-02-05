import React from "react";

function InfoButton({ onClick, icon = "X", mainText = "exampleMain", subText = "exampleSub", color = "blue" }) {
    return (
        <button
            onClick={onClick}
            className={
                "flex flex-row shadow-rbc items-center justify-start gap-5 p-2 bg-" + color + "-500 border-2 border-" + color + "-600 rounded-xl shadow-md"
            }
        >
            <div className={"h-10 w-10 p-1 flex justify-center items-center text-white bg-" + color + "-600 bg-" + color + "-600 rounded-full"}>{icon}</div>
            <div>
                <div className="text-lg font-semibold text-left">{mainText}</div>
                <div className="text-sm text-gray-500 text-left">{subText}</div>
            </div>
        </button>
    );
}

export default InfoButton;
