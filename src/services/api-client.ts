import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params :{
        key : '532e58dc78534699bd2fb3966221b49b'
    }
})