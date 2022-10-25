import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/userReducer'
const Login = () => {
  const dispatch = useDispatch()

  return (
    <div>
        <button onClick={()=>{dispatch(login({name:"Pedro",age:20,email:"hello"}))}}>Login</button>
    </div>
  )
}

export default Login