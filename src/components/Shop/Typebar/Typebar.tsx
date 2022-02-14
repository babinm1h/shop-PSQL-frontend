import { observer } from 'mobx-react-lite';
import React from 'react';
import { StoreContext } from '../../..';
import { IType } from '../../../types/dbModels';
import "./TypeBar.scss"


const Typebar = observer(() => {
    const { store } = React.useContext(StoreContext)


    return (
        <ul className="shop__types">

            <li onClick={() => store.deviceStore.setSelectedType({} as IType)}
                className={!store.deviceStore.selectedType.id
                    ? "shop__types__item shop__types__item_active" : "shop__types__item"}>
                Все типы
            </li>

            {store.deviceStore.types.map(t => <li key={t.id}
                onClick={() => store.deviceStore.setSelectedType(t)}
                className={store.deviceStore.selectedType.id === t.id ? "shop__types__item shop__types__item_active" : "shop__types__item"}>
                {t.name}
            </li>)}
        </ul>
    );
})

export default Typebar;