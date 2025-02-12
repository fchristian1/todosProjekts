import React from "react";

function InfoButton({ onClick, icon, mainText = "exampleMain", subText = "exampleSub", color = "blue" }) {
    return (
        <button
            onClick={onClick}
            className={
                " text-left flex flex-row shadow-rbc items-center justify-start gap-1 px-2 py-1 bg-" +
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
            {icon && <div className={"h-10 w-10 p-1 aspect-square flex justify-center items-center text-white bg-" + color + "-600 rounded-full"}>{icon}</div>}
            <div className="flex flex-row justify-between items-center gap-1 w-full">
                <div className="font-semibold text-lg text-left text-nowrap">{mainText}</div>
                <div className="m-2 font-bold text-black-500">{subText}</div>
            </div>
        </button>
    );
}

export default InfoButton;
