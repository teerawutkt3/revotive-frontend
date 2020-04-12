import HttpRequest from '../../httpRequest'
import swal from 'sweetalert'

const message401 = {
    title: '401',
    description: 'Unauthorized',
    icon: 'error'
}
const message405 = {
    title: '405',
    description: 'Method not allowed',
    icon: 'error'
}
const messageError = {
    title: 'Error',
    description: '',
    icon: 'error'
}

class AxiosService extends HttpRequest {
    STATUS = {
        SUCCESS: 'SUCCESS',
        FAIL: 'FAIL'
    }

    doGet(path) {
        if (this.getIsDebug()) {
            console.log("=============================")
            console.log("Path: ", this.getBaseUrl() + path)
            console.log("Method Type: GET ")
            console.log("=============================")
        }
        return new Promise((resolve, reject) => {
            this.get(path, {}).then(res => {
                if (res.data.status == 'SUCCESS') {
                    resolve(res.data)
                } else {
                    this.handleErrProcess(res.data)
                }
            }).catch(err => {
                this.handleErr(err, reject)
            })
        })
    }

    doPost(path, data) {
        if (this.getIsDebug()) {
            console.log("=============================")
            console.log("Path: ", this.getBaseUrl() + path)
            console.log("Method Type: POST")
            console.log("Params: ", data)
            console.log("=============================")
        }
        return new Promise((resolve, reject) => {
            this.post(path, data).then(res => {
                if (res.data.status == 'SUCCESS') {
                    resolve(res.data)
                } else {
                    this.handleErrProcess(res.data)
                }
            }).catch(err => {
                this.handleErr(err, reject)
            })
        })
    }

    doPut(path, data){
        if (this.getIsDebug()) {
            console.log("=============================")
            console.log("Path: ", this.getBaseUrl() + path)
            console.log("Method Type: PUT")
            console.log("Params: ", data)
            console.log("=============================")
        }
        return new Promise((resolve, reject) => {
            this.put(path, data).then(res => {
                if (res.data.status == 'SUCCESS') {
                    resolve(res.data)
                } else {
                    this.handleErrProcess(res.data)
                }
            }).catch(err => {
                this.handleErr(err, reject)
            })
        })
    }

    doDelete(path) {
        if (this.getIsDebug()) {
            console.log("=============================")
            console.log("Path: ", this.getBaseUrl() + path)
            console.log("Method Type: DELETE")
            console.log("=============================")
        }
        return new Promise((resolve, reject) => {
            this.delete(path).then(res => {
                if (res.data.status == 'SUCCESS') {
                    resolve(res.data)
                } else {
                    console.log('get err', res.data)
                    this.handleErrProcess(res.data)
                }
            }).catch(err => {
                this.handleErr(err, reject)
            })
        })
    }

    handleErrProcess(err) {
        swal(messageError.title, err.message + err, messageError.icon)
    }

    handleErr(err, reject) {
        if (err.response.status === 401) {
            console.log(message401.title + message401.description)
            this.$router.push({path: '/auth'})
            //swal(message401.title, message401.description, message401.icon)
            reject("401")
        } else if (err.response.status === 405) {
            swal(message405.title, message405.description, message405.icon)
            reject("405")
        } else {
            swal(messageError.title, '' + err, messageError.icon)
            reject(err)
        }
    }

    processErr(msg) {
        swal('Process error', msg, 'error')
    }

}

export default AxiosService