// import { LoginPage } from "../auth/pages/LoginPage";
import { ModalForm } from "../components/ModalForm";
import { UsersList } from "../components/UsersList";
import { useUsers } from "../hooks/useUsers";



export const UsersPage = () => {


    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,

        handlerAddUser,
        handlerRemoveUser,
        handlerSelectedUser,
        handlerOpenForm,
        handlerCloseForm,

    } = useUsers();

    

    return (
        <>
            {/* <LoginPage /> */}
            {!visibleForm || 
                <ModalForm userSelected={userSelected} 
                    handlerCloseForm={handlerCloseForm} 
                    handlerAddUser={handlerAddUser} 
                    initialUserForm={initialUserForm}
                />
            }
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    
                        {/* {!visibleForm || 
                            <div className="col">
                                <UserForm
                                    handlerCloseForm={handlerCloseForm}
                                    userSelected={userSelected} 
                                    handlerAddUser={handlerAddUser}
                                    initialUserForm={initialUserForm}
                                />
                            </div>
                        } */}
                        
                    
                    <div className="col">
                        {visibleForm || <button className="btn btn-primary my-2" onClick={handlerOpenForm}>Nuevo Usuario</button>}
                        
                        {users.length === 0 ? <div className="alert alert-warning">No hay usuarios en el sistema</div> : <UsersList handlerSelectedUser={handlerSelectedUser} handlerRemoveUser={handlerRemoveUser} users={ users } />}
                        
                    </div>
                </div>
            </div>
        </>
    );
}
