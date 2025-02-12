import { addATaskProject, colorProject, createProject, deleteProject, descriptionProject, removeATaskProject, setLastAddedProjectID, titleProject } from "./projects/projectsCommands";
import { createTask, deleteTask, descriptionTask, setStatusCanceled, setStatusCompleted, setStatusInProcess, setStatusOnGoing, titleTask } from "./tasks/tasksCommands";



export const commandsProjects = {
    createProject,
    titleProject,
    descriptionProject,
    colorProject,
    addATaskProject,
    removeATaskProject,
    deleteProject,
    setLastAddedProjectID
}

export const commandsTasks = {
    createTask,
    titleTask,
    descriptionTask,
    setStatusCanceled,
    setStatusCompleted,
    setStatusInProcess,
    setStatusOnGoing,
    deleteTask
}