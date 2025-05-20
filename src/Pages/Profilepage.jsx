import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiOutlineClose } from "react-icons/ai";

function ProfilePage() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/'); // logout after go to login page
  };
  const handleCancel = () => {
    navigate('/');
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">No user logged in.</p>
      </div>
    );
  }

  return (
    <motion.div className="flex justify-center items-center h-screen bg-gray-100"
          initial={{ opacity: 0, y: -60 }}        // Start position
          animate={{ opacity: 1, y: 0 }}         // End position
          exit={{ opacity: 0, y: 60 }}          // Optional: on exit
          transition={{ duration: 0.6 }}>

      <div className="bg-white relative p-8 rounded-lg shadow-lg w-96">

          <button onClick={handleCancel} className="absolute top-2 right-2 text-gray-600 hover:text-red-500">
              <AiOutlineClose size={24} />
           </button>

        <h2 className="text-2xl font-semibold mb-6 text-center">Profile</h2>

        <div className="space-y-4">
          <div>
            <p className="text-gray-600">Name:</p>
            <p className="font-medium">{user.name}</p>
          </div>
          <div>
            <p className="text-gray-600">Email:</p>
            <p className="font-medium">{user.email}</p>
          </div>
          <div>
            <p className="text-gray-600">Mobile:</p>
            <p className="font-medium">{user.mobile}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full w-full"
        >
          Logout
        </button>
      </div>
    </motion.div>
  );
}

export default ProfilePage;
