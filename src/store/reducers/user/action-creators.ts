import { IData, IUser } from "../../../models/IUsers";
import { SetUserAction, UserActionEnum } from "./types";

export const UserActionCreators = {
    setUser:(user:IUser): SetUserAction => ({type:UserActionEnum.SET_USER, payload:user})
}