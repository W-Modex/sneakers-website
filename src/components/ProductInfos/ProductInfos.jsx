import React, {useState} from 'react'
import iconPlus from '../../assets/images/icon-plus.svg'
import iconMinus from '../../assets/images/icon-minus.svg'
import cartIcon from '../../assets/images/icon-cart.svg'
import {useDispatch} from 'react-redux'
import { addToCart, deleteFromCart } from '../../store/cartSlice'
import { nanoid } from '@reduxjs/toolkit'


function ProductInfos() {
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const dispatch = useDispatch()
  const handleCart = () => {
    if (numberOfProducts === 0) return; 
    dispatch(addToCart({
      product: {
        productId: nanoid(),
        productName: 'Fall Limited Edition Sneakers',
        productPrice: 125,
        productAmount: numberOfProducts
      }
    }))
    setNumberOfProducts(0)
  }

  return (
    <div className='p-6 max-w-[600px] lg:mt-4'>
      <div>
      <p className='text-orange-500 font-semibold text-xl '>SNEAKER COMPANY</p>
      <h1 className='text-4xl lg:text-5xl font-semibold mt-4'>Fall Limited Edition Sneakers</h1>
      <p className='mt-4 text-dark-grayish-blue text-lg lg:text-xl lg:mt-8 lg:mb-6'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
     </div>
     <div className='flex justify-between lg:flex-col'>
      <div className='flex mt-4 gap-5 items-center'>
      <p className='text-3xl text-very-dark-blue font-bold'>$125.00</p>
      <p className='text-orange-500 text-xl font-bold'>50%</p>
      </div>
      <p className=' text-dark-grayish-blue translate-y-[18px] text-xl font-bold'>$250.00</p>
     </div>
     <div className='mt-8 lg:flex'>
        <div className='flex px-8 justify-between gap-10 lg:translate-y-2 items-center'>
          <img src={iconMinus} onClick={() => setNumberOfProducts(prev => prev > 0 ? prev-1 : 0)} className='w-8 lg:w-12 p-2 lg:p-0 cursor-pointer'  />
            <p className='text-2xl'>{numberOfProducts}</p>
          <img src={iconPlus} onClick={() => setNumberOfProducts(prev => prev < 10 ? prev+1 : 10)} className='w-8 p-2 lg:p-0 lg:w-12 cursor-pointer' />
        </div>
        <button onClick={handleCart} className='bg-orange-500 lg:rounded-xl  mt-6 rounded-lg py-4 flex text-white w-full text-xl items-center gap-2 justify-center'>
          <img src={cartIcon} className='w-8' />
          <p className='text-2xl font-bold'>Add to cart</p>
        </button>
     </div>
    </div>
  )
}

export default ProductInfos