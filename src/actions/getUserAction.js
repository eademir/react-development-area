import axios from 'axios';

const getUserAction = () => {
    return axios.get('http://localhost:3000/data/data.json')

    // return new Promise((resolve, reject) => {
    //     if (true) {
    //         resolve("res")
    //     } else {
    //         reject("err")
    //     }
    // })
};
export default getUserAction;