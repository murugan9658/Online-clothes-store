import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user already logged in (localStorage)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Save user to localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Signup function
  const signupUser = (data) => {
    localStorage.setItem("signupUser", JSON.stringify(data));
    return true;
  };

  // Login function
  const loginUser = (email, password) => {
    const stored = JSON.parse(localStorage.getItem("signupUser"));
    if (!stored) {
      return "Please signup first!";
    }
    if (stored.email === email && stored.password === password) {
      setUser(stored);
      return "Login successful!";
    } else {
      return "Invalid credentials!";
    }
  };

  // Logout function
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signupUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
