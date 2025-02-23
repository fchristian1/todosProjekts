import { projectsData } from "./projectsData"
import { v4 as uuid } from 'uuid';


export const createProject = () => {
    let newProject = {
        id: uuid(),
        title: "",
        description: "",
        createdAt: Date.now(),
        tasksIDs: []
    }
    projectsData.addProject(newProject);
    return newProject.id;
}

export const dealineProject = (projectId, deadlineDate) => {
    projectsData.updateProject({ ...projectsData.getProject(projectId), deadlineDate });
}

export const titleProject = (projectId, title) => {
    projectsData.updateProject({ ...projectsData.getProject(projectId), title });
}

export const descriptionProject = (projectId, description) => {
    projectsData.updateProject({ ...projectsData.getProject(projectId), description });
}

export const colorProject = (projectId, colorName) => {
    projectsData.updateProject({ ...projectsData.getProject(projectId), colorName });
}

export const addATaskToProject = (projectId, taskID) => {
    let project = projectsData.getProject(projectId);
    project.tasksIDs.push(taskID);
    projectsData.updateProject(project);
}

export const removeATaskProject = (projectId, taskID) => {
    let project = projectsData.getProject(projectId);
    project.tasksIDs = project.tasksIDs.filter(id => id !== taskID);
    projectsData.updateProject(project);
}

export const deleteProject = (projectId) => {
    projectsData.removeProject(projectId);
}

export const setLastAddedProjectID = (id) => {
    projectsData.lastAddedProjectID = id;
}