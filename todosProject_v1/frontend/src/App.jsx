import { useState } from "react";
import "./App.css";
import MainLayout from "./pages/layout/mainLayout";
import StartPage from "./pages/startPage";

function App() {
    const [maxHeightPosBottom, setMaxHeightPosBottom] = useState(0);
    const [page, setPage] = useState("start");
    return (
        <>
            <MainLayout maxHeightPosBottom={maxHeightPosBottom} setMaxHeightPosBottom={setMaxHeightPosBottom}>
                {page === "start" && <StartPage maxHeightPosBottom={maxHeightPosBottom} setMaxHeightPosBottom={setMaxHeightPosBottom}></StartPage>}
            </MainLayout>
        </>
    );
}

export default App;
