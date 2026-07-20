import API from "../service/api"



export const getAllMusic = () => API.get("/music/getallmusic");


export const uploadMusic = (formData) =>
    API.post("/music/uploadmusic", formData);


export const deleteMusic = (id) =>
    API.delete(`/music/${id}`);


export const getMusicById = (id) =>
    API.get(`/music/${id}`);












