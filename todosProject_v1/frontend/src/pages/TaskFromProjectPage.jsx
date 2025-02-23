import React, { useState } from "react";
import ChevronLeft from "../components/symbols/ChevronLeft";
import MenuPageTop from "../components/MenuPageTop";
import ButtonSquare from "../components/ButtonSquare";
import InfoTextGray from "../components/InfoTextGray";
import ScrollBox from "./layout/ScrollBox";
import ButtonSquareColor from "../components/ButtonSquareColor";
import {
    setStatusCanceledTask,
    setStatusCompletedTask,
    setStatusInProcessTask,
    setStatusOnGoingTask,
    setStatusOpenTask,
} from "../services/data/tasks/tasksCommands";
import InfoButton from "../components/InfoButton";
import MenuButton from "../components/MenuButton";
import Button from "../components/Button";
import { commandsTasks } from "../services/data/commands";

function TaskFromProjectPage({ selectedTask, setSelectedTask, selectedProject }) {
    const [status, setStatus] = useState(selectedTask.status);
    const [titleText, setTitleText] = useState(selectedTask.title);
    const [descriptionText, setDescriptionText] = useState(selectedTask.description);
    const [editText, setEditText] = useState(false);
    const onClickButtonBack = () => {
        setSelectedTask(null);
    };
    const onClickButtonTaskStatus = (status) => {
        setStatus(status);
        if (status == "completed") {
            setStatusCompletedTask(selectedTask.id);
        }
        if (status == "ongoing") {
            setStatusOnGoingTask(selectedTask.id);
        }
        if (status == "inprocess") {
            setStatusInProcessTask(selectedTask.id);
        }
        if (status == "canceled") {
            setStatusCanceledTask(selectedTask.id);
        }
        if (status == "open") {
            setStatusOpenTask(selectedTask.id);
        }
    };
    const onClickButtonEditSaveText = () => {
        setEditText(!editText);
        if (editText) {
            selectedTask.title = titleText;
            selectedTask.description = descriptionText;
            setSelectedTask(selectedTask);
            commandsTasks.titleTask(selectedTask.id, titleText);
            commandsTasks.descriptionTask(selectedTask.id, descriptionText);
        }
    };
    return (
        <div className="flex flex-col gap-1 item-center">
            <MenuPageTop>
                <ButtonSquare p={2} onClick={onClickButtonBack}>
                    <ChevronLeft></ChevronLeft>
                </ButtonSquare>
                <InfoTextGray>{selectedTask.title}</InfoTextGray>
            </MenuPageTop>
            <ScrollBox p={2}>
                {!editText && <div className="font-bold text-2xl">{selectedTask.title}</div>}
                {!editText && <div>{selectedTask.description}</div>}
                <div className="flex flex-col gap-1 pb-2">
                    {editText && (
                        <input
                            className="bg-white border-2 border-black rounded w-full font-bold text-2xl"
                            type="text"
                            value={titleText}
                            onChange={(e) => {
                                setTitleText(e.target.value);
                            }}
                        ></input>
                    )}
                    {editText && (
                        <textarea
                            className="bg-white border-2 border-black rounded w-full"
                            value={descriptionText}
                            onChange={(e) => {
                                setDescriptionText(e.target.value);
                            }}
                        ></textarea>
                    )}
                </div>

                <Button onClick={onClickButtonEditSaveText} active={editText ? "true" : "false"}>
                    {editText ? "Save Text" : "Edit Text"}
                </Button>
                <div className="mt-2">
                    <div>
                        <div className="font-bold">Status:</div>
                        <div className="flex flex-col gap-1 text-lg">
                            <div className="flex items-center gap-2">
                                <ButtonSquareColor color={"green"}>
                                    <input
                                        onChange={() => onClickButtonTaskStatus("completed")}
                                        checked={status == "completed" ? true : false}
                                        className="w-7 h-7"
                                        type="checkbox"
                                    />
                                </ButtonSquareColor>
                                <span>Completed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ButtonSquareColor color={"blue"}>
                                    <input
                                        onChange={() => onClickButtonTaskStatus("ongoing")}
                                        checked={status == "ongoing" ? true : false}
                                        className="w-7 h-7"
                                        type="checkbox"
                                    />
                                </ButtonSquareColor>
                                <span>On Going</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ButtonSquareColor color={"amber"}>
                                    <input
                                        onChange={() => onClickButtonTaskStatus("inprocess")}
                                        checked={status == "inprocess" ? true : false}
                                        className="w-7 h-7"
                                        type="checkbox"
                                    />
                                </ButtonSquareColor>
                                <span>Processing</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ButtonSquareColor color={"red"}>
                                    <input
                                        onChange={() => onClickButtonTaskStatus("canceled")}
                                        checked={status == "canceled" ? true : false}
                                        className="w-7 h-7"
                                        type="checkbox"
                                    />
                                </ButtonSquareColor>
                                <span>Canceled</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ButtonSquareColor color={"gray"}>
                                    <input
                                        onChange={() => onClickButtonTaskStatus("open")}
                                        checked={status == "open" ? true : false}
                                        className="w-7 h-7"
                                        type="checkbox"
                                    />
                                </ButtonSquareColor>
                                <span>Open</span>
                            </div>
                        </div>
                    </div>

                    {/* Date for Task <div className="pb-3">
                        <Button>
                            <input className="text-lg" type="date" defaultValue={selectedProject.date ?? new Date().toISOString().split("T")[0]}></input>
                        </Button>
                    </div> */}
                </div>
            </ScrollBox>
        </div>
    );
}

export default TaskFromProjectPage;
