import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../redux/features/cart/booksApi';
const categories = ["Choose a genre", "business", "fiction", "horror", "adventure"];

function TopSellers() {
  const [selectedCategory, setSelectedCategory] = useState('Choose a genre');
    const {data:books =[]}=useFetchAllBooksQuery();
    console.log(books)
  


   
    const filteredBooks = selectedCategory === "Choose a genre" 
        ? books 
        : books.filter(book => book.category === selectedCategory.toLowerCase());

    return (
        <div className='py-10 md:px-16 px-6 flex flex-col gap-6'>
            <h2 className='md:text-4xl text-2xl font-medium mb-6'>Top Sellers</h2>
            <div>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    name="category" 
                    id="category" 
                    className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div><div className=' p-1'>
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
    1180:{
      slidesPerView: 2,
      spaceBetween: 40,
    }
  }}
  modules={[Pagination, Navigation]}
  className="mySwiper"
>
  {filteredBooks.length > 0 && filteredBooks.map((book, index) => (
    <SwiperSlide key={book._id}>
      <BookCard book={book} />
    </SwiperSlide>
  ))}
</Swiper>
      </div>
        </div>
    );
}

export default TopSellers;