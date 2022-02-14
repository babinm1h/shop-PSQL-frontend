import { $authHost, $host } from ".";
import { IBrand, IDevice, IType } from "../types/dbModels";

interface IFetchDevices {
    rows: IDevice[]
    count: number
}


export class DeviceApi {

    // types
    static async fetchTypes(): Promise<IType[]> {
        const res = await $host.get<IType[]>("api/type")
        return res.data
    }

    static async createType(name: string): Promise<IType> {
        const res = await $authHost.post<IType>("api/type", { name })
        console.log(res);
        return res.data
    }

    // brands
    static async fetchBrands(): Promise<IBrand[]> {
        const res = await $host.get<IBrand[]>("api/brand")
        return res.data
    }

    static async createBrand(name: string): Promise<IBrand> {
        const res = await $authHost.post<IBrand>("api/brand", { name })
        return res.data
    }


    // devices
    static async fetchDevices(typeId?: number, brandId?: number, page?: number, limit = 3): Promise<IFetchDevices> {
        const res = await $host.get<IFetchDevices>(
            `api/device`, { params: { typeId, brandId, page, limit } }
        )
        return res.data
    }

    static async fetchOneDevice(id: string): Promise<IDevice> {
        const res = await $host.get<IDevice>(`api/device/${id}`)
        return res.data
    }


    static async createDevice(device: FormData): Promise<IDevice> {
        const res = await $authHost.post<IDevice>(`api/device/`, device)
        console.log(res);

        return res.data
    }
}