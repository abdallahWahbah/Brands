import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBrand } from '../../store/brandActions';
import { Card, Box, CardContent, Typography, Divider } from '@mui/material';

const SingleBrand = () => 
{
    const dispatch = useDispatch();
    const brand = useSelector(state => state.brands.brand)
    const {id} = useParams();

    useEffect(()=>
    {
        dispatch(getBrand(id));
    }, [id, dispatch])


    const checkNullity = () => Object.keys(brand).length === 0 && <p>Loading...</p> 

    return (
        <>
            {checkNullity()}

            {Object.keys(brand).length !== 0 && (
                <Box sx={{padding: "20px"}}>
                    <Card sx={{width: "30%", margin: "10px auto"}}>
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{marginBottom: "10px"}}>
                                {brand.name} <span style={{fontSize: "70%"}}> for: </span>{brand.gender}

                            </Typography>

                            <Typography variant="body2" sx={{marginBottom: "10px"}}>
                                {brand.description}
                            </Typography>

                            <Divider sx={{marginBottom: "10px"}} />


                            <Typography  variant="h5" gutterBottom component="div">
                                Industry: <span style={{fontSize: "70%"}}>{brand.data.industry || "...."}</span>
                            </Typography>
                            <Typography  variant="h5" gutterBottom component="div">
                                Rank: <span style={{fontSize: "70%"}}>{brand.data.rank || "...."}</span>
                            </Typography>
                            <Typography  variant="h5" gutterBottom component="div">
                                Revenue: <span style={{fontSize: "70%"}}>{brand.data.revenue || "...."}</span>
                            </Typography>
                            <Typography  variant="h5" gutterBottom component="div">
                                Value: <span style={{fontSize: "70%"}}>{brand.data.value || "...."}</span>
                            </Typography>
                            
                        </CardContent>
                    </Card>
                </Box>
        )}
        </>
    )
}

export default SingleBrand