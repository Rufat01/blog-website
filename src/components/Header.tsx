import React, { useEffect, useRef, useState } from "react";
import Search from "../assets/Search.svg";
import SearchLight from "../assets/SearchLight.svg";
import Sun from "../assets/Sun.svg";
import SunDarkMode from "../assets/SunDark.svg";
import { Link } from "react-router-dom";

type HeaderProps = {
  active: boolean,
  setActive?: React.Dispatch<React.SetStateAction<boolean>>,
  darkMode: (prevMode: any) => void
}

type FilteredBlog = {
  title: string
}

const navLinks=[
  {
    title: 'Home',
    navigate: '/'
  },
  {
    title: 'Blog',
    navigate: 'blog'
  },
  {
    title: 'Post',
    navigate: 'post'
  },
  {
    title: 'Contact',
    navigate: 'contact'
  }
]


const Header = ({active, darkMode} : HeaderProps) => {
    const [search, setSearch] = useState<boolean>(false)
    const [openMenu, setOpenMenu] = useState<boolean>(false) 
    const [searchBlogs, setSearchBlogs] = useState<string>('')
    const [filteredBlog, setFilteredBlog] = useState<FilteredBlog[]>([])

    const ref = useRef();

    const blogs = JSON.parse(localStorage.getItem("post") as string)

    const handleSearch = () => {
      const filteredData = blogs?.filter((blog: any) => blog.title.toLowerCase().includes(searchBlogs.toLowerCase()))
      setFilteredBlog(filteredData)
    }

    useEffect(() => {
      handleSearch();
    }, [searchBlogs])
  
    useEffect(() => {
      window.addEventListener('scroll', (e) => {
        const scrollY = Math.floor(window.scrollY)
        if(scrollY > 100){
            ref.current.classList.add('active');
        }else{
            ref.current.classList.remove('active');
        }
      })
    }, [])
    
  return (
    <div className="h-[100px] sm:h-[78px] md:h-[105px]">
      <div className="max-w-[1440px] my-0 mx-auto">
        <div className="flex justify-between items-center py-8 px-5 sm:py-5 navbar top-0 left-0 z-50 bg-white w-full border-b" ref={ref}>
        <div>
          <Link to="/">
            <h1 className="text-3xl">Meta<span className="font-bold">Blog</span></h1>
          </Link>
        </div>
        <nav className="px-[116px] sm:hidden md:hidden">
          <ul className="flex items-center gap-10">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.navigate} className="text-[17px] hover:text-[#4B6BFB] transition-all duration-300">{link.title}</Link>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-10 sm:gap-3">
            <div className="relative">
                <input type="text" value={searchBlogs} onChange={(e) => setSearchBlogs(e.target.value)} className="w-[166px] md:w-[350px] bg-[#F4F4F5] rounded-md pl-[10px] pr-[30px] py-2 sm:hidden" placeholder="Search"/>
                <img src={active ? SearchLight : Search} className="absolute top-[9px] w-[22px] right-2 sm:left-[-35px] sm:top-1 sm:w-8" onClick={() => setSearch(t => !t)} alt="" />
                <img src={active ? SunDarkMode : Sun} className="lg:hidden md:hidden sm:w-9" onClick={() => darkMode((prevMode: boolean) => !prevMode)} />
                {searchBlogs.length > 0 && <div className="absolute w-full py-2 border z-10 sm:hidden left-0 bg-white">
                    {filteredBlog?.map((blog, index) => (
                      <Link to={`/blog/${blog.title}`} state={blog} onClick={() => setSearchBlogs('')} className="block p-2 hover:bg-gray-200 transition-all duration-300" key={index}>{blog.title}</Link>
                    ))}
                </div>}
            </div>

            <div className={`${active ? "bg-[#4B6BFB]" : "bg-[#F4F4F5]"} switched w-12 h-7 rounded-full p-[3px] sm:hidden`} onClick={() => darkMode((prevMode: boolean) => !prevMode)}> 
               <div className={`${active ? "ml-[20px] rotate-[90deg]" : ''} w-[22px] h-[22px] bg-white flex items-center justify-center rounded-full shadow-md transition-all duration-500`}>
                   <img src={Sun} alt="" />
               </div>
            </div>

            <div className="flex flex-col gap-[6px] lg:hidden burger-menu" onClick={() => setOpenMenu(t => !t)}>
                <span className={`${openMenu ? 'rotate-[50deg] ml-[2px] mb-[-4px]' : ''} w-4 h-[2px] rounded-full ${active ? 'bg-white' : 'bg-black'} transition-all duration-300`}></span>
                <span className={`${openMenu ? 'rotate-[-50deg]' : ''} w-7 h-[2px] rounded-full ${active ? 'bg-white' : 'bg-black'} transition-all duration-300`}></span>
                <span className={`${openMenu ? 'rotate-[50deg] mt-[-3px] ml-[9.8px]' : ''} w-4 ml-3 q h-[2px] rounded-full ${active ? 'bg-white' : 'bg-black'} transition-all duration-300`}></span>
            </div>
        </div>

        <nav className={`${openMenu ? 'w-full' : 'w-0 overflow-x-hidden'} lg:hidden absolute right-0 top-[77px] md:top-[104px] transition-all duration-300 bg-gray-100/80 backdrop-blur-sm z-10`}>
          <ul className="flex items-center flex-col gap-10 py-5">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.navigate} onClick={() => setOpenMenu(false)} className="text-[17px] w-full text-center hover:text-[#4B6BFB] transition-all duration-300">{link.title}</Link>
            ))}
          </ul>
        </nav>

        </div>

      </div>
      <div className="lg:hidden md:hidden z-20 relative">

         <input type="text" value={searchBlogs} onChange={(e) => setSearchBlogs(e.target.value)} className={`${search ? 'animate__slideInDown block' : 'hidden'} transition-all w-full bg-[#F4F4F5] pl-[10px] pr-[30px] py-2 animate__animated`} placeholder="Search"/>

         {searchBlogs.length > 0 && <div className="absolute w-full py-2 border z-10 sm:top-10 left-0 bg-white">
                    {filteredBlog?.map((blog, index) => (
                      <Link to={`/blog/${blog.title}`} state={blog} onClick={() => {setSearchBlogs(''), setSearch(false)}} className="block p-2 hover:bg-gray-200 transition-all duration-300" key={index}>{blog.title}</Link>
          ))}
         </div>}     
  
      </div>
    </div>
  );
};

export default Header;
