import { observer } from 'mobx-react-lite';
import React from 'react';
import { useParams } from 'react-router';
import { StoreContext } from '../..';
import { REACT_APP_API_URL } from '../../api';
import Loader from '../../components/Loader/Loader';
import "./DevicePage.scss"

const DevicePage = observer(() => {
    const { store } = React.useContext(StoreContext)
    const { id } = useParams()

    React.useEffect(() => {
        if (id) {
            store.deviceStore.fetchDevicePage(id)
        }
        store.deviceStore.setLoading(false)
    }, [])

    if (store.deviceStore.loading) {
        return <div className="loading"><Loader /></div>
    }


    const handleAddToCart = () => {
        store.cartStore.addToCart(id!)
    }

    return (
        <div className="device-page">
            <h1 className="device-page__name">{store.deviceStore.devicePage.name}</h1>
            <div className="device-page__content">
                <div className="device-page__img">
                    <img src={REACT_APP_API_URL + store.deviceStore.devicePage.img} alt="device" />
                </div>
                <div className="device-page__info">
                    <div className="device-page__rating">
                        Rating: {store.deviceStore.devicePage.rating}</div>
                    <div className="device-page__buy">
                        <div className="device-page__price">
                            <span>Цена:</span> {store.deviceStore.devicePage.price} ₽
                        </div>
                        {!store.userStore.isAuth
                            ? <button disabled className="btn">Зарегестрируйтесь чтобы купить</button>
                            : store.cartStore.items.map(i => i.deviceId).includes(Number(id!))
                                ? <button className="btn btn_outline">
                                    В корзине
                                </button>
                                : <button className="btn" onClick={handleAddToCart}
                                    disabled={store.cartStore.isAdding}>
                                    В корзину
                                </button>}
                    </div>
                </div>
            </div>

            <div className="device-page__charact device__charact">
                <h2>Характеристики {store.deviceStore.devicePage.name}</h2>
                {store.deviceStore.devicePage.info && store.deviceStore.devicePage.info.map(i =>
                    <div key={i.title} className="device__charact__item">
                        <div className="device__charact__title">{i.title}</div>
                        <div className="device__charact__value">{i.description}</div>
                    </div>
                )}
            </div>
        </div>
    );
});

export default DevicePage;