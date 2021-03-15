import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-c3dff-default-rtdb.firebaseio.com/",
});

export default instance;
