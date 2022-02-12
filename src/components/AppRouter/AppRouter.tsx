import React from 'react';
import { Route, Routes } from 'react-router';
import { authRoutes, publicRoutes } from '../../routes';

const AppRouter = () => {
    const isAuth = false


    return (
        <Routes>
            {isAuth && authRoutes.map(r => <Route path={r.path} element={r.element} key={r.path} />)}
            {publicRoutes.map(r => <Route path={r.path} element={r.element} key={r.path} />)}
        </Routes>
    );
};

export default AppRouter;