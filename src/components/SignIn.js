import { useState } from 'react';

import { Icon } from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';

export default function SignIn(){
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    function handleClick() {
        if(type === 'password'){
            setType('text');
            setIcon(eye);
        } else if (type === 'text') {
            setIcon(eyeOff);
            setType('password');
        }
    }

    return (
        <div className="sign_in">
            <div className="form_cont">
                <div className="form_divs">Sign in using your email address</div>
                <form>
                    <div className="form_divs">
                        <label htmlFor="email">Email:</label>
                        <input type='email' id="email" placeholder="Enter your email address" required/>
                    </div>
                    <div className="form_divs">
                        <label htmlFor='password'>Password:</label>
                        <div className='pass_cont'>
                            <input type={type} id="password" placeholder="Enter your password" required/>
                            <span onClick={handleClick}><Icon icon={icon}/></span>
                        </div>
                    </div>
                    <div className="form_divs">
                        <button>Sign In</button>
                    </div>
                    <div className="remember_me">
                        <div>
                            <input type='checkbox'></input>
                            <span>Remember me</span>
                        </div>
                        <a href="">Forgot password?</a> 
                    </div>
                </form>
                <div className='or'>Or</div>
                <button className='sign_up'>Sign up!</button>
            </div>
        </div>
    )
}