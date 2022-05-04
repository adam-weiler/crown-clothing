// Transforms the data into the final shape you want it to be.
export const selectCategoriesMap = (state) => 
    state.categories.categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});