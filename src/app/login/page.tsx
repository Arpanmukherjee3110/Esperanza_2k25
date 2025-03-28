"use client";
import React, { useState,  } from 'react';
import { ArrowLeft, Apple, Facebook } from 'lucide-react';
import rocketImg from '../../assets/rocket.png';
 import logoImg from '../../assets/logo.png';
import Image from 'next/image';
// import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false); // Added state for toggling password visibility
  const [errorMessage, setErrorMessage] = useState('');
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const user = localStorage.getItem('user');
  //   if (user) navigate('/dashboard'); // Redirect if already logged in
  // }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (isLogin) {
      // Login logic
      const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
      if (storedUser.email === formData.email && storedUser.password === formData.password) {
        localStorage.setItem('token', 'dummy-token'); // Simulate token storage
        // navigate('/dashboard'); // Redirect to dashboard
      } else {
        setErrorMessage('Invalid email or password.');
      }
    } else {
      // Signup logic
      if (formData.fullName && formData.email && formData.password) {
        localStorage.setItem('user', JSON.stringify(formData));
        localStorage.setItem('token', 'dummy-token'); // Simulate token storage
        // navigate('/dashboard'); // Redirect to dashboard
      } else {
        setErrorMessage('All fields are required.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto flex flex-col lg:flex-row absolute inset-0">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-4 md:p-6 lg:p-8 flex flex-col">
          <div className="flex items-center gap-4 md:gap-8">
            <button className="p-2 hover:bg-white/10 rounded-full transition">
              <ArrowLeft size={24} />
            </button>
            <Image src={logoImg} alt="Logo" className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          
          <div className="flex-1 flex flex-col justify-center max-w-md mx-auto lg:mx-0 text-center lg:text-left py-8 lg:py-0">
            <h1 
              className="text-3xl md:text-4xl lg:text-6xl font-bold text-red-600 mb-4"
              style={{
                position: 'absolute',
                left: '95px',
                top: '180px',
                fontFamily: 'Kerla, sans-serif',
              }}
            >
              Welcome to our <br /> community
            </h1>
            <h5 
              className="text-gray-400 text-sm md:text-base"
              style={{
                position: 'relative',
                width: '300px',
                height:800,
                left: '66px',
                top: '260px',
                fontFamily: 'Kerla, sans-serif',
              }}
            >
              Start your new journey with us <br /> and join our community
            </h5>
            <button 
              className="bg-red-600 text-white rounded-full"
              style={{
                width: '260px',
                height: '56px',
                top: '502px',
                left: '105px',
                position: 'absolute',
              }}
            >
              Explore our community
            </button>
          </div>
        </div>

        {/* Rocket Image - Visible on all screens */}
        <div className="lg:hidden  w-full flex justify-center my-8">
          <Image 
            src={rocketImg}
            alt="Rocket illustration" 
            className="w-64 h-64 object-contain"
          />
        </div>
        
        <div className="hidden lg:block absolute" style={{
          width: '1380px',
          height: '1250px',
          top: '52%',
          left: '41%',
          transform: 'translate(-50%, -50%) rotate(8.7deg)',
        }}>
          <Image 
            src={rocketImg}
            alt="Rocket illustration" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center bg-black">
          <div className="w-full max-w-md bg-black">
            <div className="flex gap-4 md:gap-8 mb-8 md:mb-12 justify-center lg:justify-start relative z-20">
            <button 
  className={`text-base md:text-lg pb-2 ${!isLogin ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-400'}`}
  onClick={() => setIsLogin(false)}
>
                sign up
              </button>
              <button 
                className={`text-base md:text-lg pb-2 ${isLogin ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-400'}`}
                onClick={() => setIsLogin(true)}
              >
                login
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-4  relative z-10">
              {!isLogin && (
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 md:p-4 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm md:text-base relative z-20"
                    value={formData.fullName}
                    onChange={(e) => {
                      console.log('Full Name:', e.target.value); // Debugging log
                      setFormData({ ...formData, fullName: e.target.value });
                    }}
                    required
                  />
                </div>
              )}
              
              <div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full p-3 md:p-4 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm md:text-base relative z-20"
                  value={formData.email}
                  onChange={(e) => {
                    console.log('Email:', e.target.value); // Debugging log
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  required
                />
              </div>

              <div>
                <input
                  type={showPassword ? 'text' : 'password'} // Toggle input type
                  placeholder="Password"
                  className="w-full p-3 md:p-4 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-sm md:text-base relative z-20"
                  value={formData.password}
                  onChange={(e) => {
                    console.log('Password:', e.target.value); // Debugging log
                    setFormData({ ...formData, password: e.target.value });
                  }}
                  required
                />
                <div className="mt-2 flex items-center gap-4">
                  <div>
                    <input
                      type="checkbox"
                      id="showPassword"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)} // Toggle visibility
                    />
                    <label htmlFor="showPassword" className="ml-2 text-sm md:text-base">
                      Show Password
                    </label>
                  </div>
                  <div>
                    <input type="checkbox" id="remember" className="rounded" />
                    <label htmlFor="remember" className="ml-2 text-sm md:text-base">Remember me</label>
                  </div>
                </div>
              </div>

              {errorMessage && <p className="text-red-500">{errorMessage}</p>}

              <button type="submit" className="w-full bg-red-600 text-white py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold">
                {isLogin ? 'LOGIN' : 'SIGN UP'}
              </button>

              <p className="text-center text-sm md:text-base">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                <span 
                  onClick={() => setIsLogin(!isLogin)} 
                  className="text-red-600 underline cursor-pointer"
                >
                  {isLogin ? 'Sign up' : 'Login'}
                </span>
              </p>

              <div className="relative my-6 md:my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs md:text-sm">
                  <span className="px-2 bg-black text-gray-400">Or connect with</span>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4 pb-8">
                <button type="button" className="flex-1 p-2 md:p-3 rounded-md border border-white hover:bg-white/5">
                  <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" 
                       alt="Google" 
                       className="h-5 md:h-6 mx-auto" />
                </button>
          
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login

