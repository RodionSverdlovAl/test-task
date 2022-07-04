import { IData } from "../../../models/IUsers";
import { SetUserAction, UserActionEnum } from "./types";

export const UserActionCreators = {
    setUser:(user:IData): SetUserAction => ({type:UserActionEnum.SET_USER, payload:user})
}