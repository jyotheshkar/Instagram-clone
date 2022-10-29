import React from 'react';
import { signOut , useSession } from 'next-auth/react';

const MiniProfile = () => {
const { data: session } = useSession();

console.log(session)

  return (
    <div className='flex items-center justify-between mt-14 ml-10 bg-black px-4 py-2 rounded'  >
        <img className='rounded-full border p-[2px] w-16 h-16 border-green-500 ' 
        src="https://yt3.ggpht.com/ytc/AMLnZu_fPWQa5kq308lvRdk21EQWn45y5IJ0gg1EVcdEPA=s900-c-k-c0x00ffffff-no-rj" alt="" />

      <div className='flex-1 mx-4' >
         <h2 className='font-bold text-gray-50'>{session?.user?.username}</h2>
         <h3 className='text-sm text-gray-50 '>Next.js for life </h3>
      </div>

<button onClick={signOut} className='text-blue-500 text-sm font-semibold'>Sign Out</button>
    </div>
  )
}

export default MiniProfile