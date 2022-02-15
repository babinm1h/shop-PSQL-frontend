import { makeAutoObservable } from "mobx"
import { CartApi } from "../api/cartApi"
import { ICartDevice, IDevice } from "../types/dbModels"

const getTotalPrice = (arr: IDevice[]) => arr.reduce((prev, obj) => obj.price + prev, 0)

export class CartStore {
    _items: ICartDevice[]
    _totalPrice: number
    _totalCount: number
    _loading: boolean

    _isRemoving: boolean
    _isAdding: boolean


    constructor() {
        this._items = []
        this._totalPrice = 0
        this._totalCount = 0
        this._loading = true

        this._isRemoving = false
        this._isAdding = false

        makeAutoObservable(this)
    }


    setItems(items: ICartDevice[]) {
        this._items = items
    }
    setTotalPrice(num: number) {
        this._totalPrice = num
    }
    setTotalCount(num: number) {
        this._totalCount = num
    }
    setLoading(bool: boolean) {
        this._loading = bool
    }
    setAdding(bool: boolean) {
        this._isAdding = bool
    }
    setRemoving(bool: boolean) {
        this._isRemoving = bool
    }

    get totalPrice() {
        return this._totalPrice
    }
    get items() {
        return this._items
    }
    get totalCount() {
        return this._totalCount
    }
    get loading() {
        return this._loading
    }
    get isAdding() {
        return this._isAdding
    }
    get isRemoving() {
        return this._isRemoving
    }

    async getCartItems() {
        const data = await CartApi.getItems()
        this.setItems(data)

        const totalPrice = getTotalPrice(data.map(i => i.device))
        this.setTotalPrice(totalPrice)
        this.setTotalCount(data.length)
        this.setLoading(false)
    }

    async addToCart(deviceId: number | string) {
        this.setAdding(true)
        const data = await CartApi.addToCart(deviceId)
        this.setItems([...this.items, data])
        this.setAdding(false)
    }

    async removeItem(deviceId: number) {
        this.setRemoving(true)
        const data = await CartApi.removeItem(deviceId)
        this.setItems(this.items.filter(i => i.deviceId !== deviceId))

        this.setTotalCount(this.totalCount - 1)
        this.setTotalPrice(this.totalPrice - data.price)
        this.setRemoving(false)
    }
}