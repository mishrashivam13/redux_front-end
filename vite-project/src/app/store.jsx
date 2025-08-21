import { configureStore } from '@reduxjs/toolkit'
import cartReducers from "../features/cartSlice"

export default configureStore({
  reducer: {
    
  allCart :   cartReducers
  
  }

})