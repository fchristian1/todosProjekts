import React from "react";
import List from "../../../components/list";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { dataQueries } from "../../../services/data/querys";
import { commandsProjects, commandsTasks } from "../../../services/data/commands";
import { DEBUG } from "../../../context/config";

function AddTask({ selectedProject, setPageMain, comesFromPage }) {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [color, setColor] = React.useState("#000000");
    const [project, setProject] = React.useState(selectedProject?.id ?? "");

    const onClickAddButton = () => {
        let newID;
        if (title != "") {
            newID = commandsTasks.createTask();
            commandsTasks.titleTask(newID, title);
            commandsTasks.setColorTask(newID, color);
        }
        if (description != "") {
            commandsTasks.descriptionTask(newID, description);
        }
        if (project != "") {
            commandsProjects.addATaskToProject(project, newID);
        }
        setPageMain(comesFromPage);
    };

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    };

    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value);
    };

    const colorChangeHandler = (e) => {
        setColor(e.target.value);
    };
    const projectChangeHandler = (e) => {
        console.log("value", e.target.value);
        setProject(e.target.value);
    };
    return (
        <div className="mt-2 border-gray-400 h-full">
            <List col={1} gap={2}>
                <Input onChange={titleChangeHandler} value={title} type="text" placeholder={"Task Title"}></Input>
                <Input onChange={descriptionChangeHandler} vlaue={description} type="textarea" placeholder={"Task Description"}></Input>
                <Input onChange={colorChangeHandler} value={color} type="color"></Input>
                <Input
                    onChange={projectChangeHandler}
                    value={project}
                    type="select"
                    options={{
                        list: dataQueries.getProjectsForAddTaskPage(),
                    }}
                ></Input>

                <div className="flex flex-col mt-4 p-4 w-full">
                    <Button onClick={onClickAddButton}>
                        <div className="w-full font-bold text-xl text-center">Add Task</div>
                    </Button>
                </div>
            </List>
        </div>
    );
}

export default AddTask;
