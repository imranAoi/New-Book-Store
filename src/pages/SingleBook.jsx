import React from 'react'
import { useParams } from "react-router-dom"
import { useFetchBookByIdQuery } from '../redux/features/cart/booksApi';
import { FiShoppingCart } from "react-icons/fi"
import { addToCart } from '../redux/features/cart/cartSlice';
import { getImgUrl } from '../utils/getImgUrl';
import { useDispatch } from 'react-redux';
function SingleBook() {
    const {id}=useParams();
    const {data: book, isLoading ,isError }= useFetchBookByIdQuery(id);
    const dispatch =  useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    if(isLoading) return <div>Loading...</div>
    if(isError) return <div>Error happending to load book info</div>

  return (
    <div>
          <div className="max-w-lg shadow-md p-5">
            <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

            <div className=''>
                <div>
                    <img
                        src={`${getImgUrl(book?.coverImage)}`}
                        alt={book.title}
                        className="mb-8"
                    />
                </div>

                <div className='mb-5'>
                    <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author || 'admin'}</p>
                    <p className="text-gray-700 mb-4">
                        <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 mb-4 capitalize">
                        <strong>Category:</strong> {book?.category}
                    </p>
                    <p className="text-gray-700"><strong>Description:</strong> {book.description}</p>
                </div>

                <button onClick={() => handleAddToCart(book)} className="bg-amber-400 hover:bg-blue-950 hover:text-white rounded px-3 text-md py-1  space-x-1 flex items-center gap-1 ">
                        
                    <FiShoppingCart className="" />
                    <span>Add to Cart</span>

                </button>
            </div>
        </div>
</div>
    
  )
}

export default  SingleBook