import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import {toast} from 'react-toastify'

const Login = () => {

    const navigate = useNavigate()
    const [state, setState] = useState('Login')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')

    const {backendUrl, token, setToken} = useContext(AppContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            if(state === 'Sign Up'){
                const {data} = await axios.post(backendUrl + '/api/user/register', {name, email, password, mobile})

                if(data.success){
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                }else{
                    toast.error(data.message)
                }
            }else{
                const {data} = await axios.post(backendUrl + '/api/user/login', {email, password})
                if(data.success){
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                }else{
                    toast.error(data.message)
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        if(token){
            navigate('/')
        }
    },[token])

  return (
    <div className='min-h-screen flex items-center justify-center bg-black overflow-x-hidden'>
      <form action="" onSubmit={onSubmitHandler} className='min-w-[340px]'>
        <div className='border border-green-600 p-8 rounded-2xl space-y-3'>
            <p className='text-center text-2xl font-bold text-green-600'>{state === 'Sign Up' ? 'Create account' : 'Login'}</p>
            {
                state === 'Sign Up' && 
                <div>
                    <p className='text-green-600 font-light'>Name</p>
                    <input className='w-full border border-green-600 p-2 outline-none rounded text-sm font-light text-green-600' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} />
                </div>
            }
            <div>
                <p className='text-green-600 font-light'>Email</p>
                <input className='w-full border border-green-600 p-2 outline-none rounded  text-sm font-light text-green-600' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div>
                <p className='text-green-600 font-light'>Password</p>
                <input className='w-full border border-green-600 p-2 outline-none rounded  text-sm font-light text-green-600' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            {
                state === 'Sign Up' && 
                <div>
                    <p className='text-green-600 font-light'>Phone</p>
                    <input className='w-full border border-green-600 p-2 outline-none rounded  text-sm font-light text-green-600' type="tel" placeholder='Phone' onChange={(e) => setMobile(e.target.value)} value={mobile} />
                </div>
            }
            <button type='submit' className='text-white bg-green-600 p-1 w-full rounded mt-2 cursor-pointer'>{state === 'Sign Up' ? 'Create account' : 'Login'}</button>

            {
                state === 'Sign Up' 
                ? <p className='text-gray-300 font-light cursor-pointer'>already have an account ? <span className='text-green-600' onClick={() => {setState('Login')}}>login here</span></p>
                : <p className='text-gray-300 font-light cursor-pointer'>dont have an account ? <span className='text-green-600' onClick={() => {setState('Sign Up')}}>create an account</span></p>
            }
        </div>
      </form>
    </div>
  )
}

export default Login
