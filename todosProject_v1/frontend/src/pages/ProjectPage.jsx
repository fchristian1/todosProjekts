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

function ProjectPage({ setPageMain, selectedProject, setSelectedProject }) {
    const [selectedTask, setSelectedTask] = useState(null);
    const onClickButtonBack = () => {
        setSelectedProject(null);
        setPageMain("start");
    };
    const onClickButtonTask = (id) => {
        setSelectedTask(getTaskById(id));
    };
    return (
        (selectedTask && <TaskFromProjectPage selectedTask={selectedTask} setSelectedTask={setSelectedTask}></TaskFromProjectPage>) ||
        (!selectedTask && (
            <div className="flex flex-col gap-1 item-center">
                <MenuPageTop>
                    <ButtonSquare p={1} onClick={onClickButtonBack}>
                        <XIcon></XIcon>
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
                    <div className="font-bold text-2xl">{selectedProject.title}</div>
                    <div>{selectedProject.description}</div>
                    <div className="mt-2">
                        <div>
                            <div className="font-bold text-1xl">Tasklist</div>
                            {selectedProject.tasksIDs.map((id) => {
                                return (
                                    <Container onClick={() => onClickButtonTask(id)} key={id}>
                                        <InfoTasksListItem color={getTaskById(id).color}>{getTaskById(id).title}</InfoTasksListItem>
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
