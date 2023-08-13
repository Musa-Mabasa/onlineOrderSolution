import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apiurl'
  })

  export default api;