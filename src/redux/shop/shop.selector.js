import {createSelector} from 'reselect'


// the reason why here we use an object instead of array in (shop.data.js), is because, when the map data gets too big
// like 1000 data, using array we have to iterate a lot of times
// using object is completely a different thing we call it
// data normolization



const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop], 
    shop=>shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollection],
    collections => collections ? Object.keys(collections).map((key) => collections[key]) : []
)

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectShopCollection],
        collections => collections ? collections[collectionUrlParam] : null
    )