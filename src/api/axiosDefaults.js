import axios from "axios";

axios.defaults.baseURL = "https://moments-walkthrough-25-a73b7ad954bc.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;