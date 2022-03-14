import { createSlice } from "@reduxjs/toolkit";

const brandSlice = createSlice({
    name: "brand",
    initialState: {brands: [], brand: {}},
    reducers: {
        getBrands(state, action)
        {
            state.brands = action.payload;
        },
        getBrand(state, action)
        {
            state.brand = action.payload;
        },
        deleteBrand(state, action)
        {
            const newBrands = state.brands.filter(brand => brand._id !== action.payload); // i suppose that i am sending an id 
            state.brands = newBrands;
        },
        editBrand(state, action) // action.payload contains (id, Name, gender, description, data)
        {
            console.log(action.payload)
            const editedBrand = {...state.brands[action.payload._id], ...action.payload}
            const editedBrandIndex = state.brands.findIndex(item => item._id === editedBrand._id);
            state.brands[editedBrandIndex] = editedBrand
            state.brands = [...state.brands];
        },
        createBrand(state, action)
        {
            state.brands = [...state.brands, action.payload];
        }
    }
});

export const brandActions = brandSlice.actions;
export default brandSlice;