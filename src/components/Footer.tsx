const Footer = () => {
  return (
    <footer className=" bg-[#E8E8EA] pt-16 sm:pt-12">
      <div className="flex items-center justify-around sm:flex-col sm:w-full max-w-[1440px] my-0 mx-auto mb-16 sm:items-start sm:px-6 md:px-6 md:flex-wrap md:gap-10">

      <div className="flex flex-col max-w-[290px] pb-12 sm:w-full">
        <h4 className="font-semibold mb-3">About</h4>
        <p className="text-[#696A75] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <span className="font-semibold">
          Email: <a href="mailto:rufatmustafayev04@gmail.com" className="font-normal hover:text-[#4B6BFB]">
            rufatmustafayev04@gmail.com
          </a>
        </span>
        <span className="font-semibold">
          Phone: <a href="tel:+994508364315" className="font-normal hover:text-[#4B6BFB]">(+994) 50 836 43 15</a>
        </span>
      </div>

      <div className="flex items-center justify-center sm:flex-col gap-20 sm:gap-10 max-w-[495px] pb-4 sm:mb-10 sm:w-full sm:items-start">
        <div className="flex flex-col">
          <h4 className="font-semibold mb-6">Quick Link</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="hover:text-[#4B6BFB] hover:ml-1 transition-all duration-300">Home</a> 
            </li>
            <li>
              <a href="#" className="hover:text-[#4B6BFB] hover:ml-1 transition-all duration-300">About</a> 
            </li>
            <li>
              <a href="#" className="hover:text-[#4B6BFB] hover:ml-1 transition-all duration-300">Blog</a> 
            </li>
            <li>
              <a href="#" className="hover:text-[#4B6BFB] hover:ml-1 transition-all duration-300">Archived</a> 
            </li>
            <li>
              <a href="#" className="hover:text-[#4B6BFB] hover:ml-1 transition-all duration-300">Author</a> 
            </li>
            <li>
              <a href="#" className="hover:text-[#4B6BFB] hover:ml-1 transition-all duration-300">Contact</a> 
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
            <h4 className="font-semibold mb-6">Category</h4>
          <ul className="flex flex-col gap-2">
          <li>
              <a href="#" className="hover:text-[#4B6BFB] hover:ml-1 transition-all duration-300">Lifestyle</a> 
            </li>
            <li>
              <a href="#" className="hover:text-[#4B6BFB] hover:ml-1 transition-all duration-300">Technology</a> 
            </li>
            <li>
              <a href="#" className="hover:text-[#4B6BFB] hover:ml-1 transition-all duration-300">Travel</a> 
            </li>
            <li>
              <a href="#" className="hover:text-[#4B6BFB] hover:ml-1 transition-all duration-300">Business</a> 
            </li>
            <li>
              <a href="#" className="hover:text-[#4B6BFB] hover:ml-1 transition-all duration-300">Economy</a> 
            </li>
            <li>
              <a href="#" className="hover:text-[#4B6BFB] hover:ml-1 transition-all duration-300">Sports</a> 
            </li>
          </ul>
        </div>
      </div>


      <div className="max-w-[392px] bg-white py-8 px-9 flex flex-col justify-center items-center rounded-xl sm:w-full">
          <h4 className="font-semibold text-xl mb-2">Weekly Newsletter</h4>
          <p className="text-[#696A75] mb-7">Get blog articles and offers via email</p>
          <form action="#" className="flex flex-col w-full gap-2">
             <input type="email" placeholder="Your Email" className="px-4 h-12 border border-[#DCDDDF] rounded-md"/>
             <button className="w-full py-3 bg-[#4B6BFB] hover:bg-blue-700 transition-all duration-300 text-white rounded-md">Subscribe</button>
          </form>
      </div>


      </div>

        <div className="border-t border-[#DCDDDF] py-6 flex items-center justify-center">
            <p>© Rufat Mustafayev 2024. All Rights Reserved.</p>
        </div>

    </footer>
  );
};

export default Footer;
