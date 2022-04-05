import { createContext, useState, useEffect } from 'react';

import SHOP_DATA from '../assets/shop-data.json';

export const ProductContext = createContext({
    currentProducts: SHOP_DATA,
})

export const ProductsProvider = ({children}) => {

    const [currentProducts, setCurrentProducts] = useState(SHOP_DATA);
    const value = { currentProducts, setCurrentProducts };

    // useEffect(() => {
    //     setCurrentProducts(SHOP_DATA);
    // }, []);

    return (


        // <div>
        //     {SHOP_DATA.map(({id, name}) => (
        //         <div key={id}>
        //             <h1>{name}
        //             </h1>
        //         </div>
        //     ))}
        // </div>
        <ProductContext.Provider value={value}>{children}
        
        { //SHOP_DATA.map(({id, name}) => (
        //             <div key={id}>
        //                 <h1>{name}
        //                 </h1>
        //             </div>
        //         ))
        }
        
        </ProductContext.Provider>
    )
}

// Storing data somewhere
// Storage using React Context (instead of call for data)
// Just like user-context
// Set up the storage first
// before the seperate call for the data

// Similar set up of context with Product or Products
// Using useState
// Setting default shop data.

export default ProductsProvider;