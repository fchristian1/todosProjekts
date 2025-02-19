let database = [];
const getTasks = () => {
    return database;
};

const getTask = (TasksID) => {
    return database.find(Tasks => Tasks.id === TasksID);
};

const addTask = (Task) => {
    database.push(Task);
};

const removeTask = (TasksID) => {
    database = database.filter(Tasks => Tasks.id !== TasksID);
};

const updateTask = (Task) => {
    database = database.map(t => t.id === Task.id ? Task : t);
};


export const tasksData = {
    getTasks,
    getTask,
    addTask,
    removeTask,
    updateTask
}
