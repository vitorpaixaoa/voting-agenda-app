import axios from 'axios';
import {API_URL} from "../assets/constant"
const api = axios.create({
    baseURL: API_URL
});
export default api;