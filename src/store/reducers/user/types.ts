import {IUser } from "../../../models/IUsers";

export interface UserState{
    user: IUser
}

export enum UserActionEnum{
    SET_USER = "SET_USER",
}

export interface SetUserAction {
    type: UserActionEnum.SET_USER;
    payload: IUser;
}

export type UserAction = SetUserAction;