import axios from 'axios';

const api = axios.create({
	baseURL: "http://34.95.209.173:3333",
});

export default api;
