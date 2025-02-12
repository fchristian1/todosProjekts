import React, { useState } from "react";
import List from "../../components/list";
import Button from "../../components/Button";
import CardList from "../../components/symbols/CardList";
import FileNew from "../../components/symbols/FileNew";
import ScrollBox from "../layout/ScrollBox";
import AddProject from "./AddPage/AddProject";
import AddTask from "./AddPage/AddTask";

function AddPage() {
    const [page, setPage] = useState("task");
    const onClickButtonTask = () => {
        setPage("task");
    };
    const onClickButtonProject = () => {
        setPage("project");
    };
    return (
        <div className="flex flex-col gap-1 h-full">
            <List cols={2} gap={2}>
                <Button active={page == "task" ? "true" : "false"} onClick={onClickButtonTask}>
                    <div className="flex justify-between items-center w-full h-7">
                        <div className="flex justify-center items-center h-full">
                            <FileNew></FileNew>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <span className="font-bold text-lg">Task</span>
                        </div>
                    </div>
                </Button>
                <Button active={page == "project" ? "true" : "false"} onClick={onClickButtonProject}>
                    <div className="flex justify-between items-center w-full h-9">
                        <div className="flex justify-center items-center h-full">
                            <CardList></CardList>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <span className="font-bold text-lg">Project</span>
                        </div>
                    </div>
                </Button>
            </List>
            <ScrollBox>
                {page == "task" && <AddTask></AddTask>}
                {page == "project" && <AddProject></AddProject>}
            </ScrollBox>
        </div>
    );
}

export default AddPage;
