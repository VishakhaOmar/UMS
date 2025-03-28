import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/users");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
     <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-500 opacity-30 blur-3xl"
        animate={{
          borderRadius: ["20%", "50%", "20%"],
          scale: [1, 1.5, 1],
          x: ["-30%", "30%", "-30%"],
          y: ["-30%", "30%", "-30%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-purple-500 opacity-30 blur-3xl"
        animate={{
          borderRadius: ["50%", "20%", "50%"],
          scale: [1, 1.4, 1],
          x: ["30%", "-30%", "30%"],
          y: ["30%", "-30%", "30%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}/>
        
        
      <form onSubmit={handleLogin} className="h-[40vh] w-[35vw] relative z-10 bg-gray-900 bg-opacity-80 p-8 rounded-2xl shadow-xl text-white text-center backdrop-blur-md" >
        <h2 className="text-2xl font-bold mb-1">Login</h2>
        <p className="text-gray-500 mb-1">Please enter your credentials</p>
        {error && <p className="text-red-500">{error}</p>}
        <div className=" flex flex-col justify-center items-center gap-2 w-full h-[70%] mt-1 rounded shadow-md">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 rounded bg-gray-800 border border-amber-100 focus:outline-none "
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-amber-100 focus:outline-none"
        />
        <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold p-2 rounded">
          Login
        </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
