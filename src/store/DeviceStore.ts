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

    _page: number
    _totalCount: number
    _limit: number

    constructor() {
        this._devices = []
        this._brands = []
        this._types = []
        this._selectedType = {} as IType
        this._selectedBrand = {} as IBrand
        this._devicePage = {} as IDevice
        this._loading = true

        this._page = 1
        this._totalCount = 0
        this._limit = 3

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
        this.setPage(1)
        this._selectedType = payload
    }
    setSelectedBrand(payload: IBrand) {
        this.setPage(1)
        this._selectedBrand = payload
    }
    setDevicePage(payload: IDevice) {
        this._devicePage = payload
    }
    setLoading(bool: boolean) {
        this._loading = bool
    }
    setPage(page: number) {
        this._page = page
    }
    setTotalCount(num: number) {
        this._totalCount = num
    }
    setLimit(limit: number) {
        this._limit = limit
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
    get page() {
        return this._page
    }
    get totalCount() {
        return this._totalCount
    }
    get limit() {
        return this._limit
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


    async fetchDevices(typeId?: number, brandId?: number, page?: number) {
        try {
            const data = await DeviceApi.fetchDevices(typeId, brandId, page)
            this.setDevices(data.rows)
            this.setTotalCount(data.count)
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

    async createDevice(device: FormData) {
        await DeviceApi.createDevice(device)
    }

}