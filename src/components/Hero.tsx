import HeroImg from "../assets/Hero.png";
import User from "../assets/User.png";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

type PostType = {
  img: string;
  category: string;
  title: string;
  content: string;
  author: string;
  publishDate: string;
};

const Hero = ({posts} : {posts: PostType[]}) => {
    
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: posts?.length > 1 ? true : false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative w-full rounded-xl max-w-[1440px] my-0 mx-auto">
      <img
        src={HeroImg}
        className="w-full object-cover rounded-xl sm:h-[250px] sm:rounded-none md:rounded-none"
        alt=""
      />

      {posts?.length > 0 && <div className="sm:px-5">
          <div className="absolute overflow-x-hidden flex flex-col w-[600px] rounded-xl bg-white p-10 bottom-[-50px] shadow-md left-16 md:w-[450px] sm:w-full sm:relative sm:top-[-80px] sm:left-0 sm:p-7">
            <div>
              <Slider {...settings}>
                {posts?.map((post: any, index) => (
                  <div key={index}>
                    <span className="mb-4 w-[95px] text-center py-1 px-[10px] rounded-md text-sm text-white bg-[#4B6BFB] inline-block">
                      {post.category}
                    </span>
                    <h1 className="mb-6 text-4xl sm:text-lg md:text-xl font-semibold">
                      {post.title}
                    </h1>
                    <div className="flex items-center gap-5 sm:flex-col sm:items-start">
                      <div className="flex items-center gap-3">
                        <img src={User} alt="" />
                        <h4 className="text-[#97989F] sm:text-sm">
                          {post.author}
                        </h4>
                      </div>
                      <span className="text-[#97989F] sm:text-sm">
                        {post.publishDate}
                      </span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
      </div>}
    </div>
  );
};

export default Hero;
