import { CartStore } from "./CartStore"
import { DeviceStore } from "./DeviceStore"
import { UserStore } from "./UserStore"


export class RootStore {
    userStore: UserStore
    deviceStore: DeviceStore
    cartStore: CartStore

    constructor() {
        this.deviceStore = new DeviceStore()
        this.userStore = new UserStore()
        this.cartStore = new CartStore()
    }
}