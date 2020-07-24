import {ADD_PROFILE} from './Types'

export const addProfile =(form)=>{
    return {
        type: ADD_PROFILE, payload: form
    }
}