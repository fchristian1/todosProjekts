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