import axios from "axios";
const baseURL = process.env.REACT_APP_API;
const apiKey = process.env.REACT_APP_APIKEY;
const SERVICE = axios.create({ baseURL });
const headers = { "x-apikey": apiKey };

const API = {
  getAllAirplanes: async () => {
    const data = await SERVICE.get(`/airports`, { headers });
    return data;
  },
};
export default API;
