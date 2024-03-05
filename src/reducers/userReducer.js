import { USER_REGISTRATION,REST_USER_REGISTRATION } from "../constants/userConstant";
const initialState = { 
    userData:null
  };
export const userReducer=(state=initialState,action)=>{
switch(action.type){
    case USER_REGISTRATION:
        return{
            
           ...state,userData:action.payload
        }
    case REST_USER_REGISTRATION:
        return{
            
            ...state,userData:null
         }


        default:
            return state; 
     
}
}