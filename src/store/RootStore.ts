import { DeviceStore } from "./DeviceStore"
import { UserStore } from "./UserStore"


export class RootStore {
    userStore: UserStore
    deviceStore: DeviceStore

    constructor() {
        this.deviceStore = new DeviceStore()
        this.userStore = new UserStore()
    }
}