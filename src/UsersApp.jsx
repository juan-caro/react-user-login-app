// import { UsersPage } from "./pages/UsersPage";

import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { loginReducer } from "./auth/pages/reducers/loginReducer";
import Swal from "sweetalert2";
import { UsersPage } from "./pages/UsersPage";
import { Navbar } from "./components/layouts/Navbar";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}
export const UsersApp = () => {

    const [login, dispatch] = useReducer(loginReducer, initialLogin);

    const handlerLogin = (userLogin) => {
        if(userLogin.username === 'admin' && userLogin.password === 'admin'){
            const user = { username: 'admin'}
            dispatch({
                type: 'login',
                payload: user,
            });
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user: user,
            }));
        }else{
            Swal.fire(
                'Error de Login',
                'Credenciales incorrectas',
                'error'
            )
        }
    }

    const handlerLogout = () => {
        dispatch({
            type: 'logout',
        });

        sessionStorage.removeItem('login');
    }

    return (
        <>
            {login.isAuth 
                ? 
                (
                <>
                    <Navbar login={login} handlerLogout={handlerLogout} /> 
                    <UsersPage /> 
                </>
                )
                : <LoginPage handlerLogin={handlerLogin} />}
            
            {/* <UsersPage /> */}
        </>
    );
}
