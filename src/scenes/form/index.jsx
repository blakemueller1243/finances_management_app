import { Box, Button, FormLabel, TextField, Autocomplete } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React, { useState } from 'react';

const initialValues = {
    itemName: "",
    itemDesc: "",
    Category: "",
    subCategory: "",
    paidPrice: "",
    soldPrice: "",
    transDate: "",

};

const userSchema = yup.object().shape({
    itemName: yup.string().required("Required"),
    itemDesc: yup.string().required("Required"),
    Category: yup.string().required("Required"),
    subCategory: yup.string().required("Required"),
    paidPrice: yup.number().required("Required"),
    soldPrice: yup.number().required("Required"),
    transDate: yup.date().required("Required"),
});

const Form = () => {
    const [categories, setCategories] = React.useState(["Category1", "Category2"]); // Add your preset categories here
    const [subCategories, setSubCategories] = React.useState(["Subcategory1", "Subcategory2"]); // Add your preset subcategories here

    const isNonMobile = useMediaQuery("(min-width:600px)");
    const isPortrait = useMediaQuery('(orientation: portrait)');

    const handleFormSubmit = (values) => {
        console.log(values);
    };
    return(
    <Box m="20px">
        <Header title="New Transaction" subtitle="Create a new transaction in the database" />
        <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
        >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
                <Box 
                display="grid"
                gap={isPortrait ? "50px" : "30px"}
                gridTemplateColumns={
                    isPortrait 
                        ? "repeat(3, minmax(0, 1fr))"
                        : "repeat(4, minmax(0, 1fr))"
                }
                sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4"},
                }}
                >
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Item Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.itemName}
                        name="itemName"
                        error={!!touched.itemName && !!errors.itemName}
                        helperText={touched.itemName && errors.itemName}
                        sx={{ gridColumn: "span 1", gridRow: "1", width: isPortrait ? '120%' : 'auto' }}
                    />
                    <Autocomplete
                        freeSolo
                        options={categories}
                        value={values.Category}
                        sx={{ gridColumn: "span 1", gridRow: "2", width: isPortrait ? '120%' : 'auto' }}
                        onChange={(event, newValue) => {
                            setFieldValue("Category", newValue);
                            if (newValue && categories.indexOf(newValue) === -1) {
                                setCategories([...categories, newValue]);
                            }
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                fullWidth
                                variant="filled"
                                label="Category"
                                onBlur={handleBlur}
                                name="Category"
                                error={!!touched.Category && !!errors.Category}
                                helperText={touched.Category && errors.Category}
                            />
                        )}
                    />

                    <Autocomplete
                        freeSolo
                        options={subCategories}
                        value={values.subCategory}
                        sx={{ gridColumn: "span 1", gridRow: "2", width: isPortrait ? '120%' : 'auto' }}
                        onChange={(event, newValue) => {
                            setFieldValue("subCategory", newValue);
                            if (newValue && subCategories.indexOf(newValue) === -1) {
                                setSubCategories([...subCategories, newValue]);
                            }
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                fullWidth
                                variant="filled"
                                label="Subcategory"
                                onBlur={handleBlur}
                                name="subCategory"
                                error={!!touched.subCategory && !!errors.subCategory}
                                helperText={touched.subCategory && errors.subCategory}
                            />
                        )}
                    />

                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Item Description"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.itemDesc}
                        name="itemDesc"
                        error={!!touched.itemDesc && !!errors.itemDesc}
                        helperText={touched.itemDesc && errors.itemDesc}
                        sx={{ gridColumn: "span 2", gridRow: "3", width: isPortrait ? '120%' : 'auto' }}
                        InputProps={{
                            style: { height: '180px', maxHeight: '180px', overflowY: 'auto', padding: '20px 10px 10px 10px', display: 'flex', alignItems: 'flex-start' }
                        }}
                        multiline
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="number"
                        label="Price Paid"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.paidPrice}
                        name="paidPrice"
                        error={!!touched.paidPrice && !!errors.paidPrice}
                        helperText={touched.paidPrice && errors.paidPrice}
                        sx={{ gridColumn: "span 1", gridRow: "4", width: isPortrait ? '120%' : 'auto' }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="number"
                        label="Price Sold"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.soldPrice}
                        name="soldPrice"
                        error={!!touched.soldPrice && !!errors.soldPrice}
                        helperText={touched.soldPrice && errors.soldPrice}
                        sx={{ gridColumn: "span 1", gridRow: "4", width: isPortrait ? '120%' : 'auto' }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="date"
                        label="Date"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.transDate}
                        name="transDate"
                        error={!!touched.transDate && !!errors.transDate}
                        helperText={touched.transDate && errors.transDate}
                        sx={{ gridColumn: "span 1", gridRow: "5", width: isPortrait ? '120%' : 'auto' }}
                    />
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Card Used"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.cardUsed}
                        name="cardUsed"
                        error={!!touched.cardUsed && !!errors.cardUsed}
                        helperText={touched.cardUsed && errors.cardUsed}
                        sx={{ gridColumn: "span 1", gridRow: "5", width: isPortrait ? '120%' : 'auto' }}
                    />
                </Box>
                <Box display="flex" justifyContent="center" mt="20px">
                    <Button type="submit" color="secondary" variant="contained">
                        Submit
                    </Button>
                </Box>
            </form>
        )}
        </Formik>
    </Box>
    );
};

export default Form;