import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from './Loading';
import auth from '../fireabase.init';
import './Login.css'

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let signInError;

    if (loading) {
        return <Loading />
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };


    return (
        <div class="wrapper">
        <div class="logo">
           <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt=""/>
        </div>
        <div class="text-center mt-4 name">
            Google
        </div>
        <form class="p-3 mt-3" onSubmit={handleSubmit(onSubmit)}>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username"
                 {...register("email", {
                    required: {
                        value: true,
                        message: 'Email is required'
                    },
                    pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'please input a valid email'
                    }
                })}
                />

            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"
                {...register("password", {
                    required: {
                        value: true,
                        message: 'password is required'
                    },
                    minLength: {
                        value: 6,
                        message: 'must be 6 characters or longer'
                    }
                })}
                />
            </div>
            {signInError}
            <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
            <a href="#">New to KFC?</a> or <Link to='/register'>Sign up</Link>
        </div>
    </div>
    );
};

export default Login;