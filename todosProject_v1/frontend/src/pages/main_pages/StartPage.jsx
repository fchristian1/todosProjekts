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
import {
    getProjectCanceledPercentage,
    getProjectCompletedPercentage,
    getProjectInProcessPercentage,
    getProjectOnGoingPercentage,
    getProjectOpenPercentage,
    getProjectTaskStopWatchSeconds,
} from "../../services/data/projects/projectsQuerys";
import { getHMinFromSeconds } from "../../context/helper";
import { generateTestData } from "../../context/testData";

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
            generateTestData();
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
                                    secondText={getHMinFromSeconds(getProjectTaskStopWatchSeconds(project.id))}
                                    segments={[
                                        { percentage: getProjectOpenPercentage(project.id), color: "gray" },
                                        { percentage: getProjectCanceledPercentage(project.id), color: "red" },
                                        { percentage: getProjectInProcessPercentage(project.id), color: "amber" },
                                        { percentage: getProjectOnGoingPercentage(project.id), color: "blue" },
                                        { percentage: getProjectCompletedPercentage(project.id), color: "green" },
                                    ]}
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
