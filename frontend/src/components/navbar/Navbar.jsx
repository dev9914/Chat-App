import React from 'react'
import {Link} from 'react-router-dom'
import LogoutButton from '../sidebar/LogoutButton'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black">
  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center flex-col">
      <div className="flex-shrink-0">
        <p href="#" className="text-white cursor-pointer margin3 fontSize font-bold">DevChat</p>
      </div>
      <div className="sm:block">
        <div className="flex my-6 margin1 flex-col items-center">
          <Link to="/" className="text-white onHover textSize margin2 my-2 px-3 py-2 rounded-md font-medium">Home</Link>
          <Link to="/about" className="text-white onHover margin2 textSize my-2 px-3 py-2 rounded-md font-medium">About</Link>
          <Link to="/Contact" className="text-white onHover textSize my-2 px-3 py-2 rounded-md font-medium">Contact</Link>
        </div>
      </div>
    </div>
  </div>
  <div className='margin4'>
    <LogoutButton />
  </div>
</nav>

    </div>
  )
}

export default Navbar
