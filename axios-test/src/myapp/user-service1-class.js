import axios from "axios";

class UserService {

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'https://dummyjson.com',
            // timeout: 1000,
            headers: {'X-Custom-Header': 'foobat'},
        });
    }

    async getUserList() {
        try {
            // console.log('getUserList');
            const result = await this.axiosInstance.get('/users/search?q=John');
            // console.log('result', result);
            // console.log('result status', result.status, result.statusText);
            if (result.status !== 200) {
                throw new Error(`${result.status} ${result.statusText}`);
            }
            // console.log('result.data', result.data);
            return result.data;
        } catch (err) {
            console.error('err', err);
            throw err;
        }
    }

    async getUserDetail(userId) {
        try {
            // console.log('getUserDetail');
            const result = await this.axiosInstance.get('/users/' + userId);
            // console.log('result', result);
            // console.log('result status', result.status, result.statusText);
            if (result.status !== 200) {
                throw new Error(`${result.status} ${result.statusText}`);
            }
            // console.log('result.data', result.data);
            return result.data;
        } catch (err) {
            console.error('err', err);
            throw err;
        }
    }
}

export default new UserService();
