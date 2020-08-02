import {EDIT_PROFILE, ADD_EXPERIENCE, ADD_EDUCATION} from './Types'

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

export const addEducation =(education)=>{
    return {
        type: ADD_EDUCATION, payload: education
    }
}