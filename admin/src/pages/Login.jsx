import React, { useContext, useEffect, useState } from 'react'
import loginBg from '../assets/Login_bg.jpg'
import axios from 'axios'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const {aToken, setAToken, backendUrl} = useContext(AdminContext)
    const navigate = useNavigate()

    const loginSubmit = async (e) => {
        e.preventDefault()
        try {
            const {data} = await axios.post(backendUrl + '/api/admin/login', {email, password})
            if(data.success){
                localStorage.setItem('aToken',data.token)
                setAToken(data.token)
                navigate('/')
            }else{
                alert(data.message || 'login failed')
            }
        } catch (error) {
            console.log(error)
            alert('something went wrong. please try again')
        }
    }

    useEffect(() => {
        if(aToken){
            navigate('/')
        }
    },[aToken, navigate])

  return (
    <div className='flex relative overflow-hidden'>
        <div className='w-full min-h-[100vh] px-0 mx-auto'>
            <div className='w-full'>
                <div className='py-[30px] px-[28px] w-full bg-cover flex items-center min-h-[100vh]' style={{backgroundImage:`url(${loginBg})`}}>
                    <div className='bg-[#191c24] rounded-[4px] lg:w-4/12 mx-auto'>
                        <div className='p-[48px]'>
                            <h1 className='text-white text-left mb-[16px] text-[24px] font-[500] leading-tight'>Login</h1>
                            <form action="" onSubmit={loginSubmit}>
                                <div className='mb-[40px]'>
                                    <label htmlFor="" className='text-[14px] leading-none align-top inline-block text-white'>email *</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='h-[41.2px] border border-[#2c2e33] text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white w-full leading-none outline-none' />
                                </div>
                                <div className='mb-[40px]'>
                                    <label htmlFor="" className='text-[14px] leading-none align-top inline-block text-white'>Password *</label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='h-[41.2px] border border-[#2c2e33] text-[14px] font-normal py-[10px] px-[11px] bg-[#2A3038] rounded-[2px] text-white w-full leading-none outline-none' />
                                </div>
                                <div className='mb-[40px] flex items-center justify-between'>
                                    <div className='min-h-[18px] pl-[20px] relative mt-[15px] mb-[10px]'>
                                        <label htmlFor="" className='pl-[16px] text-[14px] leading-normal text-[#6c7293] align-top'>
                                            <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className='peer absolute top-0 left-0 ml-0 mt-0 z-1 cursor-pointer opacity-0 rounded-[3.5px] w-[14px] h-[14px]' />
                                            Remember me
                                            <i className='before:w-[16px] before:h-[16px] before:rounded-[2px] after:text-black before:border-2 before:border-[#0090e7] before:absolute before:top-[2px] before:left-0 before:transition-all before:duration-300 after:transition-all after:duration-300 after:opacity-0 after:text-[14px] after:font-bold peer-checked:before:scale-100 peer-checked:after:opacity-100 before:content-[""] after:content-["✔"] after:absolute before:inset-0 after:inset-0 peer-checked:before:bg-[#0090e7]'></i>
                                        </label>
                                    </div>
                                </div>
                                <div className='grid gap-[8px] text-center'>
                                    <button className='text-white h-[45px] mb-[28px] cursor-pointer text-[14px] py-[6px] px-[12px] leading-[1.42857143] text-center rounded-[4px] inline-block bg-[#0090e7]'>Login</button>
                                </div>
                                <div className='text-center'>
                                    <p className='text-[14px] text-[#6c7293]'>
                                        Contact system administrator if you need access
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
