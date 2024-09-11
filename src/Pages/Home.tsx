import "animate.css";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import React, { useEffect, useState } from "react"

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
    <div>
        <Hero posts={posts} />
        <Posts handleHeroPost={getHeroPost} />
    </div>
  )
}

export default Home
