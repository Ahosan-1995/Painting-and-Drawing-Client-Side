
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {


    const {user,logOut}=useContext(AuthContext);



    const handleSignOut= (e)=>{
        logOut()
        .then()
        .catch()
    }


    const navLinks = <>

        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <NavLink to='/allArt'><li><a>ALL ART & CRAFT</a></li></NavLink>
        <NavLink to='/add'><li><a>Add ART & CRAFT</a></li></NavLink>
        <NavLink to='/myCraft'><li><a>MY ART & CRAFT</a></li></NavLink>
        {/* <NavLink to='/login'><li><a>Login</a></li></NavLink> */}
        <NavLink to='/register'><li><a>Register</a></li></NavLink>
        <NavLink to='/update'><li><a>Update</a></li></NavLink>
    
    </>

    return (
        <div className='bg-blue-950'>
            <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-950 rounded-box w-52 text-white">
                            {navLinks}
                        </ul>
                        </div>
                        <img className='w-20' src="/logo-white.png" alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-white">
                        {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                    {
                            user ? 
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-white">
                                <span className="text-xs">{user.displayName}</span>
                                </div>
                            </div>
                            :
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full bg-white">
                                   
                                </div>
                            </div>
                        }
                    {
                            user ? 
                            <button onClick={() => {toast('Logged out successfully.'); handleSignOut();}}  className="btn">Sign Out</button>
                            :
                            <Link to='/login'><button className="btn">Login</button></Link>
                          
                        }
                    </div>
            </div>
        </div>
    );
};

export default Navbar;