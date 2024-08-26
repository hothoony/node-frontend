// import userService from "./services/user-service1-class";
import userService from "./services/user-service2-function";

const MyApp = () => {

    const userAdd = async () => {
        console.log('userAdd');
        const data = {
            "firstName": "Muhammad",
            "lastName": "Ovi",
            "age": 250
        };
        const result = await userService.addUser(data);
        console.log('result', result);
    }

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

    const userModify = async () => {
        console.log('userModify');
        const data = {
            "firstName": "Muhammad",
            "lastName": "Ovi",
            "age": 250
        };
        const result = await userService.modifyUser(3, data);
        console.log('result', result);
    }

    const userDelete = async () => {
        console.log('userDelete');
        const data = {
            "firstName": "Muhammad",
            "lastName": "Ovi",
            "age": 250
        };
        const result = await userService.deleteUser(3, data);
        console.log('result', result);
    }
    
    return (
        <div>
            <div>
                MyApp
            </div>
            <div>
                <button onClick={userAdd}>userAdd</button>
            </div>
            <div>
                <button onClick={userList}>userList</button>
            </div>
            <div>
                <button onClick={userDetail}>userDetail</button>
            </div>
            <div>
                <button onClick={userModify}>userModify</button>
            </div>
            <div>
                <button onClick={userDelete}>userDelete</button>
            </div>
        </div>
    );
}

export default MyApp;
