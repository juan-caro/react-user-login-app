import { useReducer, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@email.com'
    },
];

const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
}

export const UsersApp = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);


    const handlerAddUser = (user) => {
        // console.log(user);
        let type;
        if(user.id === 0){
            type = 'addUser';
        }else{
            type = 'updateUser';
        }
        dispatch({
            type: type,
            payload: user,
        })
    }

    const handlerRemoveUser = (id) => {
        // console.log(id);
        dispatch({
            type: 'removeUser',
            payload: id,
        })
    }

    const handlerSelectedUser = (user) => {
        // console.log(user.id)
        setUserSelected(user);

        console.log("handlerSelectedUser:" + userSelected.id);
        console.log(userSelected);
    }

    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    <UserForm
                    userSelected={userSelected} 
                    handlerAddUser={handlerAddUser}
                    initialUserForm={initialUserForm}
                    />
                </div>
                <div className="col">
                    {users.length === 0 ? <div className="alert alert-warning">No hay usuarios en el sistema</div> : <UsersList handlerSelectedUser={handlerSelectedUser} handlerRemoveUser={handlerRemoveUser} users={ users } />}
                    
                </div>
            </div>
        </div>
    );
}
