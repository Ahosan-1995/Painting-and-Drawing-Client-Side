import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";


const Register = () => {

    useEffect(()=>{
        document.title = 'Batata-Register';
    },[])

    const {createUser}=useContext(AuthContext);
    

    // Passwrd toggle
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = (e)=>{
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const url = form.get('url');



        
        
        console.log(email,password,name,url);

// Password varification done
            if(password.length<6){
                toast('password should be atleast 6 character')
                return;
            }else if(!/[A-Z]/.test(password)){
                toast('password should be contain atleast one upper case character')
                return;
            }else if(!/[a-z]/.test(password)){
                toast('password should be contain atleast one lower case character')
                return;
            }else{
                toast('You have register successfully')
            }



        createUser(email, password)
        .then(result=>{
            console.log(result);

            updateProfile(result.user,{
                displayName: name,
                photoURL: url
            })
            .then()
            .catch()
        })
        .catch(error=>{
            console.error(error); 
            toast(error.message);
        })


        

    }




    return (
        <div>
                <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold"><h1 className="animate__animated animate__flip">Register now!</h1></h1>
                    <p className="py-6">For assistance, contact our support team at BatotaPaint@gmail.com</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" name="url" placeholder="Image URL" className="input input-bordered" />
                        </div>



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
                        <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                        <p className="text-center mb-10">Already have an account please <NavLink to='/login'><span className="font-bold  text-blue-800">Login</span></NavLink></p>
                    </div>
                </div>
            </div>






            
        </div>
    );
};

export default Register;