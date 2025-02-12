import { projectsData } from "./projectsData";

export const getProjectsForStartPage = () => {
    return projectsData.getProjects();
}
export const getProjectsForAddTaskPage = () => {
    return projectsData.getProjects().map(project => {
        return {
            value: project.id,
            label: project.title
        }
    });
}
export const getLastAddedProjectID = () => {
    return projectsData.lastAddedProjectID;
}