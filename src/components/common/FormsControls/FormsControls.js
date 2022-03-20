import React from "react";
import classes from './formControls.module.css';
import {Field} from "redux-form";

export const FormControl = ({input, meta: {touched, error}, children}) => {

    const hasError = touched && error
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            {children}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><textarea  {...restProps} {...input} /></FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><input {...restProps} {...input} /></FormControl>
    )
}

export const createField = (type, name, validators, placeholder, component, props = {}, text = "") => (
    <div>
        <Field type={type} name={name} validate={validators} placeholder={placeholder} component={component} {...props} />
        {text}
    </div>
)