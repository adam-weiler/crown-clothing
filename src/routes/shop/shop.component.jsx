import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../store/categories/categories.action';

import './shop.styles.jsx';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {   
    const getCategoriesMap = async () => { // B - Any async code inside of a useEffect, should be wrapped within an async code.
        const categoryMap = await getCategoriesAndDocuments(); // A - getCategoriesAndDocuments is an async function.
        dispatch(setCategoriesMap(categoryMap));
    }
    getCategoriesMap();
}, []);

    return (
        <Routes>
          <Route index element={ <CategoriesPreview/> } />
          <Route path=":category" element={ <Category/> } /> { /* This could be something like /hat */}
        </Routes>
    );
};

export default Shop;