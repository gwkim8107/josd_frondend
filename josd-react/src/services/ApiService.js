import axios from 'axios'

const USER_API_BASE_URL = 'http://localhost:8080/'

class ApiService {
    
    chkUser(user_id, user_pw){
        console.log('starts check a user authority');
        // return axios.get(USER_API_BASE_URL + '/' + userId);
        return axios.post(USER_API_BASE_URL+"chkauth?user_id="+user_id+"&user_pw="+user_pw);
    }

    addUser(user) {
        console.log('starts add a user service');
        // console.log(user);
        return axios.post(USER_API_BASE_URL+'registerUser', user);
    }
}

export default new ApiService();