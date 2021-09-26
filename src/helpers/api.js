import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: {
    "Content-Type": "application/json",
  },
});

const httpClientAuth = axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("TOKEN")}`
  }
});

const v1 = "api/v1";

const auth = {
  login: (body) => httpClient.post(v1 + '/auth/login', body),
  register: (body) => httpClient.post(v1 + '/auth/register', body),
};

const users = {
  getAll: () => httpClientAuth.get(v1 + '/users'),
};

export default {
  auth,
  users,
};
