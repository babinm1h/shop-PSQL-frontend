import { observer } from 'mobx-react-lite';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../..';
import { REACT_APP_API_URL } from '../../../api';
import { AllRoutes } from '../../../routes';
import "./DeviceList.scss"

const DeviceList = observer(() => {
    const { store } = React.useContext(StoreContext)

    return (
        <ul className="shop__devices">
            {store.deviceStore.devices.map(d => <li className="shop__devices__item shop-device"
                key={d.id}>
                <NavLink to={AllRoutes.DEVICE + `/${d.id}`}>
                    <img src={REACT_APP_API_URL+d.img} alt="img" className="shop-device__img" />
                </NavLink>
                <div className="shop-device__info">
                    <h1 className="shop-device__name">{d.name}</h1>
                    <div className="shop-device__rating">Rating: {d.rating}</div>
                </div>
                <div className="shop-device__buy">
                    <div className="shop-device__price">{d.price} ₽</div>
                    <button className="btn">Купить</button>
                </div>
            </li>)}
        </ul>
    );
})
export default DeviceList;