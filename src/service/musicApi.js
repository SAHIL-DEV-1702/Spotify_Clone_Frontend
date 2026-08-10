import API from "../service/api"

export const getAllMusic = (page = 1, limit = 20) => API.get(`/music/getallmusic?page=${page}&limit=${limit}`);

export const uploadMusic = (formData) => API.post("/music/uploadmusic", formData);

export const deleteMusic = (id) => API.delete(`/music/${id}`);

export const getMusicById = (id) => API.get(`/music/${id}`);

export const getMyMusics = () => { return API.get("/music/my-musics"); };










