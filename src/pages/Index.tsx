 import { CartProvider } from "@/context/CartContext";
 import Navbar from "@/components/Navbar";
 import HeroSection from "@/components/HeroSection";
 import MenuSection from "@/components/MenuSection";
 import OurStorySection from "@/components/OurStorySection";
 import ReviewsSection from "@/components/ReviewsSection";
 import ContactSection from "@/components/ContactSection";
 import Footer from "@/components/Footer";
 
 const Index = () => {
   return (
     <CartProvider>
       <div className="min-h-screen bg-background scroll-smooth">
         <Navbar />
         <HeroSection />
         <MenuSection />
         <OurStorySection />
         <ReviewsSection />
         <ContactSection />
         <Footer />
       </div>
     </CartProvider>
   );
 };
 
 export default Index;