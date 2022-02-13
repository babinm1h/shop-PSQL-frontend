import { observer } from 'mobx-react-lite';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../..';
import { AllRoutes } from '../../routes';
import "./Navbar.scss"

const Navbar = observer(() => {
    const { store } = React.useContext(StoreContext)

    return (
        <header className="header">
            <div className="header__row">
                <NavLink to={AllRoutes.MAIN}>
                    <img src="https://ocomputere.ru/wp-content/uploads/2021/09/pngwing.com-3.png" alt="logo" className="header__logo" />
                </NavLink>
                <div className="header__actions">
                    {store.userStore.isAuth ? <>
                        <NavLink to={AllRoutes.ADMIN}>
                            <button className="btn">Админ панель</button>
                        </NavLink>
                        <button className="btn">Выйти</button>
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