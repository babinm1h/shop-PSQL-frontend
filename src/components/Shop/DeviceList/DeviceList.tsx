import { observer } from 'mobx-react-lite';
import React from 'react';
import { StoreContext } from '../../..';
import DeviceItem from './DeviceItem/DeviceItem';
import "./DeviceList.scss"

const DeviceList = observer(() => {
    const { store } = React.useContext(StoreContext)

    if (store.deviceStore.totalCount === 0) {
        return <h2 className="page_empty">Список пуст</h2>
    }

    return (
        <ul className="shop__devices">
            {store.deviceStore.devices.map(d => <DeviceItem device={d} key={d.id} />)}
        </ul>
    );
})
export default DeviceList;