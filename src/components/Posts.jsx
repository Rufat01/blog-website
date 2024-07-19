import { useId } from "react"
import Post1 from '../assets/Post1.png'
import User from '../assets/User.png'

const posts = [
    {
        id: useId,
        image: Post1,
        category: 'Technology',
        title: 'The Impact of Technology on the Workplace: How Technology is Changing',
        author: 'Tracey Wilson',
        publish: ''
    },
    {
        id: useId,
        image: Post1,
        category: 'Technology',
        title: 'The Impact of Technology on the Workplace: How Technology is Changing',
        author: 'Tracey Wilson',
        publish: ''
    },
    {
        id: useId,
        image: Post1,
        category: 'Technology',
        title: 'The Impact of Technology on the Workplace: How Technology is Changing',
        author: 'Tracey Wilson',
        publish: ''
    },
    {
        id: useId,
        image: Post1,
        category: 'Technology',
        title: 'The Impact of Technology on the Workplace: How Technology is Changing',
        author: 'Tracey Wilson',
        publish: ''
    },
    
    
]


const Posts = () => {
    console.log(posts);
  return (
    <div className="flex flex-col mt-24 sm:mt-0 sm:px-5 md:px-5  max-w-[1440px] my-0 mx-auto">
         <h4 className="font-bold text-2xl mb-8">Latest Post</h4>
         <div className="flex flex-wrap sm:flex-col sm:flex-nowrap gap-5 mb-8 justify-center">
            {posts.map((post) => (
                <Post data={post} key={post.id} />
            ))}
         </div>
         
         {posts.length >= 4 && <div className="flex justify-center mb-20">
            <button className="py-3 px-4 border border-[#696A75] text-[#696A75] rounded-md hover:bg-[#4B6BFB] hover:text-white hover:border-[#4B6BFB] transition-all duration-300">View All Post</button>
         </div>}
    </div>
  )
}

const Post = ({data}) => {
    return (
            <div className="max-w-[345px] sm:max-w-full border border-[#E8E8EA] p-4 rounded-xl hover:border-[#4B6BFB] hover:shadow-md transition-all duration-300">
                 <div>
                    <img src={data.image} className="mb-4" alt="" />
                 </div>
                 <div>
                    <span className="text-center text-sm py-1 px-[10px] text-[#4B6BFB] bg-[#4B6BFB]/10 rounded-md">{data.category}</span>
                    <h1 className="text-lg font-semibold mt-4 mb-5">{data.title}</h1>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-3">
                            <img src={User} alt="" />
                            <span className="text-[#97989F]">{data.author}</span>
                        </div>
                        <p className="text-[#97989F]">August 20, 2022</p>
                    </div>
                 </div>
             </div>
    )
}

export default Posts
