import { ActionTypes } from '../constants';

export const AddUsers=(users)=>{
    return {
        type:ActionTypes.ADD_DATA,
        payload:users,
    };
}
export const DisplayUsers = (user) => { 
    return {
        type: ActionTypes.DISPLAY_DATA,
        payload: user,
    };
}