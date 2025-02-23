import React, { useState } from "react";
import ThreeDotsIcon from "./symbols/ThreeDotsIcon";
import AlarmIcon from "./symbols/AlarmIcon";
import StopWatchIcon from "./symbols/StopWatchIcon";
import { getTaskLastStatusStartStopWatch } from "../services/data/tasks/tasksQuerys";
import { setStartStopWatchTask } from "../services/data/tasks/tasksCommands";

function InfoTasksListItem({ id, children, text, color, onClick, onClickCheckbox, statusChanged, setStatusChanged }) {
    const onClickStopWatch = (e) => {
        e.stopPropagation();
        setStartStopWatchTask(id);
        setStatusChanged(!statusChanged);
    };
    return (
        <button className="flex flex-row justify-between px-1 w-full">
            <div className="flex flex-row items-center gap-2 w-full text-left">
                <div className={`bg-${color}-400 rounded w-8 h-8 p-1 flex justify-center items-center`}>
                    <input
                        className="w-6 h-6"
                        type="checkbox"
                        checked={color == "green" ? true : false}
                        disabled={color == "blue" || color == "green" ? false : true}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        onChange={(e) => {
                            onClickCheckbox(e, id);
                        }}
                    ></input>
                </div>
                <div onClick={onClick} className="w-full font-bold text-xl">
                    {children}
                </div>
            </div>
            <div onClick={onClickStopWatch} className={`w-8` + (getTaskLastStatusStartStopWatch(id) == "stop" ? " text-black " : " text-amber-600 ")}>
                <StopWatchIcon></StopWatchIcon>
            </div>
        </button>
    );
}

export default InfoTasksListItem;
