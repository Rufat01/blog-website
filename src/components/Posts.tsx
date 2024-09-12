import { Link } from "react-router-dom";
import User from "../assets/User.png";
import Popup from "reactjs-popup";
import Select from "react-select";
import "reactjs-popup/dist/index.css";
import React, { useEffect, useState } from "react";

const options = [
  { value: "category", label: "Category" },
  { value: "lifestyle", label: "Lifestyle" },
  { value: "technology", label: "Technology" },
  { value: "travel", label: "Travel" },
  { value: "business", label: "Business" },
  { value: "economy", label: "Economy" },
  { value: "sports", label: "Sports" },
];
type Posts = {
      img: string,
      category: string,
      title: string,
      content: string,
      author: string,
      publishDate: string
}

const Posts = ({handleHeroPost} : {handleHeroPost: () => void}) => {
  const [img, setImg] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [posts, setPosts] = useState<Posts[]>([]);
  const [open, setOpen] = useState<boolean>(false)
  
  
  useEffect(() => {
    let storedPosts = JSON.parse(localStorage.getItem("post") as string)
    if (storedPosts){
       setPosts(storedPosts)
    }
  }, [])

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post = {
      img,
      category,
      title,
      content,
      author,
      publishDate: new Date().toLocaleString()
    };
    setImg('')
    setCategory('')
    setTitle('')
    setContent('')
    setAuthor('')
    setOpen(false)
    setBlogsToLocal(post);
    handleHeroPost();
    alert("Post added successfully")
  };

  const setBlogsToLocal = (post: Posts) => {
    
    const isExistPost = localStorage.getItem("post");
    if (isExistPost === null) {
      localStorage.setItem("post", JSON.stringify([post]));
      setPosts([post]);
    } else {
      const updatedPosts = [...posts, post];
      localStorage.setItem("post", JSON.stringify(updatedPosts));
      setPosts(updatedPosts);
    }
  }

  const clearFromLocal = () => {
      const request = confirm("Are you sure clear all posts?")
      if(request){
         localStorage.removeItem("post");
         setPosts([]);
         handleHeroPost();
      }
  }


  return (
    <div className="flex flex-col mt-24 sm:mt-0 sm:px-5 md:px-5 max-w-[1440px] my-0 mx-auto">
      <h4 className={`${posts.length > 0 ? 'sm:mt-0' : 'sm:mt-7'} font-bold text-2xl mb-8`}>Latest Post</h4>
      <div className="flex flex-wrap sm:flex-col sm:flex-nowrap gap-5 mb-8 justify-center">
        {posts?.map((post) => (
          <Post data={post} key={post.title} />
        ))}
      </div>
      <div className="flex justify-center mb-20">
        <Popup
          open={open}
          className="active sm:w-[100px]"
        >
          <h1 className="font-normal italic text-2xl text-center pb-2 capitalize">
            Add your post
          </h1>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="input-container border border-gray-300 rounded-md">
              <input type="file" onChange={handleFileChange} />
            </div>
            <Select
              options={options}
              defaultValue={options[0]}
              onChange={(e: any) => setCategory(e.label)}
            />
            <input
              type="text"
              placeholder="Title"
              className="h-9 px-[11px] border border-gray-300"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              rows={10}
              className="resize-none p-[11px] border border-gray-300"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <input
              type="text"
              placeholder="Author"
              className="h-9 px-[11px] border border-gray-300"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <button
              disabled={!img || !title || !content || !category || !author}
              type="submit"
              className="py-3 px-4 border border-[#696A75] text-[#696A75] rounded-md hover:bg-[#4B6BFB] hover:text-white hover:border-[#4B6BFB] transition-all duration-300"
            >
              Publish
            </button>
          </form>
        </Popup>
        <button onClick={() => setOpen(open => !open)} className="py-3 px-4 border border-[#696A75] text-[#696A75] rounded-md hover:bg-[#4B6BFB] hover:text-white hover:border-[#4B6BFB] transition-all duration-300">
              Add Post
        </button>
        {posts?.length >= 1 ? <button onClick={clearFromLocal} className="py-3 px-4 border border-[#696A75] text-[#696A75] rounded-md hover:bg-[#4B6BFB] hover:text-white hover:border-[#4B6BFB] ml-2 transition-all duration-300">
              Clear All
        </button> : ''}
      </div>
    </div>
  );
};

export const Post = ({ data } : {data: Posts}) => {
  return (
    <Link
      to={`/blog/${data.title}`}
      state={data}
      className="max-w-[345px] sm:max-w-full border border-[#E8E8EA] p-4 rounded-xl hover:border-[#4B6BFB] hover:shadow-md transition-all duration-300"
    >
      <div>
        <img src={data.img} className="mb-4 w-[350px] h-[250px] object-cover rounded-md" alt={data.title} />
      </div>
      <div>
        <span className="text-center text-sm py-1 px-[10px] text-[#4B6BFB] bg-[#4B6BFB]/10 rounded-md">
          {data.category}
        </span>
        <h1 className="text-lg font-semibold mt-4 mb-5">{data.title}</h1>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <img src={User} alt="Author" />
            <span className="text-[#97989F]">{data.author}</span>
          </div>
          <p className="text-[#97989F]">{data.publishDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default Posts;
