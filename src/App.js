import CategoryItem from './components/category-item/category-item.component';
import CategoryMenu from './components/category-menu/category-menu.component';

import './categories.styles.scss';

const App = () => {

  // const categories = 

  return (
    <div className='categories-container'>
      {CategoryMenu.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default App;