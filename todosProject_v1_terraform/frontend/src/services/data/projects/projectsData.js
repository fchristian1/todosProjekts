let database = [];
let lastAddedProjectID = "";

const getProjects = () => {
    return database;
};

const getProject = (projectID) => {
    return database.find(project => project.id === projectID);
};

const addProject = (project) => {
    database.push(project);
};

const removeProject = (projectID) => {
    database = database.filter(project => project.id !== projectID);
};

const updateProject = (project) => {
    database = database.map(p => p.id === project.id ? project : p);
};


export const projectsData = {
    getProjects,
    getProject,
    addProject,
    removeProject,
    updateProject,
    lastAddedProjectID
}