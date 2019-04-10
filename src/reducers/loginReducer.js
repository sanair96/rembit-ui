import { stat } from "fs";

const intialState = {
    loginStatus:false
}

export default function(state=intialState,action){
    switch(action.type){
        case "LOGIN":
            return {...state,loginStatus:state.loginStatus?false:true};
        case "FIELD_UPDATE":
            return {...state,[action.fieldName]:action.value}
        case "LOGOUT":
            return intialState;
        
        default:
            return state;
    }
}