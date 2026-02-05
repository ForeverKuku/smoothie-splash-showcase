 const OurStorySection = () => {
   return (
     <section id="our-story" className="py-16 md:py-24 px-4 md:px-8 bg-background">
       <div className="max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           {/* Image Side */}
           <div className="relative">
             <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
               <div className="text-center p-8">
                 <div className="text-8xl mb-4">🍓🥭🥬</div>
                 <p className="text-muted-foreground text-lg">Fresh ingredients, crafted with love</p>
               </div>
             </div>
             {/* Floating badge */}
             <div className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg">
               <span className="font-heading text-lg font-semibold">Since 2018</span>
             </div>
           </div>
 
           {/* Content Side */}
           <div className="space-y-6">
             <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
               Our Story
             </h2>
             <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
               SmoothieBliss started with a simple mission: to bring the freshest, most delicious smoothies to Kigali. What began as a small juice bar has grown into a beloved destination for health-conscious individuals seeking quality refreshments.
             </p>
             <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
               We source our fruits locally whenever possible, supporting Rwandan farmers and ensuring every sip delivers peak freshness. Our recipes are crafted by nutritionists to maximize both flavor and health benefits.
             </p>
             <div className="grid grid-cols-3 gap-4 pt-4">
               <div className="text-center">
                 <div className="font-heading text-3xl md:text-4xl font-bold text-primary">50+</div>
                 <p className="text-sm text-muted-foreground">Recipes</p>
               </div>
               <div className="text-center">
                 <div className="font-heading text-3xl md:text-4xl font-bold text-primary">10K+</div>
                 <p className="text-sm text-muted-foreground">Happy Customers</p>
               </div>
               <div className="text-center">
                 <div className="font-heading text-3xl md:text-4xl font-bold text-primary">100%</div>
                 <p className="text-sm text-muted-foreground">Natural</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default OurStorySection;