import { useState } from "react";
import "./App.css";
import MainLayout from "./pages/layout/mainLayout";
import StartPage from "./pages/main_pages/StartPage";
import CalenderPage from "./pages/main_pages/CalendarPage";
import AddPage from "./pages/main_pages/AddPage";
import ListPage from "./pages/main_pages/ListPage";
import ProfilePage from "./pages/main_pages/ProfilePage";

function App() {
    const [maxHeightPosBottom, setMaxHeightPosBottom] = useState(0);
    const [page, setPage] = useState("start");
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    return (
        <>
            <MainLayout maxHeightPosBottom={maxHeightPosBottom} setMaxHeightPosBottom={setMaxHeightPosBottom} page={page} setPage={setPage}>
                {page === "start" && <StartPage maxHeightPosBottom={maxHeightPosBottom} setMaxHeightPosBottom={setMaxHeightPosBottom}></StartPage>}
                {page === "calendar" && <CalenderPage maxHeightPosBottom={maxHeightPosBottom} setMaxHeightPosBottom={setMaxHeightPosBottom}></CalenderPage>}
                {page === "add" && <AddPage maxHeightPosBottom={maxHeightPosBottom} setMaxHeightPosBottom={setMaxHeightPosBottom}></AddPage>}
                {page === "tasklist" && <ListPage maxHeightPosBottom={maxHeightPosBottom} setMaxHeightPosBottom={setMaxHeightPosBottom}></ListPage>}
                {page === "profile" && <ProfilePage maxHeightPosBottom={maxHeightPosBottom} setMaxHeightPosBottom={setMaxHeightPosBottom}></ProfilePage>}
            </MainLayout>
        </>
    );
}

export default App;
