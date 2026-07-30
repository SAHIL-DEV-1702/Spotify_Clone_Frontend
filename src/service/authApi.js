import API from "../service/api.js"


export const register = (data) => API.post("/auth/register", data);

export const login = (data) => API.post("/auth/login", data);

export const logout = () => API.get("/auth/logout");

export const getCurrentUser = () => API.get("/auth/me");