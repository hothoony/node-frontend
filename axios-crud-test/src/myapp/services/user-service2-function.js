import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    // timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'X-Custom-Header': 'foobat',
    },
});

const addUser = async (data) => {
    try {
        // console.log('addUser');
        const result = await axiosInstance.post('/users/add', data);
        // console.log('result', result);
        // console.log('result status', result.status, result.statusText);
        if (result.status !== 200 && result.status !== 201) {
            throw new Error(`${result.status} ${result.statusText}`);
        }
        // console.log('result.data', result.data);
        return result.data;
    } catch (err) {
        console.error('err', err);
        throw err;
    }
};

const getUserList = async () => {
    try {
        // console.log('getUserList');
        const queryParams = {q: 'John'};
        // const result = await axiosInstance.get('/users/search?q=John');
        const result = await axiosInstance.get('/users/search', {params: queryParams});
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

const getUserDetail = async (userId) => {
    try {
        // console.log('getUserDetail');
        const result = await axiosInstance.get(`/users/${userId}`);
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

const modifyUser = async (userId, data) => {
    try {
        // console.log('modifyUser');
        const result = await axiosInstance.put(`/users/${userId}`, data);
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

const deleteUser = async (userId) => {
    try {
        // console.log('deleteUser');
        const result = await axiosInstance.delete(`/users/${userId}`);
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

const userService = {
    addUser,
    getUserList,
    getUserDetail,
    modifyUser,
    deleteUser,
}

export default userService;
