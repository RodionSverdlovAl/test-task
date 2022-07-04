import { IData } from "../../../models/IUsers";

export interface UserState{
    user: IData
}

export enum UserActionEnum{
    SET_USER = "SET_USER",
}

export interface SetUserAction {
    type: UserActionEnum.SET_USER;
    payload: IData;
}

export type UserAction = SetUserAction;