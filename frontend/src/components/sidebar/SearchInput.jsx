import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversation'
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      return toast.error('Search term must be at least 3 characters long');
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLocaleLowerCase()));

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder='Search' className='setWidth input input-bordered bg-black rounded-full' value={search} onChange={(e)=> setSearch(e.target.value)} />
        <button type='submit' className='btn onHover btn-circle bg-black text-white'>
        <FaSearch className='w-5 h-5 outline-none' />
        </button>
    </form>
  )
}

export default SearchInput
