import ProductList from '../Components/ProductList'
import ImageSlider from '../Components/CategorySlide'
import ReviewSlider from '../Components/ReviewSlide'
import LandingSlider from '../Components/Hero';

const Home = () => {
  return (
    <div > 
        <section id="hero" className="element scroll-mt-20">
            <LandingSlider />
        </section>
        <section id="ImageSlider" className="element py-15">
            <ImageSlider />
        </section>

        <section id="product" className="element scroll-mt-20">
            <ProductList />
        </section>

        <section id="ReviewSlider" className="element py-10 scroll-mt-20">
            <ReviewSlider />
        </section>


    </div>
  )
}

export default Home