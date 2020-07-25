import {ADD_PROFILE} from './Types'

export const addProfile =(edit)=>{
    return {
        type: ADD_PROFILE, payload: edit
    }
}