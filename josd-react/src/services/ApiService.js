import axios from 'axios'
// dev
// const USER_API_BASE_URL = 'http://localhost:8090/'
// prod
const USER_API_BASE_URL = 'https://josdapi.azurewebsites.net/'

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

    updateChant(chantData){
        console.log('starts to save chanting data');
        return axios.post(USER_API_BASE_URL+'chant', chantData);
    }

    updateReading(readingData){
        console.log('starts to save reading data');
        return axios.post(USER_API_BASE_URL+'reading', readingData);
    }

    updateHearing(hearingData){
        console.log('starts to save hearing data');
        return axios.post(USER_API_BASE_URL+'reading', hearingData);
    }
    
    updateService(serviceData){
        console.log('starts to save service data');
        return axios.post(USER_API_BASE_URL+'service', serviceData);
    }

    updateMMservice(mmServiceData){
        console.log('starts to save much more service data');
        return axios.post(USER_API_BASE_URL+'service', mmServiceData);
    }

    retriveChartService(user_id){
        console.log('starts to load chart data');
        return axios.post(USER_API_BASE_URL+'chart?user_id='+user_id);
    }

    getUserPoint(user_id, rec_dt){
        console.log('starts to load user point');
        return axios.post(USER_API_BASE_URL+'point?user_id='+user_id+"&rec_dt="+rec_dt);
    }
}

export default new ApiService();