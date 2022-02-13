import React from 'react';
import "./DevicePage.scss"

const DevicePage = () => {
    return (
        <div className="device-page">
            <h1 className="device-page__name">Processor intel core i5-10400f</h1>
            <div className="device-page__content">
                <div className="device-page__img">
                    <img src="https://cache3.youla.io/files/images/orig/5d/be/5dbecc6580e08e9dca4da598.jpg" alt="device" />
                </div>
                <div className="device-page__info">
                    <div className="device-page__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ex ab, ad totam quia labore quaerat, autem voluptas mollitia numquam tempore animi id ut architecto placeat, ea cum. Quaerat, rem.
                    </div>
                    <div className="device-page__rating">Rating: 4</div>
                    <div className="device-page__buy">
                        <div className="device-page__price">77000 ₽</div>
                        <button className="btn">Купить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DevicePage;