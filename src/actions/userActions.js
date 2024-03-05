import axios from 'axios'
import { USER_REGISTRATION,REST_USER_REGISTRATION } from '../constants/userConstant';
export const userRegister=(user)=>async(dispatch)=>{
     const{data}=await axios.post('http://localhost:8080/taskUser/register',user)
     dispatch({
        type:USER_REGISTRATION,
        payload:data
     })
    // .then(response => {
    //     dispatch({
    //         type: USER_REGISTRATION,
    //         payload:response. data
    //     })
    // })
    // .catch(error => {
    //   console.error(error);
    // });
   
}
export const clearuserRegister=()=>async(dispatch)=>{
    await dispatch({
       type:REST_USER_REGISTRATION,
       payload:null
    })
   // .then(response => {
   //     dispatch({
   //         type: USER_REGISTRATION,
   //         payload:response. data
   //     })
   // })
   // .catch(error => {
   //   console.error(error);
   // });
  
}