import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import searchslice from "./searchslice";



const Store=configureStore({
    reducer:{
        app:AppSlice ,
      search:searchslice
    }

})
export default Store