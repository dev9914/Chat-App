import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {

  const {loading, logout} = useLogout();

  return (
    <div className='mt-4'>
      {!loading ? (
        <IoIosLogOut onClick={logout} className='w-8 h-8 text-white cursor-pointer' />
      ): (
        <span className='loading loading-spinner'></span>
      )}
      

    </div>
  )
}

export default LogoutButton
