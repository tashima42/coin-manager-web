import React, {FC, useEffect} from 'react';
import './register.scss'
import FormGroup from "../../components/common/formGroup/FormGroup";
import Button from "../../components/common/button/Button";
import Hr from "../../components/common/hr/Hr";
import {useDispatch} from "react-redux";
import {registration, setError} from "../../store/reducers/auth/action-creators";
import {Navigate} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import {useAppSelector, useTitle} from "../../hooks";
import {useForm} from "react-hook-form";

const Register: FC  = () => {
    const {isLoading, error, isAuth} = useAppSelector(state => state.auth)
    const {register, handleSubmit, formState: {errors}} = useForm()
    const dispatch = useDispatch()
    useTitle('Register')

    useEffect(() => {
        dispatch(setError(''))
    }, [dispatch])

    const onSubmit = (data: any) => {
        dispatch(registration(data['First Name'], data['Last Name'],data['Email'],data['Password']))
    }

    return (
        <div className={'login'}>
            {isAuth && <Navigate to={'/'} replace={true}/>}
            <h2 className={'loginTitle'}>Welcome to Coin Manager</h2>
            <Hr dataContent={'Register'}/>
            {error && <div className={'registerError'}>
                {error}
            </div>}
            <div className={'loginForm'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup
                        fieldName={'Username'}
                        register={register}
                        errors={errors}
                        placeholder={'Enter username...'}
                        isRequired={true}
                    />
                    <FormGroup
                        fieldName={'Password'}
                        register={register}
                        errors={errors}
                        placeholder={'Enter password...'}
                        isRequired={true}
                        type={'password'}
                    />
                    <Button type={'submit'} progress={isLoading ? <CircularProgress style={{color: 'white'}} size={20}/> : null}  text={'Continue'}/>
                </form>
            </div>
        </div>
    );
};

export default Register;