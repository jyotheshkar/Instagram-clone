import React from 'react';
import Image from 'next/image';
import instaimage from '../assets/download.jpg';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon} from "@heroicons/react/solid";
import {HeartIconFilled} from  "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { signIn } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';


const Header = () => {
  const {data: session } = useSession();
  const [ open , setOpen ] = useRecoilState(modalState);
  const router = useRouter();
        
  return (
    <div className='shadow-sm border-b bg-black sticky top-0 z-50 border-black'> 
          <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto  '>
  {/* left */}
  <div onClick={() => router.push('/')} className='relative hidden  lg:inline-grid  w-24 cursor-pointer'>
           <img src="https://thumbs.dreamstime.com/b/print-204012277.jpg"
            layout='fill' objectFit='contain' className='mt-2 h-12 '
            />

         </div>

         <div onClick={() => router.push('/')} className='relative w-10  lg:hidden flex-shrink-0 '>
         <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png"
            layout='fill' objectFit='contain' className='mt-4'
            />
         </div>

        {/* middle -search input field */}
        <div className='max-w-xs'>
        <div className=' relative mt-1 p-3 rounded-md ' >
                <div className=' absolute  insert-y-0 pl-3 flex items-center pointer-events-none '>
                <SearchIcon className="h-5 w-5 text-gray-500 mt-3  " />
               </div>

          <input className='bg-gray-50 block w-full  pl-11 sm:text-sm border-black focus:ring-white 
          focus:border-black rounded-md hover:ring-white  text-white bg-[#171718]
          placeholder-gray-400'
           type="text" placeholder='search'   />
         </div>

        </div>
        
      

        {/* right */}
        <div className='flex items-center justify-end space-x-4'>
        < HomeIcon onClick={() => router.push('/')} className="navBtn"/>
        < MenuIcon  className="h-6 hidden cursor-pointer text-white transition-all hover:scale-125 duration-150 ease-out"/>

       {session ? (
        <>
          <div className='relative navBtn '>
    <PaperAirplaneIcon className="navBtn rotate-45"/>
    <div className='absolute -top-2 -right-1 text-xs w-5 h-5 
    bg-red-600 rounded-full flex items-center justify-center text-white animate-pulse'>9+</div>
    </div>
    <PlusCircleIcon onClick={() => setOpen(true)} 
     className='navBtnUltimate'/>

    <div className='relative navBtn '>
    <UserGroupIcon className='navBtn' />
    <div className='absolute -top-2 -right-1 text-xs w-5 h-5 
    bg-red-600 rounded w-6 flex items-center justify-center text-white animate-pulse'>
   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
</svg>
    </div>
    </div>
    <HeartIcon  className='navBtn'/>
     
     <img 
     onClick={signOut}
     src={session.user.image} 
     alt='profile pic' 
     className='h-10 w-10 cursor-pointer rounded-full transition-all hover:scale-125 
     duration-150 ease-out '    />
        </> // wrap it in a fragment so the code wont freakout
  

        ) : (
          <button onClick={signIn} className="text-blue-500 " > Sign In</button>
        ) }

     
        </div>
          </div>
    </div>
  )
}

export default Header