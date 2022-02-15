import { observer } from 'mobx-react-lite';
import React from 'react';
import { StoreContext } from '../..';
import Loader from '../../components/Loader/Loader';
import "./Basket.scss"
import BasketItem from '../../components/Basket/BasketItem/BasketItem';

const Basket = observer(() => {
    const { store } = React.useContext(StoreContext)

    React.useEffect(() => {
        store.cartStore.getCartItems()
    }, [])

    if (!store.cartStore.items.length) {
        return <h2 className="page_empty">Козина пуста</h2>
    }

    if (store.cartStore.loading) {
        return <div className="loader"><Loader /></div>
    }

    return (
        <div className="basket">
            <h1 className="basket__title">Ваша корзина</h1>
            <div className="basket__row">

                <div className="basket__column1">
                    <ul className="basket__list">
                        {store.cartStore.items.map(i => i.device).map(
                            item => <BasketItem item={item} key={item.id} />
                        )}
                    </ul>
                </div>

                <div className="basket__column2">
                    <div className="basket__total">
                        <div className="basket__total__price">
                            Итоговая цена: <span>{store.cartStore.totalPrice} ₽</span>
                        </div>
                        <div className="basket__total__count">
                            Количество: <span>{store.cartStore.totalCount} шт.</span>
                        </div>
                        <button className="btn">Оформить заказ</button>
                    </div>
                </div>
            </div>

        </div>
    );
});

export default Basket;