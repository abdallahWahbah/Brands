import brandsApi from '../apis/brands';
import { brandActions } from "./brandSlice";

export const getBrands = () => async (dispatch, getState) =>
{
    const response = await brandsApi.get("/brands");
    dispatch(brandActions.getBrands(response.data));
}

export const getBrand = (id) => async (dispatch, getState) =>
{
    const response = await brandsApi.get(`/brands/${id}`)
    dispatch(brandActions.getBrand(response.data))
}

export const createBrand = (values) => async (dispatch, getState) =>
{
    const reponse = await brandsApi.post("/brands", values);
    dispatch(brandActions.createBrand(reponse.data))
}

export const deleteBrand = (id) => async (dispatch, getState) =>
{
    const response = await brandsApi.delete(`/brands/${id}`);
    dispatch(brandActions.deleteBrand(response.data._id))
}

export const editBrand = (id, values) => async (dispatch, getState) =>
{
    const response = await brandsApi.patch(`/brands/${id}`, values);
    console.log(response)
    dispatch(brandActions.editBrand(response.data))
}