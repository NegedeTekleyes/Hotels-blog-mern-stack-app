import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../redux/feature/auth/authApi';
import { useDispatch } from 'react-redux';
import { setUserAndToken} from '../../redux/feature/auth/authSlice'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
const [loginUser, {isLoading: loginLoading}] = useLoginUserMutation()
   
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      };
    //   console.log(data)

    try {
      const response = await loginUser(data).unwrap(); // Call the mutation correctly
        console.log(response);
      const { token, user } = response;
      dispatch(setUserAndToken({user,token}))
        alert("Login successful")
        navigate('/')
    } catch (error) {
      console.error(error);
      setMessage('Please provide a valid email and password.');
    }
  };

  return (
    <div className="max-w-sm bg-white mx-auto p-8 mt-36">
      <h2 className="text-2xl font-semibold pt-5">Please Login</h2>
      <form onSubmit={handleLogin} className="space-y-5 max-w-sm mx-auto pt-8">
        <input
          type="email"
          value={email}
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-100 focus:outline-none px-5 py-3"
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-100 focus:outline-none px-5 py-3"
        />
              {
                  message && <p className="text-red-500">{message}</p>
              }
        <button
          type="submit"
          disabled={loginLoading}
          className={`w-full mt-5 py-3 font-medium rounded-md text-white ${
            loginLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-black hover:bg-indigo-500'
          }`}
        >
          {loginLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p className="my-5 text-center">
        Don't have an account?{' '}
        <Link to="/register" className="text-red-700 italic">
          Register
        </Link>{' '}
        here.
      </p>
      </div>
      
    );

};

export default Login;
