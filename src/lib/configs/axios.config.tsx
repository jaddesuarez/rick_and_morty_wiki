import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api";

export const fetch = axios.create({ baseURL });
