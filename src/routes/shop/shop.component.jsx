import { useContext } from 'react';

// import SHOP_DATA from '../../assets/shop-data.json';

import { ProductContext } from '../../contexts/product.context';

// export const ProductContext = createContext({
//     currentProducts: null,
//     setCurrentProducts: () => null,
// })

const Shop = () => {

    const { currentProducts } = useContext(ProductContext); // Leveraging user we are getting from useContext.


    return (
        <div>
            {currentProducts.map(({id, name}) => (
                <div key={id}>
                    <h1>{name}
                    </h1>
                </div>
            ))}
        </div>
        // <ProductContext.Provider value={value}>Hi
        
        // {SHOP_DATA.map(({id, name}) => (
        //             <div key={id}>
        //                 <h1>{name}
        //                 </h1>
        //             </div>
        //         ))}
        
        // </ProductContext.Provider>
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

export default Shop;