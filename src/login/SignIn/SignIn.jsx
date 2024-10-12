import { Input } from '@material-tailwind/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signIn.css'
import signUp from '../../assets/sign-up.png'
import signIn from '../../assets/login.png'
import signIn2 from '../../assets/login2.png'
import { FaSignInAlt } from 'react-icons/fa';
import { MdOutlineAssignmentInd } from 'react-icons/md';


const SignIn = () => {
    const [isActive, setIsActive] = useState(false); 

    const handleSignUpClick = () => {
        setIsActive(true);
      };
      const handleSignInClick = () => {
        setIsActive(false);
      };

    return (
        <div className='flex body flex-col h-screen justify-center'>
             <div className='my-10 '>
            <div className='full  flex items-center justify-center'>
             <div className={isActive ? 'active' : ''} id="container">

{/* -------Register------- */}
<div className="form-container sign-up">
            <form >
                <h1 className='font-semibold text-3xl mb-3'>Create Account</h1>
               

                <div className='w-72 mt-3'>
                <Input name='name' size="lg" label="Name" />
                </div>
                
            
                
                
                <div className='w-72 mt-3'>
                <Input name='email' size="lg" type='email' label="Email" />
                </div>
                <div className='w-72 mt-3'>
                <Input name='pass' size="lg" type='password' label="Password" />
                </div>
                     
               
                <Link>
                <div className='text-blue-800 text-start text-sm mb-'>Forget Your Password?</div>
                </Link>
                <Link to='/signUpContact'>
                <button className='buttons'>Next</button>
                </Link>
                
            </form>
        </div>



{/* --------Login--------- */}
             <div className="form-container sign-in">


            <form >

            <h1 className='font-semibold text-3xl'>Sign In</h1>
             
             
             <div className='w-72 mt-3'>
             <Input name='email' size="lg" type='email' label="Email" />
             </div>
             <div className='w-72 mt-4'>
             <Input name='pass' size="lg" type='password' label="Password" />
             </div>
             <Link>
                <div className='text-blue-800 text-start text-sm mb-'>Forget Your Password?</div>
                </Link>
             <button className='buttons'>Sign In</button>

            </form>
        
     </div>



       

        <div className="toggle-container">
            <div className="toggle bg-gradient-to-r from-[#ffba08] via-[#e85d04] to-[#ffba08]">
                <div className="toggle-panel toggle-left">
                <img className='w-[22rem]' src={signUp} alt="" />
                    <button onClick={handleSignInClick}
                    className="hiddenn-btn flex items-center justify-center gap-2" id="login" >Sign In
                    <FaSignInAlt className='text-md' />
                    </button>
                </div>
                <div className="toggle-panel toggle-right">
                    <img className='w-96'src={signIn2} alt="" />
                    
                    <button 
                    onClick={handleSignUpClick}className="hiddenn-btn flex items-center gap-2" id="register">Sign Up
                    <MdOutlineAssignmentInd className='text-xl' />
                    </button>
                </div>
            </div>
        </div>
    </div>
        </div>
        </div>
        </div>
    );
};

export default SignIn;