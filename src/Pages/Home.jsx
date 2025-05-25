import React from 'react'
import{Element} from 'react-scroll';
import ProductList from '../Components/ProductList'
import Contact from '../Components/Contact'
import ImageSlider from '../Components/CategorySlide'
import ReviewSlider from '../Components/ReviewSlide'
import LandingSlider from '../Components/Hero';

const Home = () => {
  return (
    <div > 
        <Element name="hero" className="element">
            <LandingSlider />
        </Element>
        <Element name="ImageSlider" className="element py-15">
            <ImageSlider />
        </Element>

        <Element name="product" className="element">
            <ProductList />
        </Element>

        <Element name="ReviewSlider" className="element py-10">
            <ReviewSlider />
        </Element>
        <Element name="contact" className="element">
            <Contact />
            
        </Element>

    </div>
  )
}

export default Home