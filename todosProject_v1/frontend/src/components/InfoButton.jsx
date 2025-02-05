import React from "react";

function InfoButton({ onClick, icon = "X", mainText = "exampleMain", subText = "exampleSub", color = "blue" }) {
    return (
        <button
            onClick={onClick}
            className={
                " text-left flex flex-row shadow-rbc items-center justify-start gap-1 p-2 bg-" +
                color +
                "-400 border-2 border-" +
                color +
                "-500 hover:bg-" +
                color +
                "-500 hover:border-" +
                color +
                "-400 rounded-xl shadow-md"
            }
        >
            <div className={"h-10 w-10 p-1 aspect-square flex justify-center items-center text-white bg-" + color + "-600 rounded-full"}>{icon}</div>
            <div>
                <div className="font-semibold text-left text-lg text-nowrap">{mainText}</div>
                <div className="text-gray-500 text-left text-sm">{subText}</div>
            </div>
        </button>
    );
}

export default InfoButton;
