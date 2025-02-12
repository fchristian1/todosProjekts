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

function StartPage({ maxHeightPosBottom, setMaxHeightPosBottom }) {
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
    async function getData() {
        let data = dataQueries.getProjectsForStartPage();
        if (data.length === 0) {
            const idtask = commandsTasks.createTask();
            commandsTasks.titleTask(idtask, "First Task");
            commandsTasks.descriptionTask(idtask, "Description 1");

            const idproject = commandsProjects.createProject();
            commandsProjects.titleProject(idproject, "Project 1");
            commandsProjects.descriptionProject(idproject, "Description 1");
            commandsProjects.colorProject(idproject, "red");
            commandsProjects.addATaskProject(idproject, idtask);
            data = dataQueries.getProjectsForStartPage();
        }
        setProjects(data);
        setCompletedTasks(dataQueries.getTasksCompletedLengthForStartPage());
        setOnGoingTasks(dataQueries.getTasksOnGoingLengthForStartPage());
        setInProcessTasks(dataQueries.getTasksInProcessLengthForStartPage());
        setOpenTasks(dataQueries.getTasksOpenLengthForStartPage());
        setCanceledTasks(dataQueries.getTasksCanceledLengthForStartPage());
    }
    function resize() {
        setWidth(window.innerWidth);
    }
    return (
        <>
            {/* <div className="mb-1">
                <Greetings></Greetings>
            </div> */}
            <NormalBox className="mb-1 w-full">
                <List cols={2} gap={2}>
                    <InfoButton mainText="On Going" subText={onGoingTasks} color="blue" icon={<ArrowRepead />}></InfoButton>
                    <InfoButton mainText="In Process" subText={inProcessTasks} color="amber" icon={<Clock />}></InfoButton>
                    <InfoButton mainText="Completed" subText={completedTasks} color="green" icon={<FileEarmarkCheck />}></InfoButton>
                    <List cols={2} gap={2}>
                        <InfoButton mainText="" subText={canceledTasks} color="red" icon={<FileEarmarkX />}></InfoButton>
                        <InfoButton mainText="" subText={openTasks} color="slate" icon={<FileNew />}></InfoButton>
                    </List>
                </List>
            </NormalBox>

            <ScrollBox>
                <div>Recent Tasks</div>
                <div className="w-full">
                    <List cols={1} gap={2}>
                        <Container>
                            <InfoProjectsListItem
                                id="123"
                                mainText="Dailys"
                                firstText="Tasks you have to do every day"
                                secondText="First Task"
                                percent={0}
                                color="blue"
                            ></InfoProjectsListItem>
                        </Container>
                        {projects.map((project) => (
                            <Container key={project.id}>
                                <InfoProjectsListItem
                                    id={project.id}
                                    mainText={project.title}
                                    firstText={project.description}
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
