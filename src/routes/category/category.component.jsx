import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom'; // This will be used to get our category from the URL bar.

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    // const products = categoriesMap[category];
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]); // If our component renders, our products will not update unless our category or categoriesMap changes.

    return (
        <Fragment>
            <h2 className='category-title'>{category.toLocaleUpperCase()}</h2>
            <div className='category-container'>
                
                {
                    products && // If products is undefined (because it's still fetching from Firestore), don't render anything.
                    products.map((product) => ( <ProductCard key={product.id} product={product} />

                    ))
                }
            </div>
        </Fragment>
    )

}

export default Category;