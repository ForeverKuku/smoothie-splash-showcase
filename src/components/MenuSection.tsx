 import chocolateSmoothie from "@/assets/chocolate-smoothie.png";
 import berrySmoothie from "@/assets/berry-smoothie.png";
 import mangoSmoothie from "@/assets/mango-smoothie.png";
 import greenSmoothie from "@/assets/green-smoothie.png";
 
 const menuItems = [
   {
     id: 1,
     name: "Chocolate Dream",
     price: "$8.99",
     image: chocolateSmoothie,
     description: "Rich cocoa, creamy milk, Oreo crumbles",
     calories: "380 cal",
   },
   {
     id: 2,
     name: "Berry Blast",
     price: "$7.99",
     image: berrySmoothie,
     description: "Strawberries, blueberries, raspberries, honey",
     calories: "220 cal",
   },
   {
     id: 3,
     name: "Mango Paradise",
     price: "$7.49",
     image: mangoSmoothie,
     description: "Fresh mangoes, coconut milk, tropical blend",
     calories: "260 cal",
   },
   {
     id: 4,
     name: "Green Detox",
     price: "$8.49",
     image: greenSmoothie,
     description: "Spinach, kiwi, apple, mint",
     calories: "180 cal",
   },
 ];
 
 const MenuSection = () => {
   return (
     <section id="menu" className="py-20 px-8 bg-secondary/50">
       <div className="max-w-7xl mx-auto">
         {/* Section Header */}
         <div className="text-center mb-16">
           <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4">
             Our Menu
           </h2>
           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
             Discover our handcrafted smoothies made with fresh, premium ingredients
           </p>
         </div>
 
         {/* Menu Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {menuItems.map((item) => (
             <div
               key={item.id}
               className="bg-card rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
             >
               {/* Image */}
               <div className="relative h-48 mb-4 flex items-center justify-center">
                 <img
                   src={item.image}
                   alt={item.name}
                   className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                 />
               </div>
 
               {/* Content */}
               <div className="text-center">
                 <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                   {item.name}
                 </h3>
                 <p className="text-muted-foreground text-sm mb-3">
                   {item.description}
                 </p>
                 <div className="flex items-center justify-between">
                   <span className="text-xs text-muted-foreground">{item.calories}</span>
                   <span className="text-primary font-bold text-lg">{item.price}</span>
                 </div>
               </div>
 
               {/* Add to Cart Button */}
               <button className="w-full mt-4 btn-primary text-sm py-2.5">
                 Add to Cart
               </button>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default MenuSection;