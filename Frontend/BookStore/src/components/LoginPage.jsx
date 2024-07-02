import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

export default function login() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className=''>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white text-black dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-4 space-y-2 '>
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='bg-white text-black w-80 outline-none px-3 py-1 rounded-md'
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
                                className='bg-white text-black w-80 outline-none px-3 py-1 rounded-md'
                                name=""
                                id=""
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className='text-sm text-red-700'>This field is required</span>}
                        </div>
                        <div className='flex justify-around mt-4'>
                            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-900 duration-200'>Login</button>
                            <p>Not Registered? <Link to={"/signup"}><span className='text-blue-500 underline cursor-pointer'>SignUp</span></Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}
