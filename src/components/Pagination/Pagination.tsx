import { observer } from 'mobx-react-lite';
import "./Pagination.scss"
import React from 'react';
import { StoreContext } from '../..';


const Pagination = observer(() => {
    const { store } = React.useContext(StoreContext)

    const pagesCount = Math.ceil(store.deviceStore.totalCount / store.deviceStore.limit)
    const pages = []

    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)
    }

    if (store.deviceStore.totalCount === 0) {
        return null
    }


    return (
        <div className="pagination">
            {pages.length > 0 && pages.map(p => <div key={p} className={store.deviceStore.page === p
                ? "pagination__item pagination__item_active" : "pagination__item"}
                onClick={() => store.deviceStore.setPage(p)}>
                {p}
            </div>)}
        </div>
    );
});

export default Pagination;