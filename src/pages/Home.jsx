import CTASection from "../components/home/CTASection";
import FeaturedProductsSection from "../components/home/FeaturedProductsSection";
import HeroSection from "../components/home/HeroSection";
import StorySetion from "../components/home/StorySection";
import Testimonials from "../components/home/TestimonialsSection";


const Home = () => {
    return (
        <>
            <HeroSection />
            <FeaturedProductsSection />
            <StorySetion />
            <Testimonials/>
            <CTASection/>
        </>
    )
};

export default Home;