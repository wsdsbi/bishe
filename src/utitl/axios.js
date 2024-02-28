import axios from "axios";

const request=axios.create({
    baseURL:'http://localhost:9898/',
    timeout:''
})


request.interceptors.response.use(function(config){
    return config
},function(error){
    return Promise.reject(error)
}
)

export default request