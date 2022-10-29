import React from 'react';
import { faker } from '@faker-js/faker';
import {useEffect,useState} from 'react';


const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const suggestions = [...Array(6)].map((_, i) => ({
          userId: faker.datatype.uuid(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          avatar: faker.image.avatar(),
          password: faker.internet.password(),
          birthdate: faker.date.birthdate(),
          registeredAt: faker.date.past(),
          company: faker.company.bs(),
        }));
        setSuggestions(suggestions);
      }, []);
  return (
    <div className='mt-4 ml-10 bg-black rounded' >
     <div className='flex justify-between text-sm mb-5'> 
     <h3 className='text-sm font-bold text-gray-200  mt-1 ml-2'>Suggestions for you</h3>
     <button className='text-blue-500 font-semibold mr-2 mt-1'>See All</button>
     </div>

     {
       suggestions.map(profile => (
        <div key={profile.id} className="flex items-center justify-between mt-3 px-3 py-1 bg-black rounded" >
       <img src={profile.avatar} alt="" className='w-10 h-10 rounded-full border p-[2px]' />
        
        <div className='flex-1 ml-4'>
        <h2 className='font-semibold text-sm text-gray-200' >
             {profile.username} </h2>
        <h3 className='text-xs text-gray-400'>Works at {profile.company}</h3>
        </div>
     <button className='text-blue-500 text-xs font-bold'>
       Follow 
     </button>
        
        </div>
       ))

     }

    </div>
  )
}

export default Suggestions