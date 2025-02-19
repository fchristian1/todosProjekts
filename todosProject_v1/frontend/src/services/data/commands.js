import { addATaskToProject, colorProject, createProject, deleteProject, descriptionProject, removeATaskProject, setLastAddedProjectID, titleProject } from "./projects/projectsCommands";
import { createTask, deleteTask, descriptionTask, setStatusCanceledTask, setColorTask, setStatusCompletedTask, setStatusInProcessTask, setStatusOnGoingTask, titleTask } from "./tasks/tasksCommands";



export const commandsProjects = {
    createProject,
    titleProject,
    descriptionProject,
    colorProject,
    addATaskToProject,
    removeATaskProject,
    deleteProject,
    setLastAddedProjectID
}

export const commandsTasks = {
    createTask,
    titleTask,
    descriptionTask,
    setStatusCanceledTask,
    setStatusCompletedTask,
    setStatusInProcessTask,
    setStatusOnGoingTask,
    setColorTask,
    deleteTask
}