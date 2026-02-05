 import { Button } from "@/components/ui/button";
 
 const Navbar = () => {
   return (
     <nav className="w-full px-8 py-4">
       <div className="max-w-7xl mx-auto flex items-center justify-between bg-card/80 backdrop-blur-sm rounded-full px-8 py-3 shadow-sm">
         {/* Logo */}
         <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
             <span className="text-primary-foreground text-lg">🥤</span>
           </div>
           <span className="font-heading text-xl font-semibold text-foreground">SmoothieBliss</span>
         </div>
 
         {/* Navigation Links */}
         <div className="hidden md:flex items-center gap-10">
           <a href="#" className="nav-link">Home</a>
           <a href="#" className="nav-link">Menu</a>
           <a href="#" className="nav-link">Our Story</a>
           <a href="#" className="nav-link">Reviews</a>
         </div>
 
         {/* CTA Button */}
         <Button className="btn-primary border-0">
           Contact Us
         </Button>
       </div>
     </nav>
   );
 };
 
 export default Navbar;