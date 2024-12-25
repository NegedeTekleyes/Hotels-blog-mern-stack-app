import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../redux/feature/auth/authApi';


const Register = () => {
  const navigate = useNavigate()
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password
    }
    try {
      await registerUser(data).unwrap()
      alert("Registered successfully!")
      navigate("/login");

    } catch (error) {
      setMessage("Registration failed")
      //alert("Registration failed")
    }
    
  };

  return (
    <div className="max-w-sm bg-white mx-auto p-8 mt-36">
      <h2 className="text-2xl font-semibold pt-5">Please Register</h2>
      <form 
        onSubmit={handleRegister} className="space-y-5 max-w-sm mx-auto pt-8">
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)} // Added onChange handler
          placeholder="Username"
          required
          className="w-full bg-gray-100 focus:outline-none px-5 py-3"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Added onChange handler
          placeholder="Email"
          required
          className="w-full bg-gray-100 focus:outline-none px-5 py-3"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Added onChange handler
          placeholder="Password"
          required
          className="w-full bg-gray-100 focus:outline-none px-5 py-3"
        />
        {message && <p className="text-red-500">{message}</p>}
        <button
          //type="submit"
          className="w-full mt-5 bg-black hover:bg-indigo-500 text-white font-medium rounded-md"
        >
          Register
        </button>
      </form>
      <p className="my-5 text-center">
        Already have an account? Please
        <Link to="/login" className="text-red-700 italic">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
