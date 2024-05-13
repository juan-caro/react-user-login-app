import { useEffect, useState } from "react"



export const UserForm = ({userSelected, handlerAddUser, initialUserForm}) => {

    const [userForm, setUserForm] = useState(initialUserForm);

    const { id, username, password, email } = userForm;

    useEffect(() => {
        console.log("USE EFFECT:")
        console.log(userSelected);
        setUserForm({
            ...userSelected,
            password: '',

        });

        console.log("USER FORM:")
        console.log(userForm);

    }, [userSelected])

    const onInputChange = ({ target }) => {
        const {name, value} = target;
        setUserForm({
            ...userForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(!username || (!password && id === 0)|| !email){
            alert('Falta un campo por rellenar');
            return;
        }
        console.log('enviando el form...')
        handlerAddUser(userForm);
        setUserForm(initialUserForm);
    }

  return (
    <form action="" onSubmit={onSubmit}>
        <input className="form-control my-3 w-75" placeholder="Username" name="username" value={username} onChange={ onInputChange }/>
        {id === 0 ? <input className="form-control my-3 w-75" placeholder="Password" name="password" type="password" value={password} onChange={ onInputChange }/> : ''}
        
        <input className="form-control my-3 w-75" placeholder="Email" name="email" type="email" value={email} onChange={ onInputChange }/>
        <input type="hidden" name="id" value={id} />
        <button
            className="btn btn-primary" type="submit">
                {id > 0 ? 'Editar' : 'Crear'}
        </button>
    </form>
  )
}
