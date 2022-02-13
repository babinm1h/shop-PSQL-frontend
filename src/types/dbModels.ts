
export interface IUser {
    id: number
    email: string
    role: "USER" | "ADMIN"
}

export interface IType {
    id: number
    name: string
}

export interface IBrand {
    id: number
    name: string
}

export interface IDevice {
    id: number
    name: string
    price: number
    img: string
    rating: number
}