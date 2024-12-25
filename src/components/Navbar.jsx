import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import ErrorPage from './ErrorPage';
import avatarImg from "/src/assets/commentor.png";
import { logout } from '../redux/feature/auth/authSlice';
import { useLogoutUserMutation } from '../redux/feature/auth/authApi';

const navList = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/About-us" },
    { name: "Privacy Policy", path: "/Privacy-policy" },
    { name: "Contact Us", path: "/Contact-us" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user } = useSelector((state) => state.auth);
    // console.log(user)

 const dispatch = useDispatch();
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [logoutUser] = useLogoutUserMutation()
    // // console.log(document.cookie)
    
    
    const handleLogout = async () => {
        try {
            await logoutUser().unwrap();
            dispatch(logout())
        } catch (error) {

        }
    }

    return (
        <header className='bg-white py-6 border'>
            <nav className='container mx-auto flex justify-between px-5'>
                <a href="/">
                    <img src="/logo.png" alt="" className='h-12' />
                </a>
                <ul className='sm:flex hidden items-center gap-8'>
                    {navList.map((list, index) => (
                        <li key={index}>
                            <NavLink to={list.path} className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            >{list.name}
                                
                            </NavLink>
                        </li>
                    ))
                    }

                    {/* render  btn based on user login activity*/}
                    {
                        user && user.role === "user" ? (<li className='flex items-center gap-3'>
                            <img src={avatarImg} alt="" className='w-8 h-8' />
                            

                            <button
                                onClick={handleLogout}
                                className='bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm'>Logout</button>
                        </li>): (
                             <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                        )
                    }
                    {
                        user && user.role === "admin" && (<li className='flex items-center gap-3'>
                            <img src={avatarImg} alt="" className='w-8 h-8' />
                            <Link to ="/dashboard"><button className='bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm'>Dashboard</button></Link>
                        </li>)
                             
                        
                    }
                   
                </ul>
                {/* Toggle Menu */}
                <div className='flex items-center sm:hidden'>
                    <button onClick={toggleMenu} className='flex items-center px-3 py-4
                     bg-[#fafafa] rounded text-sm
                      text-gray-500 hover:text-gray-900'>
                        {isMenuOpen ? <IoClose className='text-6xl' /> : <HiMenu className='size-6' />}
                    </button>
                </div>
            </nav>
            {/* Mobile Menu Items */}
            {isMenuOpen && (
                <ul className='fixed top-16 left-0 w-full h-auto pb-8 border-b bg-gray shadow-sm z-50'>
                    {navList.map((list) => (
                        <li key={list.name} className='mt-5 px-4'>
                            <NavLink to={list.path} className={({ isActive }) => (isActive ? "active" : "")}>
                                {list.name}
                            </NavLink>
                        </li>
                    ))}
                    <li className='px-4 mt-5'>
                        <NavLink onClick={() => setIsMenuOpen(false)} to="/login">Login</NavLink>
                    </li>
                </ul>
            )}
        </header>
    );
}

export default Navbar;