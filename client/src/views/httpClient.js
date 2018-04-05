import axios from 'axios'
import jwtDecode from 'jwt-decode'

const httpClient = axios.create()

httpClient.getToken = function() {
    return localStorage.getItem('token')
}

httpClient.setToken = function(token) {
    localStorage.setItem('token', token)
    return token 
}

httpClient.logIn = function(fields) {
    return this({method: 'post', url: '/api/users/login', data: fields})
    .then((serverResponse) => {
        console.log(serverResponse.data)
        const {token} = serverResponse.data 
        if(token) {
            this.defaults.headers.common.token =this.setToken(token)
            return jwtDecode(token)
        } else {
            return false 
        }
    })
}

export default httpClient
