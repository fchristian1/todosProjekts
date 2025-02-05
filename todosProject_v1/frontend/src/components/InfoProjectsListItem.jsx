import React from "react";
import ProgressCircle from "./PercentageCircle";
import Clock from "./symbols/Clock";

function InfoProjectsListItem({ id, mainText, firstText, secondText, percent, color }) {
    return (
        <button className="flex flex-row justify-between w-full">
            <div className="text-left">
                <div className="font-bold text-xl">{mainText}</div>
                <div className="text-xs">{firstText}</div>
                <div className="flex flex-row gap-2 text-sm">
                    <div className="flex justify-center items-center p-[1px] w-4">
                        <div className="text-gray-500">
                            <Clock></Clock>
                        </div>
                    </div>
                    {secondText}
                </div>
            </div>

            <div className="w-18 h-18">
                <ProgressCircle percentage={percent} color={color}></ProgressCircle>
            </div>
        </button>
    );
}

export default InfoProjectsListItem;
