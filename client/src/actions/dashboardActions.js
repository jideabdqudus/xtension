import {EDIT_PROFILE} from './Types'

export const editProfile =(edit)=>{
    return {
        type: EDIT_PROFILE, payload: edit
    }
}