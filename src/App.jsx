import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderSlick from './components/Slider/SlickSlider'
import ProductInfos from './components/ProductInfos/ProductInfos';
import { useSelector, useDispatch } from 'react-redux';
import closeIcon from './assets/images/icon-close.svg'
import { toggleThumbnail } from './store/thumbnailSlice';

function App() {
  const showThumbnail = useSelector(state => state.thumbnail.showThumbnail)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleThumbnail = () => {
    dispatch(toggleThumbnail())
  }

  return (
    <div>
      {showThumbnail && windowWidth > 1024 && (
        <div className="fixed inset-0 z-40 flex justify-center items-center bg-black opacity-75" onClick={handleThumbnail}></div>
      )}
      <Header />
      <div className='lg:flex lg:justify-center'>
        <div className='flex flex-col lg:flex-row lg:mt-10 lg:max-w-[1440px]'>
          <div>
            <SliderSlick />
          </div>
          <div>
            <ProductInfos />
          </div>
        </div>
      </div>
      {showThumbnail && windowWidth > 1024 && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <img src={closeIcon} className='absolute w-6 top-[18%] left-[60%] cursor-pointer hover:scale-110' onClick={handleThumbnail}/>
          <SliderSlick />
        </div>
      )}
    </div>
  )
}

export default App
