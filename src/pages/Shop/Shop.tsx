import { observer } from 'mobx-react-lite';
import React from 'react';
import { StoreContext } from '../..';
import Brandbar from '../../components/Shop/Brandbar/Brandbar';
import DeviceList from '../../components/Shop/DeviceList/DeviceList';
import Typebar from '../../components/Shop/Typebar/Typebar';
import "./Shop.scss"

const Shop = observer(() => {
    const { store } = React.useContext(StoreContext)

    React.useEffect(() => {
        store.deviceStore.fetchBrands()
        store.deviceStore.fetchDevices(store.deviceStore.selectedType.id, store.deviceStore.selectedBrand.id,)
        store.deviceStore.fetchTypes()
    }, [store.deviceStore.selectedType.id, store.deviceStore.selectedBrand.id])


    return (
        <div className="shop">
            <div className="shop__column_1">
                <Typebar />
            </div>
            <div className="shop__column_2">
                <Brandbar />
                <DeviceList />
            </div>
        </div>
    );
});

export default Shop;