import { makeAutoObservable } from "mobx"
import { UserApi } from "../api/userApi"
import { IUser } from "../types/dbModels"



export class UserStore {
    _isAuth: boolean
    _user: IUser
    _isLoading: boolean
    _registrerror: string
    _loginError: string

    constructor() {
        this._isAuth = false
        this._user = {} as IUser
        this._isLoading = true
        this._registrerror = ""
        this._loginError = ""
        makeAutoObservable(this)
    }


    setAuth(bool: boolean) {
        this._isAuth = bool
    }
    setUser(user: IUser) {
        this._user = user
    }
    setLoading(bool: boolean) {
        this._isLoading = bool
    }
    setRegistrError(err: string) {
        this._registrerror = err
    }
    setLoginError(err: string) {
        this._loginError = err
    }

    get user() {
        return this._user
    }
    get isAuth() {
        return this._isAuth
    }
    get isLoading() {
        return this._isLoading
    }
    get registrerror() {
        return this._registrerror
    }
    get loginError() {
        return this._loginError
    }

    async registr(email: string, password: string) {
        try {
            const data = await UserApi.registration(email, password)
            this.setAuth(true)
            this.setUser(data)
        } catch (err) {
            this.setRegistrError("Такой email уже используется")
        }
    }

    async login(email: string, password: string) {
        try {
            const data = await UserApi.login(email, password)
            this.setAuth(true)
            this.setUser(data)
        } catch (err) {
            this.setLoginError("Неправильный email или пароль")
        }
    }

    async checkAuth() {
        try {
            const data = await UserApi.check()
            this.setUser(data)
            this.setAuth(true)
        } catch (err) {
        }
    }


    logout() {
        this.setAuth(false)
        this.setUser({} as IUser)
        localStorage.removeItem("token")
    }

}