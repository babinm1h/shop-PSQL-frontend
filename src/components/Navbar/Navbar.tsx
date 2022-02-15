import { observer } from 'mobx-react-lite';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../..';
import { AllRoutes } from '../../routes';
import "./Navbar.scss"

const Navbar = observer(() => {
    const { store } = React.useContext(StoreContext)

    const handleLogout = () => {
        if (window.confirm("Вы действительно хотите выйти?")) {
            store.userStore.logout()
        }
    }


    return (
        <header className="header">
            <div className="header__row">
                <NavLink to={AllRoutes.SHOP}>
                    <img src="https://ocomputere.ru/wp-content/uploads/2021/09/pngwing.com-3.png" alt="logo" className="header__logo" />
                </NavLink>
                <div className="header__actions">
                    {store.userStore.isAuth ? <>
                        <NavLink to={AllRoutes.BASKET}>
                            <button className="btn">Корзина</button>
                        </NavLink>
                        <NavLink to={AllRoutes.ADMIN}>
                            <button className="btn">Админ панель</button>
                        </NavLink>
                        <button className="btn" onClick={handleLogout}>Выйти</button>
                    </>
                        : <>
                            <NavLink to={AllRoutes.LOGIN}>
                                <button className="btn">Авторизация</button>
                            </NavLink>
                        </>}
                </div>
            </div>
        </header>
    );
})

export default Navbar;