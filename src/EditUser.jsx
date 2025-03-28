import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(response.data.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load user data");
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      navigate("/users");
    } catch (err) {
      setError("Failed to update user");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      <form onSubmit={handleSubmit} className="h-[40vh] w-[35vw] relative z-10 bg-gray-900 bg-opacity-80 p-8 rounded-2xl shadow-xl text-white text-center backdrop-blur-md">
        <h2 className="text-2xl font-bold mb-4">Edit User</h2>
        <input
          type="text"
          name="first_name"
          value={user.first_name}
          onChange={handleChange}
          placeholder="First Name"
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          name="last_name"
          value={user.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded w-full mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;