import React from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { useFormik } from 'formik';
import * as yup from 'yup';

const BrandForm = (props) => 
{   
    const initialValues = 
    {
        name: props.initialValues?.name || "",
        gender: props.initialValues?.gender || "",
        description: props.initialValues?.description || "",
        industry: props.initialValues?.industry || "",
        rank: props.initialValues?.rank || "",
        revenue: props.initialValues?.revenue || "",
        value: props.initialValues?.value || ""
    }

    const onSubmit = (values) =>
    {
        props.onSubmit(values)
    }

    const validationSchema = yup.object(
    {
        name:yup.string().min(2).required("Name can't be empty"),
        gender:yup.string().min(2).required("Gender can't be empty"),
        description:yup.string().min(2).required("Description can't be empty"),
        industry:yup.string().min(2).required("Industry can't be empty"),
        rank:yup.string().required("Rank can't be empty"),
        revenue:yup.string().min(2).required("Revenue can't be empty"),
        value:yup.string().min(2).required("Value can't be empty"),

    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField 
                        fullWidth 
                        label="Brand Name"
                        sx={{marginBottom: "20px"}}
                        {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.name}</div> : null}
                </Grid>

                <Grid item xs={6}>
                    <TextField 
                        fullWidth 
                        label="This Brand is for..."
                        sx={{marginBottom: "20px"}}
                        {...formik.getFieldProps("gender")}
                    />
                    {formik.touched.gender && formik.errors.gender? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.gender}</div> : null}
                </Grid>

                <Grid item xs={6}>
                    <TextField 
                        fullWidth 
                        label="Brand Description"
                        sx={{marginBottom: "20px"}}
                        {...formik.getFieldProps("description")}
                    />
                    {formik.touched.description && formik.errors.description? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.description}</div> : null}
                </Grid>

                <Grid item xs={6}>
                    <TextField 
                        fullWidth 
                        label="Brand Industry"
                        sx={{marginBottom: "20px"}}
                        {...formik.getFieldProps("industry")}
                    />
                    {formik.touched.industry && formik.errors.industry? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.industry}</div> : null}
                </Grid>

                <Grid item xs={6}>
                    <TextField 
                        fullWidth 
                        label="Brand Rank"
                        sx={{marginBottom: "20px"}}
                        {...formik.getFieldProps("rank")}
                    />
                    {formik.touched.rank && formik.errors.rank? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.rank}</div> : null}
                </Grid>

                <Grid item xs={6}>
                    <TextField 
                        fullWidth 
                        label="Brand Revenue"
                        sx={{marginBottom: "20px"}}
                        {...formik.getFieldProps("revenue")}
                    />
                    {formik.touched.revenue && formik.errors.revenue? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.revenue}</div> : null}
                </Grid>

                <Grid item xs={6}>
                    <TextField 
                        fullWidth 
                        label="Brand Value"
                        sx={{marginBottom: "20px"}}
                        {...formik.getFieldProps("value")}
                    />
                    {formik.touched.value && formik.errors.value? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors.value}</div> : null}
                </Grid>
            </Grid>

            <Button variant="contained" 
                type="submit" 
                >
                Register
            </Button>
        </form>
    )
}

export default BrandForm