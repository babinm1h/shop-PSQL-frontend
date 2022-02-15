
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

export interface IDeviceInfo {
    title: string
    description: string,
    number: number
}

export interface IDevice {
    id: number
    name: string
    price: number
    img: string
    rating: number
    info?: IDeviceInfo[]
}


export interface ICartDevice {
    device: IDevice
    id: number
    deviceId: number
}