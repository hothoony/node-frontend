import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    // timeout: 1000,
    headers: {'X-Custom-Header': 'foobat'},
});

const UserService = () => {

    const getUserList = async () => {
        try {
            // console.log('getUserList');
            const result = await axiosInstance.get('/users/search?q=John');
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
    };

    return (
        getUserList
    );

}

export default UserService();
