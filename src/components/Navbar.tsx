 import { useState } from "react";
 import { Button } from "@/components/ui/button";
 import { Menu, X } from "lucide-react";
 import CartSheet from "./CartSheet";
 
 const navLinks = [
   { href: "#home", label: "Home" },
   { href: "#menu", label: "Menu" },
   { href: "#our-story", label: "Our Story" },
   { href: "#reviews", label: "Reviews" },
 ];
 
 const Navbar = () => {
   const [mobileOpen, setMobileOpen] = useState(false);
 
   const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
     e.preventDefault();
     const element = document.querySelector(href);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
     setMobileOpen(false);
   };
 
   return (
     <nav className="w-full px-4 md:px-8 py-4 sticky top-0 z-50">
       <div className="max-w-7xl mx-auto flex items-center justify-between bg-card/90 backdrop-blur-md rounded-full px-4 md:px-8 py-3 shadow-sm">
         {/* Logo */}
         <a 
           href="#home" 
           onClick={(e) => scrollToSection(e, "#home")}
           className="flex items-center gap-2"
         >
           <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
             <span className="text-primary-foreground text-lg">🥤</span>
           </div>
           <span className="font-heading text-lg md:text-xl font-semibold text-foreground">SmoothieBliss</span>
         </a>
 
         {/* Desktop Navigation Links */}
         <div className="hidden md:flex items-center gap-8 lg:gap-10">
           {navLinks.map((link) => (
             <a
               key={link.href}
               href={link.href}
               onClick={(e) => scrollToSection(e, link.href)}
               className="nav-link"
             >
               {link.label}
             </a>
           ))}
         </div>
 
         {/* Right side - Cart & CTA */}
         <div className="flex items-center gap-2 md:gap-4">
           <CartSheet />
           <a
             href="#contact"
             onClick={(e) => scrollToSection(e, "#contact")}
           >
             <Button className="btn-primary border-0 text-sm px-4 md:px-6">
               Contact Us
             </Button>
           </a>
           
           {/* Mobile Menu Button */}
           <button
             onClick={() => setMobileOpen(!mobileOpen)}
             className="md:hidden p-2 hover:bg-muted rounded-full transition-colors"
           >
             {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
           </button>
         </div>
       </div>
 
       {/* Mobile Menu */}
       {mobileOpen && (
         <div className="md:hidden mt-2 bg-card/95 backdrop-blur-md rounded-2xl p-4 shadow-lg">
           <div className="flex flex-col gap-2">
             {navLinks.map((link) => (
               <a
                 key={link.href}
                 href={link.href}
                 onClick={(e) => scrollToSection(e, link.href)}
                 className="nav-link py-3 px-4 rounded-xl hover:bg-muted transition-colors"
               >
                 {link.label}
               </a>
             ))}
           </div>
         </div>
       )}
     </nav>
   );
 };
 
 export default Navbar;