import axios from "axios";
// import userService from "./user-service1-class";
import userService from "./services/user-service2-function";

const MyApp = () => {

    const axiosInstance = axios.create({
        baseURL: 'https://dummyjson.com',
        // timeout: 1000,
        // headers: {'X-Custom-Header': 'foobat'},
    });

    const userList = async () => {
        console.log('userList');
        const result = await userService.getUserList();
        console.log('result', result);
    }
    const userDetail = async () => {
        console.log('userDetail');
        const result = await userService.getUserDetail(3);
        console.log('result', result);
    }
    
    return (
        <div>
            <div>
                MyApp
            </div>
            <div>
                <button onClick={userList}>userList</button>
            </div>
            <div>
                <button onClick={userDetail}>userDetail</button>
            </div>
        </div>
    );
}

export default MyApp;
