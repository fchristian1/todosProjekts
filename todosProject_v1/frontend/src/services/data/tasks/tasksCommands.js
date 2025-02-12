import { tasksData } from "./tasksData";
import { v4 as uuid } from 'uuid';

export const createTask = () => {
    let newTask = {
        id: uuid(),
        title: "",
        description: "",
        createdAt: Date.now(),
        status: "open"
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

export const setStatusInProcess = (taskID) => {
    tasksData.updateTask({ ...tasksData.getTask(taskID), status: "inprocess" });
}

export const setStatusOnGoing = (taskID) => {
    tasksData.updateTask({ ...tasksData.getTask(taskID), status: "ongoing" });
}
export const setStatusCompleted = (taskID) => {
    tasksData.updateTask({ ...tasksData.getTask(taskID), status: "completed" });
}
export const setStatusCanceled = (taskID) => {
    tasksData.updateTask({ ...tasksData.getTask(taskID), status: "canceled" });
}

export const deleteTask = (taskID) => {
    tasksData.removeTask(taskID);
}

