import { configureStore } from "@reduxjs/toolkit";
import brandSlice from "./brandSlice";

const store = configureStore({
    reducer:{brands: brandSlice.reducer}
});

export default store;