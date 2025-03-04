import axios from "axios";

axios.defaults.baseURL = "drf-api-walkthrough-1.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;