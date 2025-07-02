import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { useRegister } from '../../context/RegisterContext';

const Register = () => {
    const {submitForm,setData, data} = useRegister();
    return (
        <div className='form_container'>

            <form action="#" className='main_form' onSubmit={submitForm}>
                <div className="sign_title">Register</div>
                <div className="input_field">
                    <input type="text" placeholder='Complete name' name='name' value={data.name || ''}
                    onChange={(e) => setData(prev => ({...prev, name: e.target.value}))}/>
                </div>
                <div className="input_field">
                    <input type="text" placeholder='Email Address' name='email' value={data.email || ''}
                    onChange={(e) => setData(prev => ({...prev, email: e.target.value}))}/>
                </div>
                <div className="input_field">
                    <input type="text" placeholder='Password' name='password' value={data.password || ''}
                    onChange={(e) => setData(prev => ({...prev, password : e.target.value}))}/>
                </div>
              

                <button type='submit' className='submit_btn'>Register Now</button>
                <p>Already have an account?  <Link to="/login"> Login here</Link></p>
            </form>

        </div>
    )
}

export default Register