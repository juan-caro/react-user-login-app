import { UserForm } from "./UserForm"


export const ModalForm = ({userSelected, handlerCloseForm, handlerAddUser, initialUserForm}) => {
  return (
    <>
        <div className="abrir-modal animacion fadeIn">
                    <div className="modal" style={{ display:"block" }} tabIndex="-1">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        {userSelected.id > 0 ? 'Editar' : 'Crear'} Modal Usuarios
                                    </h5>
                                </div>
                            
                                <div className="modal-body">
                                    <UserForm
                                        handlerCloseForm={handlerCloseForm}
                                        userSelected={userSelected} 
                                        handlerAddUser={handlerAddUser}
                                        initialUserForm={initialUserForm}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}
