import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import Basket from "./pages/Basket/Basket";
import DevicePage from "./pages/DevicePage/DevicePage";
import Shop from "./pages/Shop/Shop";



export enum AllRoutes {
    ADMIN = "/admin",
    DEVICE = "/device/:id",
    SHOP = "/",
    LOGIN = "/login",
    REGISTR = "/registration",
    BASKET = "basket",
    MAIN = "*"
}



export const authRoutes = [
    { path: AllRoutes.ADMIN, element: <Admin /> },
    { path: AllRoutes.BASKET, element: <Basket /> },
]

export const publicRoutes = [
    { path: AllRoutes.SHOP, element: <Shop /> },
    { path: AllRoutes.LOGIN, element: <Auth /> },
    { path: AllRoutes.REGISTR, element: <Auth /> },
    { path: AllRoutes.DEVICE, element: <DevicePage /> },
    { path: AllRoutes.MAIN, element: <Shop /> }
]