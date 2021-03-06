interface IAuth{
    username: string;
    password: string;
}
export interface IData{
    photo: string;
    name: string;
    surname: string;
    fathername: string;
    state: string;
    city: string;
    phone: string;
}

export interface IUser {
    id: number;
    auth: IAuth;
    data: IData;
}