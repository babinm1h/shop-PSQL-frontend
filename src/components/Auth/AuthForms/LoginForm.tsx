import { useFormik } from 'formik';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AllRoutes } from '../../../routes';
import * as Yup from "yup"
import FormControl from '../../FormControl/FormControl';
import { StoreContext } from '../../..';
import { observer } from 'mobx-react-lite';

const LoginForm = observer(() => {
    const { store } = React.useContext(StoreContext)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        onSubmit: async (values, { setSubmitting }) => {
            setSubmitting(true)
            store.userStore.login(values.email, values.password)
            navigate(AllRoutes.SHOP)
        },

        validationSchema: Yup.object().shape({
            email: Yup.string().required("Обязательное поле")
                .email("Некорректный email")
                .min(6, "Длина от 6 до 35 сивмолов").max(35, "Длина от 6 до 35 сивмолов"),
            password: Yup.string().required("Обязательное поле")
                .min(4, "Длина от 4 до 35 сивмолов").max(35, "Длина от 4 до 35 сивмолов")
        })
    })

    return (
        <form action="" className="auth__form" onSubmit={formik.handleSubmit}>
            <div className="auth__form__control">
                <FormControl htmlFor="email" label="Email" onChange={formik.handleChange}
                    value={formik.values.email} placeholder="Ваш email" type="email" />
                {formik.errors.email && <div className="form__error">{formik.errors.email}</div>}
            </div>


            <div className="auth__form__control">
                <FormControl htmlFor="password" label="Пароль" onChange={formik.handleChange}
                    value={formik.values.password} placeholder="Ваш пароль" type="password" />
                {formik.errors.password && <div className="form__error">{formik.errors.password}</div>}
            </div>


            <div className="auth__form__actions">
                <button type="submit" className='btn auth__form__btn'
                    disabled={!!formik.errors.email || !!formik.errors.password || formik.isSubmitting}>
                    Войти
                </button>
                <div>Нет аккаунта?
                    <NavLink to={AllRoutes.REGISTR}>Регистрация</NavLink>
                </div>
            </div>
            {store.userStore.loginError && <div className="form__error">
                {store.userStore.loginError}
            </div>}
        </form>
    );
});

export default LoginForm;