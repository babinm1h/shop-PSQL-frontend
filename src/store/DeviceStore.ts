import { makeAutoObservable } from "mobx"
import { IBrand, IDevice, IType } from "../types/dbModels"


export class DeviceStore {

    _devices: IDevice[]
    _brands: IBrand[]
    _types: IType[]
    _selectedType: IType
    _selectedBrand: IBrand

    constructor() {
        this._devices = [
            { id: 1, name: "pecca 7623", price: 77000, rating: 4, img: "https://i.pinimg.com/originals/d8/c1/31/d8c131ada2199d6dc691a7eff893b103.png" },
            { id: 2, name: "pecca 7623", price: 77000, rating: 4, img: "https://i.pinimg.com/originals/d8/c1/31/d8c131ada2199d6dc691a7eff893b103.png" },
            { id: 3, name: "pecca 7623", price: 77000, rating: 4, img: "https://i.pinimg.com/originals/d8/c1/31/d8c131ada2199d6dc691a7eff893b103.png" },
            { id: 4, name: "pecca 7623", price: 77000, rating: 4, img: "https://i.pinimg.com/originals/d8/c1/31/d8c131ada2199d6dc691a7eff893b103.png" },
            { id: 5, name: "pecca 7623", price: 77000, rating: 4, img: "https://i.pinimg.com/originals/d8/c1/31/d8c131ada2199d6dc691a7eff893b103.png" },
        ]
        this._brands = [
            { id: 1, name: "intel" },
            { id: 2, name: "Ryzen" },
        ]
        this._types = [
            { id: 1, name: "Computer" },
            { id: 2, name: "Smartphone" },
        ]
        this._selectedType = {} as IType
        this._selectedBrand = {} as IBrand

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

}