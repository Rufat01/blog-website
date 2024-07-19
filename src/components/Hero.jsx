import HeroImg from '../assets/Hero.png'
import User from '../assets/User.png'

const Hero = () => {
  return (
    <div className='relative w-full rounded-xl -z-10'>
      <img src={HeroImg} className='w-full object-cover rounded-xl sm:h-[250px] sm:rounded-none md:rounded-none' alt="" />
      <div className='sm:px-5'>
      <div className='absolute flex flex-col max-w-[600px] rounded-xl bg-white p-10 bottom-[-50px] shadow-md left-16 md:w-[450px] sm:w-full sm:relative sm:top-[-80px] sm:left-0 sm:p-7'>
          <span className='mb-4 w-[95px] text-center py-1 px-[10px] rounded-md text-sm text-white bg-[#4B6BFB] inline-block'>Technology</span>
          <h1 className='mb-6 text-4xl sm:text-lg md:text-xl font-semibold'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
          <div className='flex items-center gap-5 sm:flex-col sm:items-start'>
            <div className='flex items-center gap-3'>
                <img src={User} alt="" />
                <h4 className='text-[#97989F] sm:text-sm'>Jason Francisco</h4>
            </div>
            <span className='text-[#97989F] sm:text-sm'>August 20, 2024</span>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
