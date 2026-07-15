import API from "../service/api"

export const getAllMusic = () => API.get("/music");



export const uploadMusic = (formData) =>
    API.post("/music/upload", formData);



export const deleteMusic = (id) =>
    API.delete(`/music/${id}`);



export const getMusicById = (id) =>
    API.get(`/music/${id}`);