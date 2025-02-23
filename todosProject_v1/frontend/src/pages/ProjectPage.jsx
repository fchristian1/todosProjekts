import React, { useState } from "react";
import MenuPageTop from "../components/MenuPageTop";
import ButtonSquare from "../components/ButtonSquare";
import XIcon from "../components/symbols/XIcon";
import InfoTextAmber from "../components/InfoTextAmber";
import { getStatusFromProjectTasks } from "../services/data/projects/projectsQuerys";
import InfoTextGray from "../components/InfoTextGray";
import InfoTextColor from "../components/InfoTextColor";
import ScrollBox from "./layout/ScrollBox";
import Container from "../components/container";
import InfoTasksListItem from "../components/InfoTaskListItem";
import { getTaskById } from "../services/data/tasks/tasksQuerys";
import TaskFromProjectPage from "./TaskFromProjectPage";
import { setStatusCompletedTask, setStatusOnGoingTask } from "../services/data/tasks/tasksCommands";
import CalenderIcon from "../components/symbols/CalenderIcon";
import AlarmIcon from "../components/symbols/AlarmIcon";
import Button from "../components/Button";
import { titleProject, descriptionProject } from "../services/data/projects/projectsCommands";
import { commandsProjects } from "../services/data/commands";
import ChevronLeft from "../components/symbols/ChevronLeft";

function ProjectPage({ setPageMain, selectedProject, setSelectedProject }) {
    const [selectedTask, setSelectedTask] = useState(null);
    const [statusChanged, setStatusChanged] = useState(false);
    const [editText, setEditText] = useState(false);
    const [titleText, setTitleText] = useState(selectedProject.title);
    const [descriptionText, setDescriptionText] = useState(selectedProject.description);
    const onClickButtonBack = () => {
        setSelectedProject(null);
        setPageMain("start");
    };
    const onClickButtonTask = (id) => {
        setSelectedTask(getTaskById(id));
    };
    const onClickInputCheckbox = (e, id) => {
        let task = getTaskById(id);
        e.target.checked == true ? setStatusCompletedTask(task.id) : setStatusOnGoingTask(task.id);
        setStatusChanged(!statusChanged);
    };
    const onClickButtonEditSaveText = () => {
        setEditText(!editText);
        if (editText) {
            selectedProject.title = titleText;
            selectedProject.description = descriptionText;
            setSelectedProject(selectedProject);
            commandsProjects.titleProject(selectedProject.id, titleText);
            commandsProjects.descriptionProject(selectedProject.id, descriptionText);
        }
    };
    return (
        (selectedTask && (
            <TaskFromProjectPage selectedTask={selectedTask} setSelectedTask={setSelectedTask} selectedProject={selectedProject}></TaskFromProjectPage>
        )) ||
        (!selectedTask && (
            <div className="flex flex-col gap-1 item-center">
                <MenuPageTop>
                    <ButtonSquare p={2} onClick={onClickButtonBack}>
                        <ChevronLeft></ChevronLeft>
                    </ButtonSquare>
                    {getStatusFromProjectTasks(selectedProject.id).totalTasks > 0 && (
                        <InfoTextGray p={1}>
                            <div className="flex flex-row justify-center items-center gap-1">
                                {<InfoTextColor>{getStatusFromProjectTasks(selectedProject.id).totalTasks}</InfoTextColor>}/
                                {getStatusFromProjectTasks(selectedProject.id).completedTasks > 0 && (
                                    <InfoTextColor color={"green"}>{getStatusFromProjectTasks(selectedProject.id).completedTasks}</InfoTextColor>
                                )}
                                {getStatusFromProjectTasks(selectedProject.id).onGoingTasks > 0 && (
                                    <InfoTextColor color={"blue"}>{getStatusFromProjectTasks(selectedProject.id).onGoingTasks}</InfoTextColor>
                                )}
                                {getStatusFromProjectTasks(selectedProject.id).inProcessTasks > 0 && (
                                    <InfoTextColor color={"amber"}>{getStatusFromProjectTasks(selectedProject.id).inProcessTasks}</InfoTextColor>
                                )}
                                {getStatusFromProjectTasks(selectedProject.id).canceledTasks > 0 && (
                                    <InfoTextColor color={"red"}>{getStatusFromProjectTasks(selectedProject.id).canceledTasks}</InfoTextColor>
                                )}
                                {getStatusFromProjectTasks(selectedProject.id).openTasks > 0 && (
                                    <InfoTextColor color={"gray"}>{getStatusFromProjectTasks(selectedProject.id).openTasks}</InfoTextColor>
                                )}
                            </div>
                        </InfoTextGray>
                    )}
                    <InfoTextGray>{selectedProject.title}</InfoTextGray>
                </MenuPageTop>
                <ScrollBox p={2}>
                    {!editText && <div className="font-bold text-2xl">{selectedProject.title}</div>}
                    {!editText && <div>{selectedProject.description}</div>}
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
                                className="bg-white border-2 border-black rounded w-full h-32"
                                value={descriptionText}
                                onChange={(e) => {
                                    setDescriptionText(e.target.value);
                                }}
                            ></textarea>
                        )}
                    </div>
                    <div className="my-2">
                        <Button onClick={onClickButtonEditSaveText} active={editText ? "true" : "false"}>
                            {editText ? "Save Text" : "Edit Text"}
                        </Button>
                    </div>
                    {/* Date for pr
                    <div>
                        {!selectedProject.date && (
                            <Button>
                                <div className="w-6 h-6">
                                    <AlarmIcon></AlarmIcon>
                                    <span>{selectedProject.date}</span>
                                </div>
                            </Button>
                        )}
                        {selectedProject.date && (
                            <Button>
                                <input className="text-lg" type="date" defaultValue={selectedProject.date ?? new Date().toISOString().split("T")[0]}></input>
                            </Button>
                        )}
                    </div> */}
                    <div className="mt-2">
                        <div>
                            <div className="font-bold text-1xl">Tasklist</div>
                            {selectedProject.tasksIDs.map((id) => {
                                return (
                                    <Container key={id}>
                                        <InfoTasksListItem
                                            id={id}
                                            statusChanged={statusChanged}
                                            setStatusChanged={setStatusChanged}
                                            onClick={() => onClickButtonTask(id)}
                                            onClickCheckbox={onClickInputCheckbox}
                                            color={getTaskById(id).color}
                                        >
                                            {getTaskById(id).title}
                                        </InfoTasksListItem>
                                    </Container>
                                );
                            })}
                        </div>
                    </div>
                </ScrollBox>
            </div>
        ))
    );
}

export default ProjectPage;
