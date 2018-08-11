import axios from 'axios';


const instance = axios.create( {

    baseURL : 'https://my-burger-app-44777.firebaseio.com/'

})

//instance.defaults.headers.common['Authorization'] = 'Auth token from instance';

export default instance;