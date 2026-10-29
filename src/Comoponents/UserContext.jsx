import React, { createContext } from "react"
import { useState } from "react";

import { initialProducts } from "../Data/Product"
 export const DataContext = createContext();

export const UserContext = ({children}) => {
  const [cart, setCart] = useState([]);
  const [Quantity, setQuantity] = useState(1)
    const Products = initialProducts;

    const avalablecategories = [
  "All", ...new Set(initialProducts.map(p => p.category))
]

    function addToCart(product) {
      setCart( (prevCart) => {
         const existingproduct = prevCart.find( (item)=> item.id === product.id);
      if(existingproduct) {
        return prevCart.map( (item) => item.id === product.id ? {...item,quantitiy: item.quantitiy + 1 } :item);
      }  
      
      return [...prevCart,{...product,quantitiy:1
      }
      ];
      });
    }

    function updateQuantity(id,change) {
      setCart( (prevCart) => 
      prevCart.map( (item) => 
      item.id === id ? {...item,quantitiy:Math.max(1,item.quantitiy + change),}
     : item
    )
  );
    }
  
    const [search, setSearch] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredProducts = Products.filter( (products) => { const searchmatch = products.name.toLowerCase().includes(search.toLowerCase())
      const categoryMatch = selectedCategory === "All" || products.category === selectedCategory;
      return searchmatch && categoryMatch
    })
    
  return (
    
 <DataContext.Provider value={{Products,cart,addToCart,filteredProducts,
  search,setSearch,selectedCategory,setSelectedCategory, avalablecategories,
updateQuantity}}>{children}</DataContext.Provider>
    
  );
}


export default UserContext
