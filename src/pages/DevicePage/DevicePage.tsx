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

    return (
        <div className="device-page">
            <h1 className="device-page__name">{store.deviceStore.devicePage.name}</h1>
            <div className="device-page__content">
                <div className="device-page__img">
                    <img src={REACT_APP_API_URL + store.deviceStore.devicePage.img} alt="device" />
                </div>
                <div className="device-page__info">
                    <div className="device-page__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ex ab, ad totam quia labore quaerat, autem voluptas mollitia numquam tempore animi id ut architecto placeat, ea cum. Quaerat, rem.
                    </div>
                    <div className="device-page__rating">
                        Rating: {store.deviceStore.devicePage.rating}</div>
                    <div className="device-page__buy">
                        <div className="device-page__price">
                            {store.deviceStore.devicePage.price} ₽
                        </div>
                        <button className="btn">Купить</button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default DevicePage;