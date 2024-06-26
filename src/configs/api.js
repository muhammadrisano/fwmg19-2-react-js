import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const originalRequest = error.config;

    const message = error.response?.data?.message;
    if (message === "token expired" && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('resfreshToken')
        const {data} =  await axios.post(`${import.meta.env.VITE_API_URL}/auth/refresh-token`, {
          refreshToken: refreshToken
        })
        console.log(data);
        localStorage.setItem('token', data.data.token)
        localStorage.setItem('resfreshToken', data.data.refreshToken)
        originalRequest.headers.Authorization = `Bearer ${data.data.token}`;

        return api(originalRequest)
      } catch (error) {
        console.log('redirect ke login');
      }
    }

    return Promise.reject(error);
  }
);

export default api;
