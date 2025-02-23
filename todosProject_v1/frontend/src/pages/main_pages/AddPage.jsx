import React, { useState } from "react";
import List from "../../components/list";
import Button from "../../components/Button";
import CardList from "../../components/symbols/CardList";
import FileNew from "../../components/symbols/FileNew";
import ScrollBox from "../layout/ScrollBox";
import AddProject from "./AddPage/AddProject";
import AddTask from "./AddPage/AddTask";
import MenuPageTop from "../../components/MenuPageTop";
import ButtonSquare from "../../components/ButtonSquare";
import XIcon from "../../components/symbols/XIcon";
import InfoText from "../../components/InfoTextAmber";
import ChevronLeft from "../../components/symbols/ChevronLeft";
import { tasksData } from "../../services/data/tasks/tasksData";
import { projectsData } from "../../services/data/projects/projectsData";

function AddPage({ setPageMain, selectedProject, selectedTask, comesFromPage }) {
    const tasksCount = tasksData.getTasks().length;
    const projectCount = projectsData.getProjects().length;
    const [page, setPage] = useState(projectCount === 0 ? "project" : "task");
    const onClickButtonTask = () => {
        setPage("task");
    };
    const onClickButtonProject = () => {
        setPage("project");
    };
    const onClickButtonBack = () => {
        !selectedProject && !selectedTask && setPageMain("start");
        selectedProject && setPageMain("project");
        selectedTask && setPageMain("task");
    };
    return (
        <div className="flex flex-col gap-1 h-full">
            <MenuPageTop>
                <ButtonSquare p={1} onClick={onClickButtonBack}>
                    {!selectedProject && !selectedTask && <XIcon></XIcon>}
                    {(selectedProject || selectedTask) && <ChevronLeft></ChevronLeft>}
                </ButtonSquare>
                <InfoText>
                    {page == "task" && <>Add a new Task</>}
                    {page == "project" && <>Add a new Project</>}
                </InfoText>
            </MenuPageTop>
            <List p={2} cols={2} gap={2}>
                <Button disabled={projectCount == 0} active={page == "task" ? "true" : "false"} onClick={onClickButtonTask}>
                    <div className="flex justify-between items-center w-full h-7">
                        <div className="flex justify-center items-center h-full">
                            <FileNew></FileNew>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <span className="font-bold text-lg">Task</span>
                        </div>
                    </div>
                </Button>
                <Button active={page == "project" ? "true" : "false"} onClick={onClickButtonProject}>
                    <div className="flex justify-between items-center w-full h-9">
                        <div className="flex justify-center items-center h-full">
                            <CardList></CardList>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <span className="font-bold text-lg">Project</span>
                        </div>
                    </div>
                </Button>
            </List>
            <ScrollBox p={2}>
                {page == "task" && (
                    <AddTask selectedProject={selectedProject} selectedTask={selectedTask} setPageMain={setPageMain} comesFromPage={comesFromPage}></AddTask>
                )}
                {page == "project" && <AddProject setPageMain={setPageMain} comesFromPage={comesFromPage}></AddProject>}
            </ScrollBox>
        </div>
    );
}

export default AddPage;
