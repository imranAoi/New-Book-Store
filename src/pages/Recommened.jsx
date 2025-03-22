import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import BookCard from './BookCard';
import { useFetchAllBooksQuery } from '../redux/features/cart/booksApi';

function Recommened() {
  const {data:books=[]}=useFetchAllBooksQuery();
  return (
    <div className='py-10 md:px-16 px-6 flex flex-col gap-6'>
      <h2 className='md:text-4xl text-2xl font-medium mb-6'>Recommended for you</h2>
      <div className='p-1'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1180: {
              slidesPerView: 2,
              spaceBetween: 40,
            }
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {books.length > 0 && books.slice(8, 18).map((book) => (
            <SwiperSlide key={book._id}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Recommened;