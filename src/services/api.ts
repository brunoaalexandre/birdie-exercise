import axios from "axios";

export const api = axios.create({
  baseURL: "https://interview.piperz.com.br/api",
});
