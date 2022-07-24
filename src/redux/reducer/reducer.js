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

const initalState2 = {
    user:[]
};
export const ShowUser = (state = initalState2, action) => {
    console.log(state.user);
    switch (action.type) {
        case ActionTypes.DISPLAY_DATA:
            return {
                ...state,
                user: [action.payload]
            }
        default: return state;
    }
}