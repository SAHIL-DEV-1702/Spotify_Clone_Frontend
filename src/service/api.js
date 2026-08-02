import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api",
    // import.meta.env.VITE_API_URL 
    withCredentials: true
});

export default API

