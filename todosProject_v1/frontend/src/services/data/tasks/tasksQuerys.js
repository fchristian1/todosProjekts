import { tasksData } from "./tasksData"

export const getTasksCompletedLengthForStartPage = () => {
    return tasksData.getTasks().filter(task => task.status === "completed").length;
}

export const getTasksOpenLengthForStartPage = () => {
    return tasksData.getTasks().filter(task => task.status === "open").length;
}

export const getTasksInProcessLengthForStartPage = () => {
    return tasksData.getTasks().filter(task => task.status === "inprocess").length;
}

export const getTasksOnGoingLengthForStartPage = () => {
    return tasksData.getTasks().filter(task => task.status === "ongoing").length;
}

export const getTasksCanceledLengthForStartPage = () => {
    return tasksData.getTasks().filter(task => task.status === "canceled").length;
}

export const getTaskById = (taskID) => {
    return tasksData.getTask(taskID);
}