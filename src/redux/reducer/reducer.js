import { ActionTypes } from "../constants"

const initalState = {
    users:[]    
};
export const AddReducer=(state=initalState,action)=>{
    switch(action.type){
        case ActionTypes.ADD_DATA:
            return {
            ...state,
            users:[action.payload]
        }
        default:
        return state;
    } 
}