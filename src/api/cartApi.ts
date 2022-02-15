import { $authHost } from ".";
import { ICartDevice, IDevice } from "../types/dbModels";




export class CartApi {

    static async addToCart(deviceId: number | string): Promise<ICartDevice> {
        const res = await $authHost.post<ICartDevice>(`api/cart/${deviceId}`)
        return res.data
    }

    static async getItems(): Promise<ICartDevice[]> {
        const res = await $authHost.get<ICartDevice[]>(`api/cart/`)
        return res.data
    }

    static async removeItem(deviceId: number): Promise<IDevice> {
        const res = await $authHost.delete<IDevice>(`api/cart/${deviceId}`)
        return res.data
    }

}