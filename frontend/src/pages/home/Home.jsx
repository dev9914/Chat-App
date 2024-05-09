import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const home = () => {
  return (
    <div className='flex sm:h-[100vh] md:h-[100vh] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default home

