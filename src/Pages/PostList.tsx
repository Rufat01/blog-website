import React from 'react'
import { Post } from '../components/Posts';


const PostList = () => {

    const posts = JSON.parse(localStorage.getItem("post") as string)
    

  return (
    <div className='max-w-[1440px] mx-auto my-0'> 
       <div className='flex flex-wrap sm:flex-col sm:flex-nowrap gap-5 mb-8 justify-center'>
       {posts?.map((post: any) => (
          <Post data={post} key={post.title} />
        ))}
        {!posts && <span>There is no post. Let's add your first post.</span>}
       </div>
    </div>
  )
}

export default PostList
