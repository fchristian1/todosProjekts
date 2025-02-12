
import { getLastAddedProjectID, getProjectsForAddTaskPage, getProjectsForStartPage } from "./projects/projectsQuerys";
import { getTasksCanceledLengthForStartPage, getTasksCompletedLengthForStartPage, getTasksInProcessLengthForStartPage, getTasksOnGoingLengthForStartPage, getTasksOpenLengthForStartPage } from "./tasks/tasksQuerys";



export const dataQueries = {
    getProjectsForStartPage,
    getProjectsForAddTaskPage,
    getTasksCompletedLengthForStartPage,
    getTasksOpenLengthForStartPage,
    getTasksInProcessLengthForStartPage,
    getTasksOnGoingLengthForStartPage,
    getTasksCanceledLengthForStartPage,
    getLastAddedProjectID
}