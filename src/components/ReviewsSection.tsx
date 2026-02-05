 import { Star } from "lucide-react";
 
 const reviews = [
   {
     id: 1,
     name: "Marie Uwimana",
     rating: 5,
     review: "The Chocolate Dream smoothie is absolutely divine! Best smoothie I've ever had in Kigali. Will definitely come back!",
     avatar: "👩🏾",
   },
   {
     id: 2,
     name: "Jean Baptiste",
     rating: 5,
     review: "Love the Green Detox! Fresh ingredients and you can really taste the quality. Great for my morning routine.",
     avatar: "👨🏾",
   },
   {
     id: 3,
     name: "Diane Mukamana",
     rating: 4,
     review: "The Mango Paradise transported me to the beach! Amazing tropical flavors. Highly recommend for hot days.",
     avatar: "👩🏾‍🦱",
   },
   {
     id: 4,
     name: "Patrick Habimana",
     rating: 5,
     review: "Berry Blast is my go-to after gym smoothie. Refreshing, healthy, and the staff is always friendly!",
     avatar: "👨🏾‍🦲",
   },
 ];
 
 const ReviewsSection = () => {
   return (
     <section id="reviews" className="py-16 md:py-24 px-4 md:px-8 bg-secondary/50">
       <div className="max-w-7xl mx-auto">
         {/* Section Header */}
         <div className="text-center mb-12 md:mb-16">
           <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
             What Our Customers Say
           </h2>
           <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
             Don't just take our word for it - hear from our happy customers
           </p>
         </div>
 
         {/* Reviews Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
           {reviews.map((review) => (
             <div
               key={review.id}
               className="bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
             >
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl">
                   {review.avatar}
                 </div>
                 <div>
                   <h4 className="font-semibold text-foreground">{review.name}</h4>
                   <div className="flex gap-0.5">
                     {[...Array(5)].map((_, i) => (
                       <Star
                         key={i}
                         className={`w-4 h-4 ${
                           i < review.rating
                             ? "fill-yellow-400 text-yellow-400"
                             : "fill-muted text-muted"
                         }`}
                       />
                     ))}
                   </div>
                 </div>
               </div>
               <p className="text-muted-foreground leading-relaxed">"{review.review}"</p>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default ReviewsSection;