
import React, { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import Post from "./Post";
import { db } from "../firebase";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        // console.log(snapshot.docs)
        setPosts(snapshot.docs);
      }
    );

    return unsubscribe;
  }, [db]);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;






















































// import React from 'react';
// import Post from './Post';
// import { useState , useEffect} from 'react';
// import { onSnapshot, orderBy } from 'firebase/firestore';
// import { db } from "../firebase";
// import { query } from 'firebase/firestore';
// import { collection } from 'firebase/firestore';


// // const posts = [
  
// //     {
// //         id:'123',
// //         username: 'jyothesh karnam',
// //         userImg: 'https://yt3.ggpht.com/ytc/AMLnZu_fPWQa5kq308lvRdk21EQWn45y5IJ0gg1EVcdEPA=s900-c-k-c0x00ffffff-no-rj',
// //         img:'https://yt3.ggpht.com/ytc/AMLnZu_fPWQa5kq308lvRdk21EQWn45y5IJ0gg1EVcdEPA=s900-c-k-c0x00ffffff-no-rj',
// //         caption:"elon musk is dope"
// //     },
// //     {
// //         id:'123',
// //         username: 'jyothesh karnam',
// //         userImg: 'https://yt3.ggpht.com/ytc/AMLnZu_fPWQa5kq308lvRdk21EQWn45y5IJ0gg1EVcdEPA=s900-c-k-c0x00ffffff-no-rj',
// //         img:'https://yt3.ggpht.com/ytc/AMLnZu_fPWQa5kq308lvRdk21EQWn45y5IJ0gg1EVcdEPA=s900-c-k-c0x00ffffff-no-rj',
// //         caption:"elon musk is dope"
// //     },
  
// // ]

// const Posts = () => {

// const [posts, setPosts ] = useState([]);

// useEffect(() => {
//   const unsubscribe = onSnapshot(query(collection(db , 'posts'), orderBy('timestamp' , 'desc')), snapshot => {
//     setPosts(snapshot.docs);
//   });
// // this part of code requires a change 
//   return unsubscribe;
  

// },[db]);

// console.log(posts)

//   return (
//     <div> 
//         {posts.map(post => (
//           <Post key={post.id} id={post.id} 
//           username={post.data().username}
//           userImg={post.data().profileImg}
//           img={post.data().img}
//           caption={post.data().caption}
//           />

//         ))}
       
//          </div>
//   )
// }

// export default Posts