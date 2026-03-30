import axios from "axios";

const dotnetAPI = axios.create({
    baseURL: "http://localhost:5195/dotnetapi"
});

export default dotnetAPI;