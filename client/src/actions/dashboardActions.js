import {EDIT_PROFILE, ADD_EXPERIENCE} from './Types'

export const editProfile =(edit)=>{
    return {
        type: EDIT_PROFILE, payload: edit
    }
}

export const addExperience =(experience)=>{
    return {
        type: ADD_EXPERIENCE, payload: experience
    }
}