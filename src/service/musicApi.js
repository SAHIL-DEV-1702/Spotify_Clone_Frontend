import API from "../service/api"



export const getAllMusic = () => API.get("/getallmusic");


export const uploadMusic = (formData) =>
    API.post("/music/uploadmusic", formData);


export const deleteMusic = (id) =>
    API.delete(`/music/${id}`);


export const getMusicById = (id) =>
    API.get(`/music/${id}`);


export const createAlbum = () => API.post("/album")

export const getAlbums = () => API.post("/getAlbums")

export const getAlbumById = () => API.get("/albums/:albumId")










