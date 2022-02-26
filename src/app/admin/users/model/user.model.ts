import { UserDetail } from "./user-detail.model";

export interface User{
    id: number,
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    isActive: boolean,
    userDetail: UserDetail
}