import { observer } from 'mobx-react-lite';
import React from 'react';
import { StoreContext } from '../../..';
import { IBrand } from '../../../types/dbModels';
import "./Brandbar.scss"

const Brandbar = observer(() => {
    const { store } = React.useContext(StoreContext)

    return (
        <ul className="shop__brands">

            <li onClick={() => store.deviceStore.setSelectedBrand({} as IBrand)}
                className={!store.deviceStore.selectedBrand.id
                    ? "shop__brands__item shop__brands__item_active" : "shop__brands__item"}>
                Все бренды
            </li>
            {store.deviceStore.brands.map(b => <li key={b.id}
                onClick={() => store.deviceStore.setSelectedBrand(b)}
                className={store.deviceStore.selectedBrand.id === b.id
                    ? "shop__brands__item shop__brands__item_active" : "shop__brands__item"}>
                {b.name}
            </li>)}
        </ul>
    );
});

export default Brandbar;