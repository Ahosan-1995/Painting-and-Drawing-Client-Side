import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Register = () => {
    return (
        <div>
                <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold"><h1 className="animate__animated animate__flip">Register now!</h1></h1>
                    <p className="py-6">For assistance, contact our support team at comfortrealestate@gmail.com</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  className="card-body">
                        

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
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <span><FaEyeSlash /> : <FaEye /></span>
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