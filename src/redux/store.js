const {configureStore} = require('@reduxjs/toolkit');
import ProductReduer from './slices/ProductSlices';
import WishlistReducer from './slices/WishlistSlices';
import CartReducer from './slices/CartSlice';
export const store = configureStore({
  reducer: {
    product: ProductReduer,
    wishlist: WishlistReducer,
    cart: CartReducer,

    
  },
});
