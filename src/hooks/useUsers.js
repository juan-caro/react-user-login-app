import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

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

export const useUsers = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);


    const handlerAddUser = (user) => {
        // console.log(user);
        dispatch({
            type: (user.id ===0) ? 'addUser' : 'updateUser',
            payload: user,
        });

        Swal.fire(
            (user.id === 0) ? 'Usuario Creado' : 'Usuario Actualizado',
            (user.id === 0) ? 'El usuario ha sido creado con éxito!' : 'El usuario ha sido actualizado con éxito!',
            'success'
        );

        handlerCloseForm();        
    }

    const handlerRemoveUser = (id) => {
        // console.log(id);
        

        Swal.fire({
            title: "¿Seguro que quieres borrar este usuario?",
            text: "No podrás recuperarlo en caso de borrarlo.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminalo!",
            cancelButtonText: "Cancelar",
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'removeUser',
                    payload: id,
                });
              Swal.fire({
                title: "Usuario Eliminado",
                text: "El usuario ha sido eliminado.",
                icon: "success"
              });
            }
          });
    }

    const handlerSelectedUser = (user) => {
        // console.log(user.id)
        setUserSelected(user);
        setVisibleForm(true);

        console.log("handlerSelectedUser:" + userSelected.id);
        console.log(userSelected);
    }
    
    const handlerOpenForm = () =>{
        setVisibleForm(true);
    }

    const handlerCloseForm = () =>{
        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }

    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,

        handlerAddUser,
        handlerRemoveUser,
        handlerSelectedUser,
        handlerOpenForm,
        handlerCloseForm,

    }
}
