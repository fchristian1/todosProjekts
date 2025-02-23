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

export const getTaskLastStatusStartStopWatch = (taskID) => {
    let task = tasksData.getTask(taskID);
    let stopWatch = task.stopWatch;
    if (stopWatch === undefined) { return "stop"; }
    if (stopWatch.length === 0) { return "stop"; }
    let lastStart = stopWatch[stopWatch.length - 1]?.status;

    return lastStart;
}

export const getTaskById = (taskID) => {
    return tasksData.getTask(taskID);
}

export const getStopWatchSeconds = (taskID) => {
    let task = tasksData.getTask(taskID);
    let stopWatch = task.stopWatch;
    let seconds = 0;
    if (stopWatch === undefined) { return 0; }
    if (stopWatch.length === 0) { return 0; }
    stopWatch.forEach(sw => {
        if (sw.status === "start") {
            seconds += Math.floor((Date.now() - sw.start) / 1000);
        }
    });
    return seconds;
}