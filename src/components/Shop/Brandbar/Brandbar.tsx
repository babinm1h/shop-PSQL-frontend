import { observer } from 'mobx-react-lite';
import React from 'react';
import { StoreContext } from '../../..';
import "./Brandbar.scss"

const Brandbar = observer(() => {
    const { store } = React.useContext(StoreContext)

    return (
        <ul className="shop__brands">
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