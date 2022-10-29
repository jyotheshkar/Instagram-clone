import React from 'react'

const Story = ({img,username}) => {
  return (
    <div  >
<img className="h-14 w-14 rounded-full p-[2.6px] border-t-[#EA0C5F] border-b-[#FF5321] border-l-[#FF5321] border-r-[#EA0C5F]
 border-2 object-contain 
cursor-pointer hover:scale-110 transition transform duration-200 ease-out"src={img} alt="" />
<p className='text-xs w-14 truncate text-white' >{username}</p>
{/* border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 */}
    </div>
  )
}

export default Story