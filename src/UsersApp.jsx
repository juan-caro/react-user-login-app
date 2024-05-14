// import { UsersPage } from "./pages/UsersPage";

import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";
import { Navbar } from "./components/layouts/Navbar";
import { useAuth } from "./auth/hooks/useAuth";


export const UsersApp = () => {

    const {login, handlerLogin, handlerLogout} = useAuth();
    

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
