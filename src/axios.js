import  axios   from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/project-v1a/us-central1/api",
});

export { instance } ;
