import axios from 'axios'

export class RestDataSource { //Web Services Chapter
    constructor(base_url) {
        this.BASE_URL = base_url
    }
    GetData(callback) {
        this.SendRequest('get', this.BASE_URL, callback)
    }
    // SendRequest(method, url, callback){
    //     axios.request({
    //         method : method,
    //         url : url,
    //     }).then(response => callback(response.data))
    // }

    // async SendRequest(method, url, callback) {
    //     const response = await axios.request({
    //         method: method,
    //         url: url,
    //     });
    //     callback(response.data)
    // }

    async SendRequest(method, url, callback) {
        callback((await axios.request({
            method: method,
            url: url,
        })).data)
    }
}