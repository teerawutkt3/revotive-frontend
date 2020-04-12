import HttpRequest from '../../httpRequest'
import axios from 'axios'
import swal from 'sweetalert'
import AxiosService from './axios-service'
const axiosService = new AxiosService()
class LoginService extends HttpRequest {

    doLogin(pathName, data) {
        if (this.getIsDebug()) {
            console.log("Path: ", pathName)
            console.log("Params: ", data)
        }
        axios.post(this.getBaseUrl() + pathName, data).then(res => {
            if (this.getIsDebug())
                console.log("doLogin : ", res.data.data.token)
            localStorage.setItem('appToken', res.data.data.token)
            this.getProfile().then(()=>{
                this.$router.push({path: '/'})
            })
        }).catch(err => {

            swal('Login: Error!' , 'Check Username and Password', 'warning')
            if (this.getIsDebug())
                console.log("err login : ", err)
        })
    }
    getProfile() {
        return new Promise((resolve) => {
            this.get("/api/user/profile",{}).then(res => {                            
                resolve(res.data)
            }).catch(err => {
                localStorage.removeItem("appToken")
                this.$router.push({path: '/auth'})
                if (axiosService.getIsDebug()){
                    console.log("errd: ", err)
                    console.log("errd: can't get profile!")
                }
            })
        })

     }
}

export default LoginService