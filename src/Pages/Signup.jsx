import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { useAuth } from '../contexts/AuthContext';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { signupUser } = useAuth();

  const handleSignup = () => {
    if (!name || !email || !mobile || !password) {
      alert('Please fill all fields');
      return;
    }

    const newUser = { name, email, mobile, password };
    const result = signupUser(newUser);

    if (result === "duplicate") {
      alert('Email or Mobile already registered!');
      return;
    }

    if (result === true) {
      alert('Signup successful! Please login.');
      navigate('/login');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <motion.div className="flex justify-center items-center h-screen bg-gray-100"
        initial={{ x:-30 ,opacity:0.5}}
        animate={{x:0, opacity:1}}
        transition={{duration:0.6, ease:"easeOut"}}
      
      >
      <div className="bg-white relative p-8 rounded-lg shadow-lg w-96">
        <button onClick={handleCancel} className="absolute top-2 right-2 text-gray-600 hover:text-red-500">
          <AiOutlineClose size={24} />
        </button>

        <h2 className="text-2xl text-center font-semibold mb-4">Signup</h2>
        
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md p-2 mb-4 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="border rounded-md p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-md p-2 mb-4 w-full"
        />

        <button onClick={handleSignup} className="bg-green-500 text-white p-2 mb-4 rounded-full w-full">
          Sign up
        </button>

        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <button onClick={() => navigate('/login')} className="text-blue-500 hover:underline cursor-pointer">
              Login
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default SignupPage;
