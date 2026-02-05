 import { createContext, useContext, useState, ReactNode } from "react";
 
 export interface CartItem {
   id: number;
   name: string;
   price: number;
   image: string;
   quantity: number;
 }
 
 interface CartContextType {
   items: CartItem[];
   addItem: (item: Omit<CartItem, "quantity">) => void;
   removeItem: (id: number) => void;
   updateQuantity: (id: number, quantity: number) => void;
   clearCart: () => void;
   totalItems: number;
   totalPrice: number;
 }
 
 const CartContext = createContext<CartContextType | undefined>(undefined);
 
 export const CartProvider = ({ children }: { children: ReactNode }) => {
   const [items, setItems] = useState<CartItem[]>([]);
 
   const addItem = (item: Omit<CartItem, "quantity">) => {
     setItems((prev) => {
       const existing = prev.find((i) => i.id === item.id);
       if (existing) {
         return prev.map((i) =>
           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
         );
       }
       return [...prev, { ...item, quantity: 1 }];
     });
   };
 
   const removeItem = (id: number) => {
     setItems((prev) => prev.filter((i) => i.id !== id));
   };
 
   const updateQuantity = (id: number, quantity: number) => {
     if (quantity <= 0) {
       removeItem(id);
       return;
     }
     setItems((prev) =>
       prev.map((i) => (i.id === id ? { ...i, quantity } : i))
     );
   };
 
   const clearCart = () => setItems([]);
 
   const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
   const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
 
   return (
     <CartContext.Provider
       value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
     >
       {children}
     </CartContext.Provider>
   );
 };
 
 export const useCart = () => {
   const context = useContext(CartContext);
   if (!context) throw new Error("useCart must be used within CartProvider");
   return context;
 };