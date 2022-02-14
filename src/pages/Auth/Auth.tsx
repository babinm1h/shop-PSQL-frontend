import { useLocation } from 'react-router-dom';
import LoginForm from '../../components/Auth/LoginForm/LoginForm';
import SignUpForm from '../../components/Auth/LoginForm/SignUpForm';
import { AllRoutes } from '../../routes';
import "./Auth.scss"

const Auth = () => {
    const location = useLocation()
    const isLoginPage = location.pathname === AllRoutes.LOGIN

    return (
        <div className="auth">
            <div className="auth__content">
                <div className="auth__title">{isLoginPage ? "Вход" : "Регистрация"}</div>
                {isLoginPage
                    ? <LoginForm />
                    : <SignUpForm />}
            </div>
        </div>
    );
};

export default Auth;