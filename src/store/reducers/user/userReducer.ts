import { UserAction, UserActionEnum, UserState } from "./types"

const initialState:UserState = {
    user: {
        photo:'',
        name:'',
        surname:'',
        fathername:'',
        state: '',
        city:'',
        phone:'',
    },
}

export const userReducer = (state = initialState, action:UserAction):UserState =>{
    switch(action.type){
        case UserActionEnum.SET_USER: 
            return {...state, user:action.payload}
        default:
            return state
    }
}