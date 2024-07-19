import React from "react";
// icon
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import PicImg from "../assets/profile.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Reviews = () => {
  return (
    <div className="my-12 px-8 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint quidem consectetur! Eligendi, rerum laborum. Porro non eum esse hic quod distinctio corporis molestiae, pariatur voluptates sequi quis magni quasi?</p>
            <Avatar img={PicImg} alt="avatar of Jese" rounded className="w-10 my-3"/>
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO,ABC Ltd</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint quidem consectetur! Eligendi, rerum laborum. Porro non eum esse hic quod distinctio corporis molestiae, pariatur voluptates sequi quis magni quasi?</p>
            <Avatar img={PicImg} alt="avatar of Jese" rounded className="w-10 my-3"/>
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO,ABC Ltd</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint quidem consectetur! Eligendi, rerum laborum. Porro non eum esse hic quod distinctio corporis molestiae, pariatur voluptates sequi quis magni quasi?</p>
            <Avatar img={PicImg} alt="avatar of Jese" rounded className="w-10 my-3"/>
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO,ABC Ltd</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint quidem consectetur! Eligendi, rerum laborum. Porro non eum esse hic quod distinctio corporis molestiae, pariatur voluptates sequi quis magni quasi?</p>
            <Avatar img={PicImg} alt="avatar of Jese" rounded className="w-10 my-3"/>
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO,ABC Ltd</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint quidem consectetur! Eligendi, rerum laborum. Porro non eum esse hic quod distinctio corporis molestiae, pariatur voluptates sequi quis magni quasi?</p>
            <Avatar img={PicImg} alt="avatar of Jese" rounded className="w-10 my-3"/>
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO,ABC Ltd</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint quidem consectetur! Eligendi, rerum laborum. Porro non eum esse hic quod distinctio corporis molestiae, pariatur voluptates sequi quis magni quasi?</p>
            <Avatar img={PicImg} alt="avatar of Jese" rounded className="w-10 my-3"/>
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO,ABC Ltd</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint quidem consectetur! Eligendi, rerum laborum. Porro non eum esse hic quod distinctio corporis molestiae, pariatur voluptates sequi quis magni quasi?</p>
            <Avatar img={PicImg} alt="avatar of Jese" rounded className="w-10 my-3"/>
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO,ABC Ltd</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint quidem consectetur! Eligendi, rerum laborum. Porro non eum esse hic quod distinctio corporis molestiae, pariatur voluptates sequi quis magni quasi?</p>
            <Avatar img={PicImg} alt="avatar of Jese" rounded className="w-10 my-3"/>
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO,ABC Ltd</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-4">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint quidem consectetur! Eligendi, rerum laborum. Porro non eum esse hic quod distinctio corporis molestiae, pariatur voluptates sequi quis magni quasi?</p>
            <Avatar img={PicImg} alt="avatar of Jese" rounded className="w-10 my-3"/>
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO,ABC Ltd</p>
              </div>
            </div>
          </SwiperSlide>
         
         
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
