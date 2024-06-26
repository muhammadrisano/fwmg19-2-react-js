import api from "../../api"

export const login = ({email, password}, navigate)=>(dispatch)=>{
  
  dispatch({
    type: 'LOGIN_REQUEST'
  })
  api({
    method: 'POST',
    url: `/auth/login`,
    data: {
      email,
      password
    }
  })
  .then((res)=>{
    dispatch({type: 'LOGIN_SUCCESS'})
    const {token, refreshToken} = res.data.data
    localStorage.setItem('token', token)
    localStorage.setItem('resfreshToken', refreshToken)
    navigate('/main/profile')
  })
  .catch((err)=>{
    console.log(err.response);
    dispatch({type: 'LOGIN_SUCCESS', payload: err.response})
  })
}