import React from "react";
import ProgressCircle from "./PercentageCircle";
import Clock from "./symbols/Clock";

function InfoProjectsListItem({ id, mainText, firstText, secondText, segments, color }) {
    return (
        <button className="flex flex-row justify-between w-full">
            <div className="flex flex-col text-left">
                <div className="font-bold text-xl">{mainText}</div>
                <div className="text-xs">{firstText}</div>
                <div className="flex flex-row items-center gap-2 h-full text-sm">
                    <div className="flex justify-center items-center p-[1px] min-w-4">
                        <div className="w-4 h-4 text-gray-500">
                            <Clock></Clock>
                        </div>
                    </div>
                    <div className="pt-[2px]">{secondText}</div>
                </div>
            </div>

            <div className="min-w-18 min-h-18">
                <ProgressCircle segments={segments} color={color}></ProgressCircle>
            </div>
        </button>
    );
}

export default InfoProjectsListItem;
