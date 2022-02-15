import { observer } from 'mobx-react-lite';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../..';
import { REACT_APP_API_URL } from '../../../api';
import { AllRoutes } from '../../../routes';
import { IDevice } from '../../../types/dbModels';


interface IBasketItemProps {
    item: IDevice
}

const BasketItem: React.FC<IBasketItemProps> = observer(({ item }) => {
    const { store } = React.useContext(StoreContext)

    const handleRemoveItem = () => {
        if (window.confirm("Удалить предмет из корзины?")) {
            store.cartStore.removeItem(item.id)
        }
    }

    return (
        <li className="basket__item">
            <NavLink to={AllRoutes.DEVICE + `/${item.id}`}>
                <div className="basket__item__img">
                    <img src={REACT_APP_API_URL + item.img} alt="product" />
                </div>
            </NavLink>
            <div className="basket__item__info">
                <NavLink to={AllRoutes.DEVICE + `/${item.id}`}>
                    <h2 className="basket__item__name">{item.name}</h2>
                </NavLink>
                <div className="basket__item__price">{item.price} ₽</div>
                <button className="btn" onClick={handleRemoveItem}
                    disabled={store.cartStore.isRemoving}>
                    Удалить из корзины
                </button>
            </div>
        </li>
    );
});

export default BasketItem;