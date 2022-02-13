import { makeAutoObservable } from "mobx"
import { IUser } from "../types/dbModels"



export class UserStore {
    _isAuth: boolean
    _user: IUser

    constructor() {
        this._isAuth = true
        this._user = {} as IUser
        makeAutoObservable(this)
    }


    setAuth(bool: boolean) {
        this._isAuth = bool
    }
    setUser(user: IUser) {
        this._user = user
    }

    get user() {
        return this._user
    }
    get isAuth() {
        return this._isAuth
    }

}