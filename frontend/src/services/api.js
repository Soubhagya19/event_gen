import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api"
});

export const dotnetAPI = axios.create({
    baseURL: "http://localhost:5000/dotnetapi"
});

export default API;