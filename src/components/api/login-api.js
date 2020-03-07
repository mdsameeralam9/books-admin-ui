import axios from "axios";

const url = "http://localhost:8000/auth/login";

export const login = (payload) => axios.post(url, payload);