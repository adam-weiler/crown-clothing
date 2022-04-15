import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import './shop.styles.jsx';

const Shop = () => {
// There are no classNames.
    return (
        <Routes>
          <Route index element={ <CategoriesPreview/> } />
          <Route path=":category" element={ <Category/> } /> { /* This could be something like /hat */}
        </Routes>
    );
};

export default Shop;