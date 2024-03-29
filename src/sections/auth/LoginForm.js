import React, { useState } from "react";
import * as Yup from 'yup';
import {useForm} from 'react-hook-form';
import {Link as RouterLink} from "react-router-dom"
import { Alert, Button, IconButton, InputAdornment, Link, Stack } from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { RHFTextField } from "../../components/hook-form";
import { Visibility , VisibilityOff  } from "@mui/icons-material";
const LoginForm = () =>{
    const [showPassword , setShowPassword] = useState(false);
    
    const LoginSchema = Yup.object().shape({
        email : Yup.string().required("Nhập đúng Email"),
        password:  Yup.string().required("Nhập đúng mật khẩu"),
    });

    const defaultValues = {
        email: "demo@gmail.com",
        password:"demo123"
    }

    const methods  = useForm({
        resolver : yupResolver(LoginSchema),
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
        <RHFTextField name="password" label = "Password" type={showPassword ? "text" :"password"} 
        InputProps ={{
            endAdornment:(
                <InputAdornment>
                    <IconButton onClick={() => {
                        setShowPassword(!showPassword);
                    }}>
                       {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            )
        }}/>
        
        </Stack>
        <Stack alignItems={"flex-end"} sx= {{my:2}}>
            <Link component={RouterLink} to="/auth/reset-Password" varient = "body2" color = "inherit" underline="always">
                Quên Mật Khẩu?
            </Link>
        </Stack>
        <Button fullWidth color="inherit" size="large" type="submit" variant="contained" >
            Đăng nhập
        </Button>
    </ FormProvider>
    );
};
export default LoginForm;