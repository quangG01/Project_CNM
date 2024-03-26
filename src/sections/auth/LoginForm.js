import React, { useState } from "react";
import * as Yub from 'yub';
import {useForm} from 'react-hook-form';
import {yubResolver} from "@hookfrom/resolver/yub";
import FormProvider from "../../components/hook-form/FormProvider";
const LoginForm = () =>{
    const [showPassword , setShowPassword] = useState(false);
    
    const LoginSchema = Yub.object().shape({
        email : Yub.string().require("Nhập đúng Email"),
        password:  Yub.string().require("Nhập đúng mật khẩu"),
    });

    const defaultValues = {
        email: "demo@gmail.com",
        password:"demo123"
    }

    const methods  = useForm({
        resolver : yubResolver(LoginForm),
        defaultValues,
    });

    const {reset, setError, handleSubmit, formState: {errors, isSubmitting, isSubmitSuccessful},
    }= methods;
    return (
    
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

    </ FormProvider>
    )
}
export default LoginForm;