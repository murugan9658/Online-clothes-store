import React from 'react'
import{Element} from 'react-scroll';
import ProductList from '../Components/ProductList'
import Contact from '../Components/Contact'
import ImageSlider from '../Components/CategorySlide'
import ReviewSlider from '../Components/ReviewSlide'
import Footer from '../Components/Footer'
import LandingSlider from '../Components/Hero';

const Home = () => {
  return (
    <div className='space-y-10'> 
        <Element name="hero" className="element">
            <LandingSlider />
        </Element>
        <Element name="ImageSlider" className="element  my-18">
            <ImageSlider />
        </Element>

        <Element name="product" className="element">
            <ProductList />
        </Element>

        <Element name="ReviewSlider" className="element">
            <ReviewSlider />
        </Element>
        <Element name="contact" className="element">
            <Contact />
        </Element>
        <Element name="footer" className="element">
            <Footer />
        </Element>

    </div>
  )
}

export default Home