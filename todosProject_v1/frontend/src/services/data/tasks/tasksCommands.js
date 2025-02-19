import { tasksData } from "./tasksData";
import { v4 as uuid } from 'uuid';

export const createTask = () => {
    let newTask = {
        id: uuid(),
        title: "",
        description: "",
        createdAt: Date.now(),
        status: "open",
        color: "gray"
    }
    tasksData.addTask(newTask);
    return newTask.id;
}

export const titleTask = (taskID, title) => {
    tasksData.updateTask({ ...tasksData.getTask(taskID), title });
}

export const descriptionTask = (taskID, description) => {
    tasksData.updateTask({ ...tasksData.getTask(taskID), description });
}

export const setStatusInProcessTask = (taskID) => {
    tasksData.updateTask({ ...tasksData.getTask(taskID), status: "inprocess", color: "amber" });
}

export const setStatusOnGoingTask = (taskID) => {
    tasksData.updateTask({ ...tasksData.getTask(taskID), status: "ongoing", color: "blue" });
}
export const setStatusCompletedTask = (taskID) => {
    tasksData.updateTask({ ...tasksData.getTask(taskID), status: "completed", color: "green" });
}
export const setStatusCanceledTask = (taskID) => {
    tasksData.updateTask({ ...tasksData.getTask(taskID), status: "canceled", color: "red" });
}
export const setColorTask = (taskID, color) => {
    tasksData.updateTask({ ...tasksData.getTask(taskID), color });
}

export const deleteTask = (taskID) => {
    tasksData.removeTask(taskID);
}

