 import { ShoppingCart, Minus, Plus, X } from "lucide-react";
 import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
 import { Button } from "@/components/ui/button";
 import { useCart } from "@/context/CartContext";
 
 const formatRWF = (amount: number) => {
   return new Intl.NumberFormat("rw-RW", {
     style: "currency",
     currency: "RWF",
     minimumFractionDigits: 0,
   }).format(amount);
 };
 
 const CartSheet = () => {
   const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
 
   return (
     <Sheet>
       <SheetTrigger asChild>
         <button className="relative p-2 hover:bg-muted rounded-full transition-colors">
           <ShoppingCart className="w-5 h-5 text-foreground" />
           {totalItems > 0 && (
             <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
               {totalItems}
             </span>
           )}
         </button>
       </SheetTrigger>
       <SheetContent className="w-full sm:max-w-md">
         <SheetHeader>
           <SheetTitle className="font-heading text-2xl">Your Cart</SheetTitle>
         </SheetHeader>
 
         {items.length === 0 ? (
           <div className="flex flex-col items-center justify-center h-64 text-center">
             <ShoppingCart className="w-16 h-16 text-muted-foreground mb-4" />
             <p className="text-muted-foreground">Your cart is empty</p>
             <p className="text-sm text-muted-foreground">Add some delicious smoothies!</p>
           </div>
         ) : (
           <div className="flex flex-col h-full">
             <div className="flex-1 overflow-auto py-4 space-y-4">
               {items.map((item) => (
                 <div key={item.id} className="flex gap-4 p-3 bg-muted/50 rounded-xl">
                   <img
                     src={item.image}
                     alt={item.name}
                     className="w-16 h-16 object-contain rounded-lg"
                   />
                   <div className="flex-1">
                     <div className="flex justify-between items-start">
                       <h4 className="font-medium text-sm">{item.name}</h4>
                       <button
                         onClick={() => removeItem(item.id)}
                         className="text-muted-foreground hover:text-destructive transition-colors"
                       >
                         <X className="w-4 h-4" />
                       </button>
                     </div>
                     <p className="text-primary font-semibold text-sm">{formatRWF(item.price)}</p>
                     <div className="flex items-center gap-2 mt-2">
                       <button
                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
                         className="w-6 h-6 rounded-full bg-background flex items-center justify-center hover:bg-muted transition-colors"
                       >
                         <Minus className="w-3 h-3" />
                       </button>
                       <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                       <button
                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
                         className="w-6 h-6 rounded-full bg-background flex items-center justify-center hover:bg-muted transition-colors"
                       >
                         <Plus className="w-3 h-3" />
                       </button>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
 
             <div className="border-t pt-4 space-y-4">
               <div className="flex justify-between items-center">
                 <span className="text-muted-foreground">Total</span>
                 <span className="font-heading text-2xl font-bold">{formatRWF(totalPrice)}</span>
               </div>
               <Button className="btn-primary w-full border-0">
                 Checkout
               </Button>
               <button
                 onClick={clearCart}
                 className="w-full text-sm text-muted-foreground hover:text-destructive transition-colors"
               >
                 Clear Cart
               </button>
             </div>
           </div>
         )}
       </SheetContent>
     </Sheet>
   );
 };
 
 export default CartSheet;