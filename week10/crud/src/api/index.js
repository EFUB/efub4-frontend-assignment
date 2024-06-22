import axios from "axios";

const client = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    withCredentials: true
});

const token = localStorage.getItem("efubtoken");
if (token) {
    client.defaults.headers.common["Authorization"] = token;
} else {
    delete client.defaults.headers.common["Authorization"];
}

export default client;
