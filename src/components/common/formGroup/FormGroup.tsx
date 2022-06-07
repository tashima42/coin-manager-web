import React from 'react';
import './formGroup.scss'


const FormGroup = (props: any) => {
    const { fieldName, register, errors, placeholder, isRequired, type } = props
    return (
        <div className={'formGroup'}>
            <div className={'formGroupInfo'}>
                <label htmlFor={fieldName}>{fieldName}</label>
                {errors[fieldName] && <p>{errors[fieldName].message}</p>}
            </div>
            <input type={type} placeholder={placeholder} {...register(fieldName, {required: {value: isRequired, message: 'Required field'}})}/>
        </div>
    );
};
export default FormGroup;