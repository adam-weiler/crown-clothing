import { createContext, useState } from 'react';

import PRODUCTS from '../assets/shop-data.json';

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };

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
        <ProductsContext.Provider value={value}>
        {children}
        
        { //SHOP_DATA.map(({id, name}) => (
        //             <div key={id}>
        //                 <h1>{name}
        //                 </h1>
        //             </div>
        //         ))
        }
        
        </ProductsContext.Provider>
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

// export default ProductsProvider;