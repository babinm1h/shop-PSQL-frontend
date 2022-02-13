import { observer } from 'mobx-react-lite';
import React from 'react';
import { StoreContext } from '../../..';
import "./TypeBar.scss"


const Typebar = observer(() => {
    const { store } = React.useContext(StoreContext)


    return (
        <ul className="shop__types">
            {store.deviceStore.types.map(t => <li key={t.id}
                onClick={() => store.deviceStore.setSelectedType(t)}
                className={store.deviceStore.selectedType.id === t.id ? "shop__types__item shop__types__item_active" : "shop__types__item"}>
                {t.name}
            </li>)}
        </ul>
    );
})

export default Typebar;