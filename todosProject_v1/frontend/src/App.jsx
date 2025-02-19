import { useState } from "react";
import "./App.css";
import MainLayout from "./pages/layout/mainLayout";
import StartPage from "./pages/main_pages/StartPage";
import CalenderPage from "./pages/main_pages/CalendarPage";
import AddPage from "./pages/main_pages/AddPage";
import ListPage from "./pages/main_pages/ListPage";
import ProfilePage from "./pages/main_pages/ProfilePage";

import { EventEmitter } from "events";
import ProjectPage from "./pages/ProjectPage";
function App() {
    const [maxHeightPosBottom, setMaxHeightPosBottom] = useState(0);
    const [pageMain, setPageMain] = useState("start");
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null);
    return (
        <>
            <MainLayout maxHeightPosBottom={maxHeightPosBottom} setMaxHeightPosBottom={setMaxHeightPosBottom} pageMain={pageMain} setPageMain={setPageMain}>
                {pageMain === "start" && (
                    <StartPage
                        pageMain={pageMain}
                        setPageMain={setPageMain}
                        selectedProject={selectedProject}
                        setSelectedProject={setSelectedProject}
                        maxHeightPosBottom={maxHeightPosBottom}
                        setMaxHeightPosBottom={setMaxHeightPosBottom}
                    ></StartPage>
                )}
                {pageMain === "calendar" && (
                    <CalenderPage
                        setPageMain={setPageMain}
                        maxHeightPosBottom={maxHeightPosBottom}
                        setMaxHeightPosBottom={setMaxHeightPosBottom}
                    ></CalenderPage>
                )}
                {pageMain === "add" && (
                    <AddPage
                        setPageMain={setPageMain}
                        maxHeightPosBottom={maxHeightPosBottom}
                        setMaxHeightPosBottom={setMaxHeightPosBottom}
                        selectedProject={selectedProject}
                        selectedTask={selectedTask}
                    ></AddPage>
                )}
                {pageMain === "tasklist" && (
                    <ListPage setPageMain={setPageMain} maxHeightPosBottom={maxHeightPosBottom} setMaxHeightPosBottom={setMaxHeightPosBottom}></ListPage>
                )}
                {pageMain === "profile" && (
                    <ProfilePage setPageMain={setPageMain} maxHeightPosBottom={maxHeightPosBottom} setMaxHeightPosBottom={setMaxHeightPosBottom}></ProfilePage>
                )}
                {pageMain === "project" && (
                    <ProjectPage
                        selectedProject={selectedProject}
                        setSelectedProject={setSelectedProject}
                        setPageMain={setPageMain}
                        maxHeightPosBottom={maxHeightPosBottom}
                        setMaxHeightPosBottom={setMaxHeightPosBottom}
                    ></ProjectPage>
                )}
            </MainLayout>
        </>
    );
}

export default App;
