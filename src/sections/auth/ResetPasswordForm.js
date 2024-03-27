import React, { useState } from "react";
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {Link as RouterLink} from "react-router-dom"
import { Alert, Button, Stack } from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { RHFTextField } from "../../components/hook-form";
const ResetPasswordForm = () =>{
    
    
    const ResetPasswordSchema = Yup.object().shape({
        email : Yup.string().required("Nhập đúng Email"),
    });

    const defaultValues = {
        email: "demo@gmail.com",
    }

    const methods  = useForm({
        resolver : yupResolver(ResetPasswordSchema),
        defaultValues,
    });

    const {reset, setError, handleSubmit, formState: {errors, isSubmitting, isSubmitSuccessful},
    }= methods;

    const  onSubmit = async (data)=> {
        try{

        }
        catch(error){
            console.log(error);
            reset();
            setError("afterSubmit",{
                ...error,
                message: error.message,
            })

        }
    }
    return (
    
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
            {!!errors.afterSumit && <Alert severity="error">{errors.afterSumit.message}</Alert>}

        <RHFTextField name="email" label="Email"/>
        
       
        <Button fullWidth color="inherit" size="large" type="submit" variant="contained" >
            Gửi mã
        </Button>
        </Stack>
    </ FormProvider>
    );
};
export default ResetPasswordForm;