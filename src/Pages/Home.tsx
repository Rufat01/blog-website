import "animate.css";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

type PostType = {
  img: string;
  category: string;
  title: string;
  content: string;
  author: string;
  publishDate: string;
};

const Home = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const getHeroPost = () => {
    let storedPosts = JSON.parse(localStorage.getItem("post") as string)
    setPosts(storedPosts)
  }

  useEffect(() => {
    getHeroPost();
  }, [])

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <Hero posts={posts} />
        <Posts handleHeroPost={getHeroPost} />
    </motion.div>
  )
}

export default Home
