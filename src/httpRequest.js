import axios from 'axios'
import Utils from './common/utils/Utils'
// const BASE_URL = 'http://localhost:8080'
const BASE_URL = 'http://178.128.222.19:8080/hm-api'
const CONTENT_TYPE_JSON = 'application/json'
// const CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded'

const isDebug = true

class HttpRequest {

    constructor(url = BASE_URL) {

        this.axiosInstance = axios.create({
            baseURL: url,
            headers: this.getHeader(),
            timeout: 120000
        })

        this.axiosInstance.interceptors.request.use(function (config) {
            // Do something before request is sent
            return config
        }, function (error) {
            // Do something with request error
            return Promise.reject(error)
        })

        // Add a response interceptor
        this.axiosInstance.interceptors.response.use(function (response) {
            // Do something with response data
            return response
        }, function (error) {
            // Do something with response error
            return Promise.reject(error)
        })
    }

    getBaseUrl() {
        return BASE_URL
    }

    getIsDebug() {
        return isDebug
    }

    getHeader() {
        let token = localStorage.getItem('appToken')
        if(Utils.isBlank(token)) token = ''
        return {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': CONTENT_TYPE_JSON,
            'Authorization': 'Bearer ' + token
        }
    }

    get(pathName, data) {
        return this.axiosInstance.get(BASE_URL + pathName, {
            params: data,
            headers: this.getHeader()
        })
    }

    post(pathName, data) {
        return this.axiosInstance.post(BASE_URL + pathName, data, {
            headers: this.getHeader()
        })
    }

    put(pathName, data) {
        return this.axiosInstance.put(BASE_URL + pathName, data, {
            headers: this.getHeader()
        })
    }

    delete(pathName, param, data) {
        return this.axiosInstance.delete(BASE_URL + pathName, {
            params: param,
            data: data,
            headers: this.getHeader()
        })
    }

    request(type, url, data) {
        let promise = null
        switch (type) {
            case 'GET':
                promise = axios.get(url, { params: data });
                break
            case 'POST':
                promise = axios.post(url, data);
                break
            case 'PUT':
                promise = axios.put(url, data);
                break
            case 'DELETE':
                promise = axios.delete(url, data);
                break
            default:
                promise = axios.get(url, { params: data });
                break
        }
        return promise
    }
}

export default HttpRequest