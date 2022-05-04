// import { useContext, useState, useEffect, Fragment } from 'react';
import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux'; // Lets us interact with a component from the Redux store.
import { useParams } from 'react-router-dom'; // This will be used to get our category from the URL bar.

import ProductCard from '../../components/product-card/product-card.component';

// import { CategoriesContext } from '../../contexts/categories.context';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

import { CategoryContainer, Title } from './category.styles.jsx';

const Category = () => {
    const { category } = useParams(); // Takes the category from the url parameter. ie: /hats, /jackets, etc.

    console.log('1 render/re-rendering Category component.')

    const categoriesMap = useSelector(selectCategoriesMap);  // The categoriesMap object inside of the Redux store. Whenever the state object changes, the selector rerurns, categoriesMap updates, and the component rerenders.

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        console.log('3 Effect fired calling setProducts.')
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]); // If our component renders, our products will not update unless our category or categoriesMap changes. This happens if user changes the page. ie: From /hats to /jackets.

    return (
        <Fragment>
            <Title>{category.toLocaleUpperCase()}</Title>
            <CategoryContainer>
                
                {
                    products && // If products is undefined (because it's still fetching from Firestore), don't render anything.
                    products.map((product) => ( <ProductCard key={product.id} product={product} />

                    ))
                }
            </CategoryContainer>
        </Fragment>
    )

}

export default Category;