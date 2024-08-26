import axios from "axios";
// import userService from "./user-service1";
import userService from "./user-service2";

const MyApp = () => {

    const axiosInstance = axios.create({
        baseURL: 'https://dummyjson.com',
        // timeout: 1000,
        // headers: {'X-Custom-Header': 'foobat'},
    });

    const getUserList2 = async () => {
        console.log('getUserList2');
        const result = await userService.getUserList();
        console.log('result', result);
    }
    
    return (
        <div>
            <div>
                MyApp
            </div>
            <div>
                <button onClick={getUserList2}>getUserList</button>
            </div>
        </div>
    );
}

export default MyApp;
