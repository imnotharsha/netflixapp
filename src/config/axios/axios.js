import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});
export default axios;
