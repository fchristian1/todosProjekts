import { tasksData } from "../tasks/tasksData";
import { projectsData } from "./projectsData";

export const getProjectsForStartPage = () => {
    return projectsData.getProjects();
}
export const getProjectsForAddTaskPage = () => {
    return [{ value: "", label: "--- select a Project" }, ...projectsData.getProjects().map(project => {
        return {
            value: project.id,
            label: project.title
        }
    })];
}
export const getLastAddedProjectID = () => {
    return projectsData.lastAddedProjectID;
}

export const getStatusFromProjectTasks = (projectID) => {
    let project = projectsData.getProject(projectID);
    let tasks = project.tasksIDs.map(id => tasksData.getTask(id));
    let totalTasks = tasks.length;
    let canceledTasks = tasks.filter(task => task.status == "canceled").length;
    let openTasks = tasks.filter(task => task.status == "open").length;
    let inProcessTasks = tasks.filter(task => task.status == "inprocess").length;
    let onGoingTasks = tasks.filter(task => task.status == "ongoing").length;
    let completedTasks = tasks.filter(task => task.status == "completed").length;
    return {
        totalTasks,
        canceledTasks,
        openTasks,
        inProcessTasks,
        onGoingTasks,
        completedTasks
    }
}
export const getProjectCompletedPercentage = (projectID) => {
    let project = projectsData.getProject(projectID);
    let tasks = project.tasksIDs.map(id => tasksData.getTask(id));
    let completedTasks = tasks.filter(task => task.status == "completed").length;
    let totalTasks = tasks.length;

    return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
}
export const getProjectOnGoingPercentage = (projectID) => {
    let project = projectsData.getProject(projectID);
    let tasks = project.tasksIDs.map(id => tasksData.getTask(id));
    let onGoingTasks = tasks.filter(task => task.status == "ongoing").length;
    let totalTasks = tasks.length;

    return totalTasks > 0 ? Math.round((onGoingTasks / totalTasks) * 100) : 0;
}
export const getProjectInProcessPercentage = (projectID) => {
    let project = projectsData.getProject(projectID);
    let tasks = project.tasksIDs.map(id => tasksData.getTask(id));
    let inProcessTasks = tasks.filter(task => task.status == "inprocess").length;
    let totalTasks = tasks.length;

    return totalTasks > 0 ? Math.round((inProcessTasks / totalTasks) * 100) : 0;
}
export const getProjectCanceledPercentage = (projectID) => {
    let project = projectsData.getProject(projectID);
    let tasks = project.tasksIDs.map(id => tasksData.getTask(id));
    let canceledTasks = tasks.filter(task => task.status == "canceled").length;
    let totalTasks = tasks.length;

    return totalTasks > 0 ? Math.round((canceledTasks / totalTasks) * 100) : 0;
}
export const getProjectOpenPercentage = (projectID) => {
    let project = projectsData.getProject(projectID);
    let tasks = project.tasksIDs.map(id => tasksData.getTask(id));
    let openTasks = tasks.filter(task => task.status == "open").length;
    let totalTasks = tasks.length;

    return totalTasks > 0 ? Math.round((openTasks / totalTasks) * 100) : 0;
}

export const getProjectTaskStopWatchSeconds = (projectID) => {
    let project = projectsData.getProject(projectID);
    let tasks = project.tasksIDs.map(id => tasksData.getTask(id));
    let seconds = 0;
    tasks.forEach(task => {
        if (!task.stopWatch) return;
        task.stopWatch.forEach(sw => {
            if (sw.status === "start") {
                seconds += Math.floor((Date.now() - sw.start) / 1000);
            }
        });
    });
    return seconds;
}