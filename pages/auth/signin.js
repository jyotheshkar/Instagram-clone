import React from 'react';
import { getProviders , signIn as SignIntoProvider } from "next-auth/react";
import Header from '../../components/Header';

//browser...
const signIn = ({providers}) => {
  return (
   
   
    <  >
    

    <div className='bg-black h-screen'>
    <Header />

<div className='flex flex-col items-center justify-center 
py-2 -mt-[78px] px-14 text-center bg-black h-screen ' >
<img  src="https://i.pinimg.com/736x/4b/48/99/4b48995883cfba814b286d8cf6acfca3.jpg" 
alt="" 
className='w-60'
/>

<img src='https://i.gadgets360cdn.com/large/facebook_meta_branding_image_small_1636114848455.jpg'  className='w-20' alt=''/>
<p className='font-xs italic text-gray-500 bg-black'>
This is not the real INSTAGRAM App , it is build for learning Next.Js purpose only by jyothesh karnam 
</p>


<div className='mt-40'>
   {Object.values(providers).map((provider) => (
    <div key={provider.name}>
      <button 
      className='p-3 bg-blue-500  rounded-lg text-white '
      onClick={() => SignIntoProvider(provider.id, {callbackUrl: '/'} )}>
        Sign in with {provider.name}
      </button>
    </div>
  ))}
   </div>

</div>
     

    </div>
   

    </>
  )
}

//server...
export async function getServerSideProps() {
    const providers = await getProviders();

    return  {
        props : {
            providers
           
        },
    }
        
    
}
export default signIn