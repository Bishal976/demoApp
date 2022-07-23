import { ActionTypes } from '../constants';

export const AddUsers=(users)=>{
    return {
        type:ActionTypes.ADD_DATA,
        payload:users,
    };
}