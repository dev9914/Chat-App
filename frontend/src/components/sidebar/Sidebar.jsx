import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'

const Sidebar = () => {
  return (
    <div className='sidebar border-r h-full md:min-w-[25vw] border-slate-500 p-4 flex flex-col'>
      <SearchInput />
      <div className='divider px-3'></div>
      <Conversations />
    </div>
  )
}

export default Sidebar
