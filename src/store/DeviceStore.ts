import { makeAutoObservable } from "mobx"
import { DeviceApi } from "../api/deviceApi"
import { IBrand, IDevice, IType } from "../types/dbModels"


export class DeviceStore {

    _devices: IDevice[]
    _brands: IBrand[]
    _types: IType[]
    _selectedType: IType
    _selectedBrand: IBrand
    _devicePage: IDevice
    _loading: boolean

    constructor() {
        this._devices = []
        this._brands = []
        this._types = []
        this._selectedType = {} as IType
        this._selectedBrand = {} as IBrand
        this._devicePage = {} as IDevice
        this._loading = true

        makeAutoObservable(this)
    }


    setDevices(payload: IDevice[]) {
        this._devices = payload
    }
    setBrands(payload: IBrand[]) {
        this._brands = payload
    }
    setTypes(payload: IType[]) {
        this._types = payload
    }
    setSelectedType(payload: IType) {
        this._selectedType = payload
    }
    setSelectedBrand(payload: IBrand) {
        this._selectedBrand = payload
    }
    setDevicePage(payload: IDevice) {
        this._devicePage = payload
    }
    setLoading(bool: boolean) {
        this._loading = bool
    }


    get types() {
        return this._types
    }
    get devices() {
        return this._devices
    }
    get brands() {
        return this._brands
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get devicePage() {
        return this._devicePage
    }
    get loading() {
        return this._loading
    }

    async fetchTypes() {
        try {
            const data = await DeviceApi.fetchTypes()
            this.setTypes(data)
        } catch (err) {
            console.log(err);
        }
    }

    async fetchBrands() {
        try {
            const data = await DeviceApi.fetchBrands()
            this.setBrands(data)
        } catch (err) {
            console.log(err);
        }
    }


    async fetchDevices() {
        try {
            const data = await DeviceApi.fetchDevices()
            this.setDevices(data.rows)
        } catch (err) {
            console.log(err);
        }
    }

    async fetchDevicePage(id: string) {
        try {
            const data = await DeviceApi.fetchOneDevice(id)
            this.setDevicePage(data)
        } catch (err) {
            console.log(err);
        }
    }

    async createType(name: string) {
        await DeviceApi.createType(name)
    }

    async createBrand(name: string) {
        await DeviceApi.createBrand(name)
    }

}