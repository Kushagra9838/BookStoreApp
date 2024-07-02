import React from 'react'
import Navbar from './Navbar'

export default function Contact() {
    return (
        <>
            <div>
                <Navbar />
                <div className='mt-10 flex h-screen justify-center items-center '>
                    <div>
                        <h1 className="font-bold text-2xl">Contact Us</h1>
                        <form action="">
                            <div  className='mt-4 space-y-2'>
                            <label>Name</label>
                            <br />
                            <input 
                                type="text" 
                                className='bg-white text-black w-80 outline-none px-3 py-1 rounded-md border-2'
                                placeholder='Enter your name'
                                name="" 
                                id="" 
                            />
                            </div>
                            <div className='mt-4 space-y-2'>
                            <label htmlFor="">Email</label>
                            <br />
                            <input 
                                type="email" 
                                className='bg-white text-black w-80 outline-none px-3 py-1 rounded-md border-2'
                                placeholder='Email address'
                                name="" 
                                id="" 
                            />
                            </div>
                            <div className='mt-4 space-y-2'>
                            <label htmlFor="">Message</label>
                            <br />
                            <input 
                                type="text" 
                                className='bg-white text-black w-80 outline-none px-3 py-1 rounded-md border-2'
                                placeholder='Type your message'
                                name="" 
                                id="" 
                            />
                            </div>
                            <button className='mt-6 px-3 py-1 bg-pink-500 hover:bg-pink-900 duration-200 rounded-md' type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
