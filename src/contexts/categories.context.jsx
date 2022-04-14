import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'; 

// import PRODUCTS from '../assets/shop-data.json'; // This is the old way we were getting data from the JSON file.
// import SHOP_DATA from '../shop-data';  // This is used once to add new 'categories' collection to Firebase. Typically we shouldn't do this on the frontend.

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {

    // const [products, setProducts] = useState(PRODUCTS);
    const [categoriesMap, setCategoriesMap] = useState({});
    // useEffect(() => {    // This is used once to add new 'categories' collection to Firebase. Typically we shouldn't do this on the frontend.
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])


    useEffect(() => {   
        const getCategoriesMap = async () => { // B - Any async code inside of a useEffect, should be wrapped within an async code.
            const categoryMap = await getCategoriesAndDocuments(); // A - getCategoriesAndDocuments is an async function.
            console.log(categoryMap);
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    }, []);

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}