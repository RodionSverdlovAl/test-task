import { AuthActionEnum, SetAuthAction } from "./types";

export const AuthActionCreators = {
    setIsAuth:(auth:boolean): SetAuthAction => ({type:AuthActionEnum.SET_AUTH, payload:auth})
}