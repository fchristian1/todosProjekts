import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { initClientId } from "./context/clientId.js";
import { events } from "./context/events.js";
import { initToken } from "./context/token.js";
events.emit("init");
initClientId();
initToken();
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
