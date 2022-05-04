// Transforms the data into the final shape you want it to be.
export const selectCategoriesMap = (state) => {
    console.log ('2 selector fired from categories.selector.')
    return state.categories.categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});
}