import React from "react";
import classes from './login.module.css';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginUserThunkCreator} from "../../redux/actions/authAction";
import {Navigate} from "react-router-dom";


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("mail", "email", [required], "Email", Input)}
            {createField("password", "password", [required], "Password", Input)}
            {createField("checkbox", "rememberMe", [], null, Input, null, "remember me")}

            {error && <div className={classes.errorText}>
                <p>{error}</p>
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to  ={'/profile'} />
    }
    return (
        <div className={classes.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password, rememberMe) => {
            dispatch(loginUserThunkCreator(email, password, rememberMe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);