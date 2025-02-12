export const API_PORT = import.meta.env.VITE_APP_API_PORT || 3000;
export const APU_URL = import.meta.env.VITE_APP_API_URL + ":" + API_PORT + "/api/v1/" || "http://localhost:3000/api/v1/";
export const DEBUG = true;

DEBUG && console.log("API_PORT: ", API_PORT);
DEBUG && console.log("APU_URL: ", APU_URL);
DEBUG && console.log("DEBUG: ", DEBUG);