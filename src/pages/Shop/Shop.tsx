import { observer } from 'mobx-react-lite';
import React from 'react';
import { StoreContext } from '../..';
import Pagination from '../../components/Pagination/Pagination';
import Brandbar from '../../components/Shop/Brandbar/Brandbar';
import DeviceList from '../../components/Shop/DeviceList/DeviceList';
import Typebar from '../../components/Shop/Typebar/Typebar';
import "./Shop.scss"

const Shop = observer(() => {
    const { store } = React.useContext(StoreContext)
    const deviceStore = store.deviceStore

    React.useEffect(() => {
        deviceStore.fetchBrands()
        deviceStore.fetchDevices()
        deviceStore.fetchTypes()
        store.cartStore.getCartItems()
    }, [])


    React.useEffect(() => {
        store.deviceStore.fetchDevices(
            deviceStore.selectedType.id, deviceStore.selectedBrand.id, deviceStore.page
        )
    }, [deviceStore.selectedBrand, deviceStore.selectedType, deviceStore.page])


    return (<>
        <div className="shop">
            <div className="shop__column_1">
                <Typebar />
            </div>
            <div className="shop__column_2">
                <Brandbar />
                <DeviceList />
                <Pagination />
            </div>
        </div>
    </>
    );
});

export default Shop;