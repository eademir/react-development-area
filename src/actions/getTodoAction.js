import axios from 'axios';

const getTodoAction = () => {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    return axios.get(url)

    // return new Promise((resolve, reject) => {
    //     if (true) {
    //         resolve("res")
    //     } else {
    //         reject("err")
    //     }
    // })
};
export default getTodoAction;