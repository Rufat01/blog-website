import React from 'react'
import { Post } from '../components/Posts';
import { motion } from "framer-motion"

const BlogList = () => {

    const posts = JSON.parse(localStorage.getItem("post") as string)


  return (
    <div className='max-w-[1440px] mx-auto my-0 py-9'> 
       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='flex flex-wrap sm:flex-col sm:flex-nowrap gap-5 mb-8 justify-center'>
       {posts?.map((post: any) => (
          <Post data={post} key={post.title} />
        ))}
        {!posts && <span>There is no blog. Let's add your first blog.</span>}
       </motion.div>
    </div>
  )
}

export default BlogList
