import React from 'react'
import { Box, Typography } from '@mui/material'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBrand } from '../../store/brandActions';
import BrandForm from './BrandForm';

const CreateBrand = () => 
{   
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        dispatch(createBrand(objectToSend));
        navigate("/brands")
    }

    return (
        <Box sx={{padding: "20px"}}>
            <Typography variant="h6" gutterBottom>
                Create New Brand
            </Typography>
    
            <hr style={{width: "60%"}}/>
            <hr style={{width: "60%", marginBottom: "20px"}}/>

            <BrandForm onSubmit={(values) => onSubmit(values)}/>  
        </Box>
    )
}

export default CreateBrand