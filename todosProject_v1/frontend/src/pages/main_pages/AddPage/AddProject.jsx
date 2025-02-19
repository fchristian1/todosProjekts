import React from "react";
import List from "../../../components/list";
import Input from "../../../components/Input";
import { dataQueries } from "../../../services/data/querys";
import Button from "../../../components/Button";

function AddProject() {
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
                <Input onChange={titleChangeHandler} value={title} type="text" placeholder={"Project Title"}></Input>
                <Input onChange={descriptionChangeHandler} vlaue={description} type="textarea" placeholder={"Project Description"}></Input>
                <Input onChange={colorChangeHandler} value={color} type="color"></Input>

                <div className="flex flex-col mt-4 p-4 w-full">
                    <Button>
                        <div className="w-full font-bold text-xl text-center">Add Project</div>
                    </Button>
                </div>
            </List>
        </div>
    );
}
export default AddProject;
