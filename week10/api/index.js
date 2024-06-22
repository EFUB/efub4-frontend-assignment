import axios from "axios";
const client = axios.create();
client.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
client.defaults.withCredentials = true;
const token = localStorage.getItem("efubtoken");
console.log("현재 로컬 스토리지 토큰", token);
client.defaults.headers.common["Authorization"] = token ? `${token}` : null;
console.log(
  "현재 axios instance 헤더 토큰",
  client.defaults.headers.common["Authorization"]
);

export default client;
