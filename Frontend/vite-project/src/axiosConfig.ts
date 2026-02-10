import axios from "axios";

const instance = axios.create({
  baseURL: "https://ai-video-template-generator-app-backend.onrender.com",
  withCredentials: true, // agar cookies use kar rahe ho
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
