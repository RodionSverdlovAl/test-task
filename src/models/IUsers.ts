interface IAuth{
    username: string;
    password: string;
}
interface IData{
    photo: string;
    name: string;
    surname: string;
    fathername: string;
    state: string;
    city: string;
    phone: string;
}

export interface IUser {
    auth: IAuth;
    data: IData;
}