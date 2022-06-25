import React from 'react';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import auth from '../fireabase.init';
import './SocialLogin.css'
import { FaHamburger } from "react-icons/fa";
const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


  let errorMessage;
  if (error) {
    errorMessage =
      <div>
        <p className='text-danger'>Error: {error?.message}</p>
      </div>
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user){
    navigate('/home')
  }
  return (
    <div>
      {errorMessage}
      <div class="d-grid mb-2">
  <div class="btn border google_btn border-primary btn-lg d-flex btn-google btn-login fw-bold text-uppercase" type="submit" onClick={() => signInWithGoogle()}><span className='me-4'><FcGoogle/></span>
    <i class="fab fa-google me-2"></i> Sign up with Google
  </div>
</div>

<div class="d-grid">
  <div class="btn border border-primary google_btn btn-lg d-flex btn-lg btn-facebook btn-login fw-bold text-uppercase" type="submit">
  <span className='me-4 text-primary'><BsFacebook/></span>
    <i class="fab fa-facebook-f me-2"></i> Sign up with Facebook
  </div>
</div>
<div class="divider divider-rounded divider-center"><span className='burger'><FaHamburger/></span></div>
    </div>
  );
};

export default SocialLogin;






