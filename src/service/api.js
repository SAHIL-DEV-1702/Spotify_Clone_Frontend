import axios from "axios";

const API = axios.create({
    baseURL: " https://spotify-clone-backend-ccsi.onrender.com",
    withCredentials: true
});

export default API

