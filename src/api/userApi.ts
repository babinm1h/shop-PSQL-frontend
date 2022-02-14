import jwt_decode from "jwt-decode";
import { $authHost, $host } from ".";
import { IUser } from "../types/dbModels";

export interface IUserApiResponse {
    token: string
}


export class UserApi {

    static registration = async (email: string, password: string): Promise<IUser> => {
        const res = await $host.post<IUserApiResponse>(`api/user/registr`, { email, password, role: "ADMIN" })
        localStorage.setItem("token", res.data.token)
        return jwt_decode(res.data.token)
    }

    static login = async (email: string, password: string): Promise<IUser> => {
        const res = await $host.post<IUserApiResponse>(`api/user/login`, { email, password, role: "ADMIN" })
        localStorage.setItem("token", res.data.token)
        return jwt_decode(res.data.token)
    }

    static check = async (): Promise<IUser> => {
        const res = await $authHost.get<IUserApiResponse>(`api/user/auth`)
        localStorage.setItem("token", res.data.token)
        return jwt_decode(res.data.token)
    }

}