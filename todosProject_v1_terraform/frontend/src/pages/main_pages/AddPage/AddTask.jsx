import React from "react";
import List from "../../../components/list";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { dataQueries } from "../../../services/data/querys";

function AddTask() {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [color, setColor] = React.useState("#000000");
    const [project, setProject] = React.useState("");

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
        setProject(e.target.value);
    };
    return (
        <div className="mt-2 border-gray-400 h-full">
            {project}
            <List col={1} gap={2}>
                <Input onChange={titleChangeHandler} value={title} type="text" placeholder={"Title"}></Input>
                <Input onChange={descriptionChangeHandler} vlaue={description} type="textarea" placeholder={"Description"}></Input>
                <Input onChange={colorChangeHandler} value={color} type="color"></Input>
                <Input
                    onChange={projectChangeHandler}
                    value={project}
                    type="select"
                    options={{
                        selected: dataQueries.getLastAddedProjectID(),
                        list: dataQueries.getProjectsForAddTaskPage(),
                    }}
                ></Input>

                <div className="flex flex-col mt-4 p-4 w-full">
                    <Button>
                        <div className="w-full font-bold text-xl text-center">+</div>
                    </Button>
                </div>
            </List>
        </div>
    );
}

export default AddTask;
