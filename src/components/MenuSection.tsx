 import chocolateSmoothie from "@/assets/chocolate-smoothie.png";
 import berrySmoothie from "@/assets/berry-smoothie.png";
 import mangoSmoothie from "@/assets/mango-smoothie.png";
 import greenSmoothie from "@/assets/green-smoothie.png";
 import { useCart } from "@/context/CartContext";
 import { toast } from "sonner";
 
 const formatRWF = (amount: number) => {
   return new Intl.NumberFormat("rw-RW", {
     style: "currency",
     currency: "RWF",
     minimumFractionDigits: 0,
   }).format(amount);
 };
 
 const menuItems = [
   {
     id: 1,
     name: "Chocolate Dream",
     price: 8500,
     image: chocolateSmoothie,
     description: "Rich cocoa, creamy milk, Oreo crumbles",
     calories: "380 cal",
   },
   {
     id: 2,
     name: "Berry Blast",
     price: 7500,
     image: berrySmoothie,
     description: "Strawberries, blueberries, raspberries, honey",
     calories: "220 cal",
   },
   {
     id: 3,
     name: "Mango Paradise",
     price: 7000,
     image: mangoSmoothie,
     description: "Fresh mangoes, coconut milk, tropical blend",
     calories: "260 cal",
   },
   {
     id: 4,
     name: "Green Detox",
     price: 8000,
     image: greenSmoothie,
     description: "Spinach, kiwi, apple, mint",
     calories: "180 cal",
   },
 ];
 
 const MenuSection = () => {
   const { addItem } = useCart();
 
   const handleAddToCart = (item: typeof menuItems[0]) => {
     addItem({
       id: item.id,
       name: item.name,
       price: item.price,
       image: item.image,
     });
     toast.success(`${item.name} added to cart!`);
   };
 
   return (
     <section id="menu" className="py-16 md:py-20 px-4 md:px-8 bg-secondary/50">
       <div className="max-w-7xl mx-auto">
         {/* Section Header */}
         <div className="text-center mb-10 md:mb-16">
           <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
             Our Menu
           </h2>
           <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
             Discover our handcrafted smoothies made with fresh, premium ingredients
           </p>
         </div>
 
         {/* Menu Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
           {menuItems.map((item) => (
             <div
               key={item.id}
               className="bg-card rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
             >
               {/* Image */}
               <div className="relative h-36 md:h-48 mb-4 flex items-center justify-center">
                 <img
                   src={item.image}
                   alt={item.name}
                   className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                 />
               </div>
 
               {/* Content */}
               <div className="text-center">
                 <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-1">
                   {item.name}
                 </h3>
                 <p className="text-muted-foreground text-xs md:text-sm mb-3">
                   {item.description}
                 </p>
                 <div className="flex items-center justify-between">
                   <span className="text-xs text-muted-foreground">{item.calories}</span>
                   <span className="text-primary font-bold text-base md:text-lg">{formatRWF(item.price)}</span>
                 </div>
               </div>
 
               {/* Add to Cart Button */}
               <button
                 onClick={() => handleAddToCart(item)}
                 className="w-full mt-4 btn-primary text-sm py-2.5"
               >
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