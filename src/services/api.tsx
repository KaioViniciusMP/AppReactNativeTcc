import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://192.168.15.5/cu' //publicado no meu iis
    //baseURL: 'http://192.168.15.5/apiManagementPersonal' //publicado no meu iis
    baseURL: 'https://api-faisca.online/managerdinero/' //publicado no meu iis
});

export default api;

//COMANDO PARA BAIXAR O AXIOS
//expo install axios ou npm install axios