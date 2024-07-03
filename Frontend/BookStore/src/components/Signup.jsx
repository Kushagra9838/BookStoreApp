import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const info = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/signup", info)
        .then((res)=>{
            console.log(res.data);
            if(res.data){
                toast.success('SignUp successfull');
                navigate(from, {replace: true})
                window.location.reload();
            }
            localStorage.setItem("user",  JSON.stringify(data))
        }).catch((err)=>{
            if(err.response){
                console.log(err);
                toast.error("Error :" + err.response.data.message);
            }
            
        })
    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div id="my_modal_3" className="">
                <div className=" bg-white text-black dark:bg-slate-900 dark:text-white modal-dialog border-2 p-10 rounded-lg shadow-md">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-lg">SignUp</h3>
                        <div className='mt-4 space-y-2 '>
                            <span>Name</span>
                            <br />
                            <input
                                type="text"
                                placeholder='Enter your name'
                                className='bg-white text-black w-80 outline-none px-3 py-1 rounded-md border-2'
                                name=""
                                id=""
                                {...register("name", { required: true })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-700'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2 '>
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='bg-white text-black w-80 outline-none px-3 py-1 rounded-md border-2'
                                name=""
                                id=""
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-700'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder='Enter your password'
                                className='bg-white text-black w-80 outline-none px-3 py-1 rounded-md border-2'
                                name=""
                                id=""
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className='text-sm text-red-700'>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-4'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-900 duration-200'>SignUp</button>
                            <p>Have Account? <Link to={"/"}><span className='text-blue-500 underline cursor-pointer'>Login</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
