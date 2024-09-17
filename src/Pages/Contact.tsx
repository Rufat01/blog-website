import React from 'react'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}  className='max-w-[1440px] my-0 mx-auto py-5'>
        <div className='flex flex-col justify-center items-center'>

        <div className='max-w-[600px] flex flex-col items-center gap-4 mb-10'> 
            <h1 className='text-4xl uppercase tracking-[5px] font-bold sm:text-2xl sm:tracking-widest'>Contact Us</h1>
            <p className='text-center text-gray-500 sm:text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut nesciunt vel perferendis, commodi nostrum pariatur. Voluptatibus natus quisquam perspiciatis.</p>
        </div>

        <div className='flex justify-center lg:gap-[100px] md:gap-[25px] sm:flex-col'>
           <div className='flex flex-col gap-8 w-[350px]'>
               <div className='flex flex-col border-b pb-8'>
                <h3 className='font-bold tracking-wider uppercase mb-3'>Snail Mail</h3>
                <span className='text-sm text-gray-600 mb-1'>Beardbrand</span>
                <span className='text-sm text-gray-600 mb-1'>PO Box 13124</span>
                <span className='text-sm text-gray-600 mb-1'>Austin, TX 78711</span>
               </div>
               <div className='flex flex-col border-b pb-8'>
                <h3 className='font-bold tracking-wider uppercase mb-3'>Electronic Mail</h3>
                <a href="#" className='text-sm text-gray-600 mb-1'>support@blogpage.com</a>
               </div>
               <div className='flex flex-col border-b pb-8'>
                <h3 className='font-bold tracking-wider uppercase mb-3'>Phone Support</h3>
                <span className='text-sm text-gray-600 mb-1'>Hours: 9am - 5pm(CST), Monday - Friday</span>
                <a href="#" className='text-sm text-gray-600 mb-1'>844-662-3273</a>
               </div>
           </div>

           <div className='sm:mt-5'>
               <form className='flex flex-col w-[350px] gap-3'>
                  <label htmlFor="name" className='uppercase tracking-wider font-bold mb-3'>Name</label>
                  <input type="text" id='name' className='border px-1 py-1' />

                  <label htmlFor="email" className='uppercase tracking-wider font-bold mb-3'>Email</label>
                  <input type="text" id='email' className='border px-1 py-1' />

                  <label htmlFor="phone" className='uppercase tracking-wider font-bold mb-3'>Phone</label>
                  <input type="text" id='phone' className='border px-1 py-1' />

                  <label htmlFor="text" className='uppercase tracking-wider font-bold mb-3'>Email</label>
                  <textarea id="text" className='border w-full h-[85px] p-1 resize-none'></textarea>
               </form>
           </div>

        </div>

        </div>
    </motion.div>
  )
}

export default Contact
