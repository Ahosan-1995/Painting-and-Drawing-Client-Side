import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";





const Login = () => {


    useEffect(()=>{
        document.title = 'Batata-Login';
    },[])

        const {signIn,createGitHub,signInWithGoogle} = useContext(AuthContext);
        const location = useLocation();
        const navigate = useNavigate();
        
        const [showPassword, setShowPassword] = useState(false);



        const handleLogin = (e)=>{
        
            e.preventDefault();
            // console.log(e.currentTarget);
            const form = new FormData(e.currentTarget);
            const email = form.get('email');
            const password = form.get('password');
    
            console.log(email,password);
    
            signIn(email,password)
            .then(result=>{
                console.log(result.user)
                toast('Logged in successfully.');
    
                navigate(location?.state? location.state: '/');
    
            })
            .catch(error=>{
                console.error(error)
                toast('Invalid Email or password.')
            })
            
    
        }
    
        // GOOGLE SIGN IN
        // const handleGoogleSignIn =()=>{
        //     signInWithGoogle1()
        //     .then(result=>{
        //       console.log(result.user);
        //     })
        //     .catch(error=>{
        //       console.error(error.message);
        //     });
        //   }


         // GOOGLE SIGN IN
         const handleGoogleSignIn=()=>{
                signInWithGoogle()
                .then(result=>{
                    console.log(result.user);
                })
                .catch(error=>{
                    console.error(error)
                })
         }



    // GIT SIGN IN
        const handleGitHubSignIn=()=>{
            createGitHub()
            .then(result=>{
              console.log(result.user)
            })
            .catch(error=>{
              console.error(error.message)
            })
          }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">For assistance, contact our support team at comfortrealestate@gmail.com</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="flex w-full items-center justify-between ">
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                        <span onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                        </div>
                        </div>
                        <div className="form-control mt-6">
                        <button  className="btn btn-primary">Login</button>
                        </div>
                    </form>
                        <div className="text-center mb-8">
                            <p>You can also login with</p>
                            <div className="flex gap-3 text-2xl text-blue-900  justify-center ">
                            
                              <FaGoogle onClick={handleGoogleSignIn}></FaGoogle>
                              <FaGithub onClick={handleGitHubSignIn}></FaGithub>
                              
                            </div>
                            <p>Do not have an account please <NavLink to='/register'><span className="font-bold  text-blue-800">Register</span></NavLink></p>
                        </div>
                    </div>
                </div>
            </div>









        </div>
    );
};

export default Login;