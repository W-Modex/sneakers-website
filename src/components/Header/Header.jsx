import React from 'react'
import { useState, useEffect } from 'react'
import menuIcon from '../../assets/images/icon-menu.svg'
import cartIcon from '../../assets/images/icon-cart.svg'
import logo from '../../assets/images/logo.svg'
import firstImg from "../../assets/images/image-product-1.jpg";
import avatarImg from '../../assets/images/image-avatar.png'
import closeIcon from '../../assets/images/icon-close.svg'
import deleteIcon from '../../assets/images/icon-delete.svg'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFromCart } from '../../store/cartSlice'

function Header({numberOfProducts}) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [menuOpened, setMenuOpened] = useState(false)
    const [cartOpened, setCartOpened] = useState(false)
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cart);

    const handleDelete = (product) => {
      dispatch(deleteFromCart({product}))
    }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`w-full bg-transparent px-8 py-6 lg:flex lg:justify-center `}>
        <nav className='w-full max-w-[1440px] flex justify-between items-center'>
            <div className='flex lg:gap-24 h-6'>
            <img src={menuIcon} className='cursor-pointer mr-5 w-6 lg:hidden hover:scale-110' onClick={() => setMenuOpened(true)} />
            <img src={logo} className='cursor-pointer w-[120px] lg:w-48' />
            {windowWidth > 1024 ? 
            <div className='flex gap-8 -translate-y-1 text-2xl text-dark-grayish-blue'>
                <p className='border-b-4 border-transparent opacity-75 hover:opacity-100 cursor-pointer pb-10 hover:border-orange-500'>Collections</p>
                <p className='border-b-4 border-transparent opacity-75 hover:opacity-100 cursor-pointer pb-10 hover:border-orange-500'>Men</p>
                <p className='border-b-4 border-transparent opacity-75 hover:opacity-100 cursor-pointer pb-10 hover:border-orange-500'>Women</p>
                <p className='border-b-4 border-transparent opacity-75 hover:opacity-100 cursor-pointer pb-10 hover:border-orange-500'>About</p>
                <p className='border-b-4 border-transparent opacity-75 hover:opacity-100 cursor-pointer pb-10 hover:border-orange-500'>Contact</p>
        </div>
            : null}
             </div>
             {menuOpened &&
                    <div className={`absolute bg-black bg-opacity-75 h-full w-full top-0 left-0 z-40 lg:hidden`} onClick={() => setMenuOpened(false)}></div>
                }
                {menuOpened ?
                    <div className='absolute bg-white h-full max-w-[500px] w-[55%] top-0 left-0 z-50'>
                        <img src={closeIcon} onClick={() => setMenuOpened(false)} className={`w-8  cursor-pointer top-6 left-6 relative lg:hidden hover:scale-110 ${menuOpened ? null : 'hidden'}`} />
                  <div className='flex flex-col p-8 pt-16 text-2xl text-very-dark-blue font-bold'>
                          <a href='/sneakers-website' className=' opacity-75 hover:opacity-100 cursor-pointer pb-10'>Collections</a>
                          <a href='/sneakers-website' className=' opacity-75 hover:opacity-100 cursor-pointer pb-10'>Men</a>
                          <a href='/sneakers-website' className=' opacity-75 hover:opacity-100 cursor-pointer pb-10 '>Women</a>
                          <a href='/sneakers-website' className=' opacity-75 hover:opacity-100 cursor-pointer pb-10 '>About</a>
                          <a href='/sneakers-website' className='border-b-4 border-transparent opacity-75 hover:opacity-100 cursor-pointer pb-10 '>Contact</a>
                  </div>
                    </div>
                    : null}
            <div className='flex justify-self-end gap-4 lg:gap-8'>
                <div>
                  <p className='rounded-[50%] text-white font-bold w-6 text-sm absolute z-20 top-[2%] bg-orange-400 text-center translate-x-7'>{cartState.productsInCart.length > 1 ? cartState.productsInCart.length-1 : null}</p>
                <img src={cartIcon} onClick={() => setCartOpened(prev => !prev)} className='w-10 cursor-pointer lg:w-12 hover:scale-110'/>
                </div>
                <img src={avatarImg} className='w-10 cursor-pointer lg:w-12 hover:scale-125 hover:border-orange-500 hover:border-2 rounded-[50%]' />
            </div>
        </nav>
                {cartOpened && (
                  <div className='bg-white rounded-lg top-[10%] absolute overflow-y-auto flex flex-col left-[12%] right-[12%] max-h-[300px] lg:max-w-[500px] lg:border-2 lg:border-slate-200 lg:rounded-xl lg:-right-[46%] z-30 m-auto'>
                    <p className='font-bold text-2xl p-8'>Cart</p>
                    <p className={`text-dark-grayish-blue text-xl text-center mt-8 mb-20 ${cartState.productsInCart.length > 1 ? 'hidden' : null}`}>Your cart is empty.</p>
                    {cartState.productsInCart.map(product => product.productId !== 0 && (
                      <div className='p-5 gap-3 lg:gap-5 flex items-center'>
                        <img src={firstImg} className='max-w-[60px] lg:max-w-[80px] rounded-lg'/>
                        <div>
                        <p className='text-lg text-dark-grayish-blue'>{product.productName}</p>
                        <p className=' text-dark-grayish-blue'>${product.productPrice}.00 x {product.productAmount} <span className=' text-very-dark-blue text-lg font-bold'>${product.productPrice * product.productAmount}.00</span></p>
                        </div>
                        <img src={deleteIcon} onClick={() => handleDelete(product)} className='h-5 cursor-pointer hover:scale-110'/>
                      </div>
                    ))}
                    {cartState.productsInCart.length > 1 ? 
                    <button onClick={() => alert('Not Added Yet.')} className='bg-orange-500 p-3 mx-5 mb-5 rounded-lg text-white text-xl font-bold '>
                      Checkout
                    </button>
                     : null}
                  </div>
                )}
    </div>
  )
}

export default Header