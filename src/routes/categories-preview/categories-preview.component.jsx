// import { useContext, Fragment } from 'react';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/categories/categories.selector';

import { CategoriesContext } from '../../contexts/categories.context';
// import ProductCard from '../../components/product-card/product-card.component';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    // const { categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <Fragment>
        {
          Object.keys(categoriesMap).map(title => {
            const products = categoriesMap[title];
            return <CategoryPreview key={title} title={title} products={products} />
          })
        }
        </Fragment >
    );
};

export default CategoriesPreview;