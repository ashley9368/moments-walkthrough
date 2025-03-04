import axios from "axios";

axios.defaults.baseURL = "https://drf-api-walkthrough-1-b4e76842989a.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;