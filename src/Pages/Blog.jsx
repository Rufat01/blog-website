import User from '../assets/User.png'
import { useLocation } from 'react-router-dom';

const Blog = () => {


    const data = useLocation();
    const {image, category, title, author, publish} = data.state

  return (
    <div className="max-w-[1440px] my-0 mx-auto flex justify-center">

        <div className="max-w-[800px] sm:mt-8 sm:px-5 md:px-5">
            <span className="text-center text-sm py-1 px-[10px] text-white bg-[#4B6BFB] rounded-md">{category}</span>
            <h2 className="font-bold text-4xl sm:text-3xl leading-[45px] my-5">{title}</h2>
            <div className="flex items-center gap-5 mb-8">
                 <div className="flex items-center gap-3">
                    <img src={User} alt="" />
                    <span className="text-[#97989F]">{author}</span>
                 </div>
                <p className="text-[#97989F]">August 20, 2022</p>
            </div>

            <div>
                <img src={image} alt="" className='w-full mb-8' />
                <p className='text-xl sm:text-lg text-[#3B3C4A] leading-8 mb-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nihil quas magni quia architecto omnis quibusdam nostrum laboriosam, dolores voluptatem rem suscipit eaque consequuntur minima animi ullam, aperiam possimus tempore?</p>
            </div>

        </div>

    </div>
  )
}

export default Blog
