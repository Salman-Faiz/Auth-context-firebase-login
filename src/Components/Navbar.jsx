import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../Providers/AuthProvider";
import auth from "../firebase/firebase.config";



const Navbar = () => {

    const { user ,signOutUser } = useContext(AuthContext);

    const navLinks = <>
    
    
    <li><NavLink to={'/'}>home</NavLink></li>
    <li><NavLink to={'/login'}>login</NavLink></li>
    <li><NavLink to={'/register'}>Register</NavLink></li>
    <li><NavLink to={'/orders'}>Order List</NavLink></li>
    
   {user && <>
    {/* <li><NavLink to={'/profile'}>profile</NavLink></li> */}
    <li><NavLink to={'/blogs'}>my blogs</NavLink></li>
    </>}
    </>

   

   const handleSignOutUser = ()=>{

    signOutUser(auth)
    .then(()=>{
        console.log('sign out successfully')
    })
    .catch(error => console.error(error.messege))
   }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {navLinks}
                       
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Auth Context login</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                  
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?  <div>
                    <h4>{user.email}</h4>
                   <button onClick={handleSignOutUser} className="btn">Sign Out</button>
                </div> :  <Link to='/login'>Login now</Link>
                }
                
                
            </div>
        </div>
    );
};

export default Navbar;