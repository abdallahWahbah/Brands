import React, {useEffect} from 'react'
import { Card, CardContent, Grid, Typography, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom';
import { getBrands, deleteBrand } from '../../store/brandActions';

const AllBrands = () => 
{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const brands = useSelector(state => state.brands.brands)

    useEffect(()=>
    {
        dispatch(getBrands())
    }, [dispatch])

    const showItem = (id) =>
    {
        navigate(`/brands/show/${id}`)
    }

    const handleDelete = (id) =>
    {
        dispatch(deleteBrand(id))
    }

    const handleEdit = (id) =>
    {
        navigate(`/brands/edit/${id}`)
    }

    const checkNullity = () =>
    {
        if(brands.length === 0) return <p style={{padding: "20px"}}>No Data....</p>;
    }

    return (
        <>
            {checkNullity()}
            {brands && (
                <Grid container spacing={2} sx={{padding: "20px"}}>
                    {brands.map(brand => (
                        <Grid item xs={4} md={2.4} key={brand._id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div" onClick={() =>{showItem(brand._id)}} sx={{cursor: "pointer"}}>
                                        {brand.name}
                                    </Typography>
                                    <Typography  sx={{my: "10px", height: "50px"}}>
                                        {brand.description.length > 50 ? brand.description.substring(0, 50) + "..." : brand.description}
                                    </Typography>
                                    <Box sx={{display: "flex", justifyContent: "space-between", mt: "20px"}}>
                                        <Button variant="outlined" startIcon={<EditIcon />} onClick={() => handleEdit(brand._id)}>
                                            Edit
                                        </Button>
                                        <Button variant="contained" endIcon={<DeleteIcon />} color="error" onClick={() => handleDelete(brand._id)}>
                                            Delete
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    )
}

export default AllBrands