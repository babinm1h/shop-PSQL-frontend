import { observer } from 'mobx-react-lite';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../../..';
import { REACT_APP_API_URL } from '../../../../api';
import { AllRoutes } from '../../../../routes';
import { IDevice } from '../../../../types/dbModels';

interface IDeviceItemProps {
    device: IDevice
}

const DeviceItem: React.FC<IDeviceItemProps> = observer(({ device }) => {
    const { store } = React.useContext(StoreContext)

    const handleAddToCart = () => {
        store.cartStore.addToCart(device.id)
    }

    return (
        <li className="shop__devices__item shop-device">
            <NavLink to={AllRoutes.DEVICE + `/${device.id}`}>
                <div className="shop-device__img">
                    <img src={REACT_APP_API_URL + device.img} alt="img" />
                </div>
            </NavLink>
            <div className="shop-device__info">
                <NavLink to={AllRoutes.DEVICE + `/${device.id}`}>
                    <h1 className="shop-device__name">{device.name}</h1>
                </NavLink>
                <div className="shop-device__rating">Rating: {device.rating}</div>
            </div>
            <div className="shop-device__buy">
                <div className="shop-device__price">{device.price} ₽</div>
                {store.userStore.isAuth
                    ? store.cartStore.items.map(i => i.deviceId).includes(device.id)
                        ? <button className="btn btn_outline">
                            В корзине
                        </button>
                        : <button className="btn" onClick={handleAddToCart}
                            disabled={store.cartStore.isAdding}>
                            В корзину
                        </button>
                    : <button disabled className="btn">Зарегестрируйтесь чтобы купить</button>}
            </div>
        </li>
    );
});

export default DeviceItem;