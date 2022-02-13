import React from 'react';
import Brandbar from '../../components/Shop/Brandbar/Brandbar';
import DeviceList from '../../components/Shop/DeviceList/DeviceList';
import Typebar from '../../components/Shop/Typebar/Typebar';
import "./Shop.scss"

const Shop = () => {
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
};

export default Shop;