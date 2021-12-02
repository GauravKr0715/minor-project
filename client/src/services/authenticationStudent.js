import { environment } from '../environments/environment';
import axios from 'axios';

const base_url = 'api/v1';

const StudentSessionValidateURL = '/student/validateSession';
const StudentLoginURL = '/student/login';

export const validateStudentSession = () => {
  return axios.get(environment.apiUrl + base_url + StudentSessionValidateURL, {
    withCredentials: true
  });
}

export const loginStudent = (userID, password) => {
  return axios.post(environment.apiUrl + base_url + StudentLoginURL, { roll_no: userID, password: password }, {
    withCredentials: true
  })
}