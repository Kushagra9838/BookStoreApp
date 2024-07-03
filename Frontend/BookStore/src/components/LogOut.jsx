import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

export default function LogOut(){
    const [authUser, setAuthUer] = useAuth();
    const handleChange = () =>{
        try{
            setAuthUer({
                ...authUser,
                user:null
            })
            localStorage.removeItem("user");
            toast.success("LogOut successful");
            window.location.reload();
        }catch(error){
            toast.error("Error :", error);
        }
        
    }
    return (
      <div>
        <button className='ml-4 px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleChange}>LogOut</button>
      </div>
    )
}
