import localAPI from "./local";
import serverAPI from "./server";

console.log("Моя переменная окружения:", import.meta.env.VITE_STATIC_BACKEND);

const isLocal = import.meta.env.VITE_STATIC_BACKEND === "true";

const tasksAPI = isLocal ? localAPI : serverAPI;

export default tasksAPI;
