import { useState } from "react";
import "./App.css";
import MainLayout from "./pages/layout/mainLayout";
import StartPage from "./pages/main_pages/StartPage";
import CalenderPage from "./pages/main_pages/CalendarPage";
import AddPage from "./pages/main_pages/AddPage";
import ListPage from "./pages/main_pages/ListPage";
import ProfilePage from "./pages/main_pages/ProfilePage";

import ProjectPage from "./pages/ProjectPage";
import LoginRegisterPage from "./pages/main_pages/LoginRegisterPage";
function App() {
    const [maxHeightPosBottom, setMaxHeightPosBottom] = useState(0);
    const [pageMain, setPageMain] = useState("start");
    const [comesFromPage, setComesFromPage] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null);
    return (
        <>
            <MainLayout
                maxHeightPosBottom={maxHeightPosBottom}
                setMaxHeightPosBottom={setMaxHeightPosBottom}
                pageMain={pageMain}
                setPageMain={setPageMain}
                comesFromPage={comesFromPage}
                setComesFromPage={setComesFromPage}
            >
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
                        comesFromPage={comesFromPage}
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
                {pageMain === "login" && (
                    <LoginRegisterPage
                        setPageMain={setPageMain}
                        maxHeightPosBottom={maxHeightPosBottom}
                        setMaxHeightPosBottom={setMaxHeightPosBottom}
                    ></LoginRegisterPage>
                )}
            </MainLayout>
        </>
    );
}

export default App;
