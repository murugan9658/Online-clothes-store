import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { useAuth } from '../contexts/AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const handleLogin = () => {
    const message = loginUser(email, password);
    if (message === "Login successful!") {
      alert(`Welcome back!`);
      navigate('/profile');
    } else {
      alert(message);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    <motion.div className="flex justify-center items-center h-screen bg-gray-100"
      initial={{ x:30 ,opacity:0.5}}
      animate={{x:0, opacity:1}}
      transition={{duration:0.6, ease:"easeOut"}}
      >
      <div className="bg-white relative p-8 rounded-lg shadow-lg w-96">
        <button onClick={handleCancel} className="absolute top-2 right-2 text-gray-600 hover:text-red-500">
          <AiOutlineClose size={24} />
        </button>

        <h2 className="text-2xl text-center font-semibold mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-md p-2 mb-4 w-full"
        />
        <button onClick={handleLogin} className="bg-blue-500 text-white p-2 mb-4 rounded-full w-full">
          Login
        </button>

        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account?{' '}
            <button onClick={handleSignupRedirect} className="text-blue-500 hover:underline cursor-pointer">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default LoginPage;
