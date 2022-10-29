
import React from 'react';
import { faker } from '@faker-js/faker';
import {useState, useEffect } from 'react';
import Story from './Story'
import { useSession } from 'next-auth/react';

const Stories = () => {
     
    const [suggestions, setSuggestions] = useState([]);
    const { data: session } = useSession();  
  useEffect(() => {
    const suggestions = [...Array(100)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }));

    setSuggestions(suggestions);
    // console.log(suggestions)
  }, []);

  return (
    <div className='flex space-x-2 p-6 bg-black border-hidden mt-2 border-gray-200 border 
    rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-700 '>
      
      {session && (
         <Story img={session.user.image} 
         username={session.user.username} />
        
      )}
        {suggestions.map( profile => (
            <Story
             key={profile.id} 
             img={profile.avatar} 
             username={profile.username}/>
        ))}
        
    </div>
  )
}

export default Stories