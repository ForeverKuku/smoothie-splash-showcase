 import { useState } from "react";
 import { Button } from "@/components/ui/button";
 import chocolateSmoothie from "@/assets/chocolate-smoothie.png";
 import berrySmoothie from "@/assets/berry-smoothie.png";
 import mangoSmoothie from "@/assets/mango-smoothie.png";
 import greenSmoothie from "@/assets/green-smoothie.png";
 
 const smoothies = [
   {
     id: 1,
     name: "Chocolate",
     subtitle: "Dream",
     image: chocolateSmoothie,
     description: "Indulge in our rich chocolate smoothie made with premium cocoa, creamy milk, and topped with Oreo crumbles and whipped cream.",
   },
   {
     id: 2,
     name: "Berry",
     subtitle: "Blast",
     image: berrySmoothie,
     description: "A refreshing blend of strawberries, blueberries, and raspberries with a hint of honey for natural sweetness.",
   },
   {
     id: 3,
     name: "Mango",
     subtitle: "Paradise",
     image: mangoSmoothie,
     description: "Escape to the tropics with our luscious mango smoothie, blended with fresh mangoes and a splash of coconut milk.",
   },
   {
     id: 4,
     name: "Green",
     subtitle: "Detox",
     image: greenSmoothie,
     description: "Energize your day with spinach, kiwi, and apple blended into a refreshing green powerhouse smoothie.",
   },
 ];
 
 const HeroSection = () => {
   const [activeIndex, setActiveIndex] = useState(0);
   const activeSmoothie = smoothies[activeIndex];
 
   const scrollToMenu = (e: React.MouseEvent) => {
     e.preventDefault();
     document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
   };
 
   return (
     <section id="home" className="relative min-h-[calc(100vh-100px)] px-4 md:px-8 pb-8 md:pb-16">
       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
         {/* Left Content */}
         <div className="space-y-4 md:space-y-6 pt-4 md:pt-8 lg:pt-0 order-2 lg:order-1">
           <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] text-foreground">
             {activeSmoothie.name}
             <br />
             {activeSmoothie.subtitle}
           </h1>
           
           <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-md leading-relaxed">
             {activeSmoothie.description}
           </p>
 
           {/* Buttons */}
           <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2">
             <a href="#menu" onClick={scrollToMenu}>
               <Button className="btn-primary border-0">
                 Order Now
               </Button>
             </a>
             <a href="#menu" onClick={scrollToMenu}>
               <Button variant="outline" className="btn-outline">
                 View Menu
               </Button>
             </a>
           </div>
 
           {/* Flavor Selector */}
           <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6">
             {smoothies.map((smoothie, index) => (
               <button
                 key={smoothie.id}
                 onClick={() => setActiveIndex(index)}
                 className={`flavor-thumb w-14 h-14 md:w-16 md:h-16 ${index === activeIndex ? 'active' : ''}`}
               >
                 <img
                   src={smoothie.image}
                   alt={smoothie.name}
                   className="w-full h-full object-cover"
                 />
               </button>
             ))}
           </div>
         </div>
 
         {/* Right Content - Hero Image */}
         <div className="relative flex items-center justify-center order-1 lg:order-2">
           <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
             <img
               src={activeSmoothie.image}
               alt={activeSmoothie.name}
               className="w-full h-auto object-contain drop-shadow-2xl transition-all duration-500 animate-fade-in"
               key={activeSmoothie.id}
             />
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default HeroSection;