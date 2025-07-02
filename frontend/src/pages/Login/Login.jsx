import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useLogin } from '../../context/LoginContext';

const Login = () => {
    const {submitForm, data,handleChangeInout} = useLogin();
    return (
        <div className='form_container'>

            <form action="#" className='main_form' onSubmit={submitForm}>
                <div className="sign_title">Login</div>
               
                <div className="input_field">
                    <input type="text" placeholder='Email Address' name='email' value={data.email}
                    onChange={handleChangeInout}/>
                </div>
                <div className="input_field">
                    <input type="text" placeholder='Password' name='password' value={data.password}
                    onChange={handleChangeInout}/>
                </div>
              

                <button type='submit' className='submit_btn'>Login Now</button>
                <p>Don't have an account yet?  <Link to="/register"> Register here</Link></p>
            </form>

        </div>
    )
}

export default Login
    

