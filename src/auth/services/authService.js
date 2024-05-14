
export const loginUser = (userLogin) => {
  return (userLogin.username === 'admin' && userLogin.password === 'admin') ? true : false;
  
}
