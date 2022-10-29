import React from 'react';
import Stories from './Stories';
import Posts from './Posts';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';
import { useSession } from 'next-auth/react';

const Feed = () => {
  const { data: session } = useSession();
  return (
    <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
    xl:grid-cols-3 xl:max-w-6xl  mx-auto ${!session && 
    "!grid-cols-1 !max-w-3xl"   }   `} > 
  <section className="col-span-2">
      {/* stories */}
      <Stories />
       <Posts />
      {/* posts */}

  </section>

{session && (
  <section className='hidden xl:inline-grid md:col-span-1'>
  <div className='fixed '>
  <MiniProfile  />
 <Suggestions />

  </div>

      {/* miniprofile */}
      {/* suggestions */}
 </section>

)}




 

 
        
    </main>
  )
}

export default Feed