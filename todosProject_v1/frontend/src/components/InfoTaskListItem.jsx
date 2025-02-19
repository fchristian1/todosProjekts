import React from "react";
import ThreeDotsIcon from "./symbols/ThreeDotsIcon";

function InfoTasksListItem({ id, children, text, color }) {
    return (
        <button className="flex flex-row justify-between px-1 w-full">
            <div className="flex flex-row items-center gap-2 w-full text-left">
                <div className={`bg-${color}-400 rounded w-8 h-8 flex justify-center items-center`}>
                    <input
                        className="w-6 h-6"
                        type="checkbox"
                        disabled={color == "blue" || color == "green" ? false : true}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    ></input>
                </div>
                <div className="font-bold text-xl">{children}</div>
            </div>
            <div className="w-8">
                <ThreeDotsIcon></ThreeDotsIcon>
            </div>
        </button>
    );
}

export default InfoTasksListItem;
