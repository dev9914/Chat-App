import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessage } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(()=>{
    //cleanup function
    return () => setSelectedConversation(null)
  },[setSelectedConversation]);

  return (
    <div className='md:min-w-[63vw] flex flex-col'>
      {!selectedConversation ? (
        <NoChatSelected />
      ): (
      <>
      <div className='bg-black border-b border-gray-700 px-4 py-2 mb-2'>
        <span className='label-text font-bold text-white l'>To:</span>{" "}
        <span className='text-white font-bold'>{selectedConversation.fullName}</span> 
      </div>

      <Messages />
      <MessageInput />
      </>)}
    </div>
  )
}

export default MessageContainer;

const NoChatSelected = ()=> {
  const {authUser} = useAuthContext();
  return(
     <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-x1 text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {authUser.fullName} </p>
        <p>Select a chat to start messaging</p>
        <TiMessage className="text-3x1 md:text-6xl text-center"/>
      </div>

     </div>
  )
}
