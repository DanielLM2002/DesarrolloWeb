import axios from 'axios';

const Axios = axios.create({
  baseURL: './php/'
});

export default Axios;