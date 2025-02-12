import { APU_URL } from "../context/config";
import { events } from "../context/events";

const url = APU_URL;

export const fetchApi = async (path, method, data) => {
    const uri = url + path;
    const client_id = localStorage.getItem("client_id") ?? "";
    const token = localStorage.getItem("token") ?? "";
    const headers = {
        "Content-Type": "application/json",
        Authorization: token || token != "" ? `Bearer ${token}` : "",
        ClienId: client_id || client_id != "" ? client_id : "",
    };
    const body = data ? JSON.stringify(data) : undefined;
    events.emit("fetchApi", JSON.stringify({ uri, method, headers, body }));
    const response = await fetch(uri, { method, headers, body });
    const result = await response.json();
    events.emit("fetchApi", JSON.stringify({ result }));
    return result;
}