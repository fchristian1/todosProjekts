import React, { useEffect, useState } from "react";
import List from "../../components/list";
import InfoButton from "../../components/InfoButton";
import ArrowRepead from "../../components/symbols/ArrowRepeat";
import Clock from "../../components/symbols/Clock";
import FileEarmarkCheck from "../../components/symbols/FileEarmarkCheck";
import FileEarmarkX from "../../components/symbols/FileEarmarkX";
import Container from "../../components/container";
import InfoProjectsListItem from "../../components/InfoProjectsListItem";
import ScrollBox from "../layout/ScrollBox";
import NormalBox from "../layout/NormalBox";
import { dataQueries } from "../../services/data/querys";
import { commandsProjects, commandsTasks } from "../../services/data/commands";
import FileNew from "../../components/symbols/FileNew";

function StartPage({ maxHeightPosBottom, setMaxHeightPosBottom, selectedProject, setSelectedProject, mainPage, setPageMain }) {
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);

    const [completedTasks, setCompletedTasks] = useState(0);
    const [onGoingTasks, setOnGoingTasks] = useState(0);
    const [inProcessTasks, setInProcessTasks] = useState(0);
    const [openTasks, setOpenTasks] = useState(0);
    const [canceledTasks, setCanceledTasks] = useState(0);

    const [width, setWidth] = useState(window.innerWidth);
    window.onresize = () => {
        resize();
    };
    useEffect(() => {
        resize();
        getData();
    }, []);
    const getData = async () => {
        let data = dataQueries.getProjectsForStartPage();
        if (data.length === 0) {
            let idtask = commandsTasks.createTask();
            commandsTasks.titleTask(idtask, "1 Task");
            commandsTasks.descriptionTask(idtask, "Description 1");
            commandsTasks.setStatusOnGoingTask(idtask);
            let idtask2 = commandsTasks.createTask();
            commandsTasks.titleTask(idtask2, "2 Task");
            commandsTasks.descriptionTask(idtask2, "Description 2");
            commandsTasks.setStatusInProcessTask(idtask2);
            let idtask3 = commandsTasks.createTask();
            commandsTasks.titleTask(idtask3, "3 Task");
            commandsTasks.descriptionTask(idtask3, "Description 3");
            commandsTasks.setStatusCompletedTask(idtask3);
            let idtask4 = commandsTasks.createTask();
            commandsTasks.titleTask(idtask4, "4 Task");
            commandsTasks.descriptionTask(idtask4, "Description 4");
            commandsTasks.setStatusCanceledTask(idtask4);
            let idtask5 = commandsTasks.createTask();
            commandsTasks.titleTask(idtask5, "5 Task");
            commandsTasks.descriptionTask(idtask5, "Description 5");

            let idproject = commandsProjects.createProject();
            commandsProjects.titleProject(idproject, "Project 1");
            commandsProjects.descriptionProject(
                idproject,
                "Description 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nemo incidunt minima adipisci? Minima iusto magni iure nisi perferendis adipisci, beatae saepe tempora dicta est, reiciendis cumque ab, numquam eaque. "
            );

            commandsProjects.colorProject(idproject, "red");
            commandsProjects.addATaskToProject(idproject, idtask);
            commandsProjects.addATaskToProject(idproject, idtask2);
            commandsProjects.addATaskToProject(idproject, idtask3);
            commandsProjects.addATaskToProject(idproject, idtask4);
            commandsProjects.addATaskToProject(idproject, idtask5);
            idproject = commandsProjects.createProject();
            commandsProjects.titleProject(idproject, "Project 2");
            commandsProjects.descriptionProject(idproject, "Description 2");
            commandsProjects.colorProject(idproject, "red");
            idproject = commandsProjects.createProject();
            commandsProjects.titleProject(idproject, "Project 3");
            commandsProjects.descriptionProject(idproject, "Description 2");
            commandsProjects.colorProject(idproject, "red");
            idproject = commandsProjects.createProject();
            commandsProjects.titleProject(idproject, "Project 4");
            commandsProjects.descriptionProject(idproject, "Description 2");
            commandsProjects.colorProject(idproject, "red");
            idproject = commandsProjects.createProject();
            commandsProjects.titleProject(idproject, "Project 5");
            commandsProjects.descriptionProject(idproject, "Description 2");
            commandsProjects.colorProject(idproject, "red");
            idproject = commandsProjects.createProject();
            commandsProjects.titleProject(idproject, "Project 6");
            commandsProjects.descriptionProject(idproject, "Description 2");
            commandsProjects.colorProject(idproject, "red");
            idproject = commandsProjects.createProject();
            commandsProjects.titleProject(idproject, "Project 7");
            commandsProjects.descriptionProject(idproject, "Description 2");
            commandsProjects.colorProject(idproject, "red");
            data = dataQueries.getProjectsForStartPage();
        }
        setProjects(data);
        setCompletedTasks(dataQueries.getTasksCompletedLengthForStartPage());
        setOnGoingTasks(dataQueries.getTasksOnGoingLengthForStartPage());
        setInProcessTasks(dataQueries.getTasksInProcessLengthForStartPage());
        setOpenTasks(dataQueries.getTasksOpenLengthForStartPage());
        setCanceledTasks(dataQueries.getTasksCanceledLengthForStartPage());
    };
    const resize = async () => {
        setWidth(window.innerWidth);
    };
    const onClickProject = async (e, project) => {
        setSelectedProject(project);
        setPageMain("project");
    };
    return (
        <>
            {/* <div className="mb-1">
                <Greetings></Greetings>
            </div> */}
            <NormalBox p={2}>
                <List cols={2} gap={4}>
                    <InfoButton mainText="On Going" subText={onGoingTasks} color="blue" icon={<ArrowRepead />}></InfoButton>
                    <InfoButton mainText="In Process" subText={inProcessTasks} color="amber" icon={<Clock />}></InfoButton>
                    <InfoButton mainText="Completed" subText={completedTasks} color="green" icon={<FileEarmarkCheck />}></InfoButton>
                    <List cols={2} gap={4}>
                        <InfoButton mainText="" subText={canceledTasks} color="red" icon={<FileEarmarkX />}></InfoButton>
                        <InfoButton mainText="" subText={openTasks} color="slate" icon={<FileNew />}></InfoButton>
                    </List>
                </List>
            </NormalBox>
            <div className="ml-2 font-bold text-sm">Recent Tasks</div>
            <ScrollBox p={2}>
                <div className="w-full">
                    <List cols={1} gap={2}>
                        {projects.map((project) => (
                            <Container
                                onClick={(e) => {
                                    onClickProject(e, project);
                                }}
                                key={project.id}
                            >
                                <InfoProjectsListItem
                                    id={project.id}
                                    mainText={project.title}
                                    firstText={project.description.length < 100 ? project.description : project.description.slice(0, 100) + "..."}
                                    secondText={project.date}
                                    percent={project.percent}
                                    color={project.colorName}
                                ></InfoProjectsListItem>
                            </Container>
                        ))}
                    </List>
                </div>
            </ScrollBox>
        </>
    );
}

export default StartPage;
