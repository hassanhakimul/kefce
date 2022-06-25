import React from 'react';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import Loading from './Loading';
import auth from '../fireabase.init';
import SocialLogin from './SocialLogin';


const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    let signInError;

    if (loading1 || updating) {
        return <Loading />
    }
    if (user1) {
        console.log(user1)
    }
    if (error1 || updateError) {
        signInError = <p className='text-red-500'><small>{error1?.message || updateError?.message}</small></p>
    }
    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email, data.password)
        updateProfile({ displayName: data.name });
        console.log(data)
        navigate('/')

    };
    return (
        <div class="container-fluid mb-5">
            <div class="row no-gutter">
                {/* <!-- The image half --> */}
                <div class="col-md-6 d-none d-md-flex bg-image"></div>
                {/* <!-- The content half --> */}
                <div class="col-md-6 bg-light">
                    <div class="login d-flex align-items-center py-5">

                        {/* <!-- Demo content--> */}
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-10 col-xl-7 mx-auto">
                                    <SocialLogin />
                                    <form onSubmit={handleSubmit(onSubmit)} className='pl-4'>
                                        <div class="form-group mb-3">
                                            <input id="inputName" type="text" placeholder="Name" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"
                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: 'Name is required'
                                                    }
                                                })} />
                                            <label className="label">
                                                {errors.name?.type === 'required' && <span className="label-text-alt text-danger">{errors.name.message}</span>}
                                            </label>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input id="inputEmail" type="email" placeholder=" Enter Email" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                                {...register("email", {
                                                    required: {
                                                        value: true,
                                                        message: 'Email is required'
                                                    },
                                                    pattern: {
                                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                        message: 'please input a valid email'
                                                    }
                                                })} />
                                            <label className="label">
                                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                            </label>

                                        </div>
                                        <div class="form-group mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                                {...register("password", {
                                                    required: {
                                                        value: true,
                                                        message: 'password is required'
                                                    },
                                                    minLength: {
                                                        value: 6,
                                                        message: 'must be 6 characters or longer'
                                                    }
                                                })} />
                                            <label className="label">
                                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                            </label>
                                        </div>
                                        {signInError}
                                        <button type="submit" class="btn sign_up p-3 mt-2 btn-block text-light text-uppercase mb-2 rounded-pill shadow-sm">Sign Up</button>
                                    </form>
                                    <p class=" fs-6 text-primary mt-3">Already have an account ?  <Link to='/login' className='sign_ ' >Sign in</Link></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;