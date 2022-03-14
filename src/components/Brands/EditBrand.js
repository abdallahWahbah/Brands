import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { editBrand, getBrands } from '../../store/brandActions';
import BrandForm from './BrandForm';
import { Box, Typography } from '@mui/material';

const EditBrand = () => 
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let brands = useSelector(state => state.brands.brands);
    let {id} = useParams();
    const [brand, setBrand] = useState({});

    useEffect(()=>
    {
        dispatch(getBrands());
    }, [])

    useEffect(()=>
    {
        setBrand(brands.find(item => item._id === id))
    }, [id, brands])

    const onSubmit = (values) =>
    {
        const objectToSend = 
        {
            name: values.name,
            gender: values.gender,
            description: values.description,
            data: 
            {
                rank: values.rank,
                revenue: values.revenue,
                value: values.value,
                industry: values.industry,
            }
        }
        console.log(objectToSend);
        dispatch(editBrand(brand._id, objectToSend));
        navigate("/brands")
    }

    return (
        <Box sx={{padding: "20px"}}>
            
            <Typography variant="h6" gutterBottom>
                Edit Brand
            </Typography>
    
            <hr style={{width: "60%"}}/>
            <hr style={{width: "60%", marginBottom: "20px"}}/>

            {Object.keys(brand).length !== 0 && (
                <BrandForm
                    initialValues={
                    {
                        name: brand.name,
                        gender: brand.gender,
                        description: brand.description,
                        industry: brand.data.industry,
                        rank: brand.data.rank,
                        revenue: brand.data.revenue,
                        value: brand.data.value,
                    }}
                    onSubmit={onSubmit}
                />
            )}
        </Box>
    )
}

export default EditBrand