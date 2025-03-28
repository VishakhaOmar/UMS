import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [page]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white w-screen h-screen">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <table className="w-full h-[80%] border-collapse border border-gray-300">
        <thead>
          <tr className="bg-[#44cdff90] text-center text-">
            <th className="border p-2 ">Avatar</th>
            <th className="border p-2 ">First Name</th>
            <th className="border p-2 ">Last Name</th>
            <th className="border p-2 ">Email</th>
            <th className="border p-2 ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="text-center">
              <td className="border p-2">
                <img src={user.avatar} alt={user.first_name} className="w-10 h-10 rounded-full mx-auto" />
              </td>
              <td className="border p-2">{user.first_name}</td>
              <td className="border p-2">{user.last_name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">
                <Link to={`/edit/${user.id}`} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</Link>
                <button onClick={() => handleDelete(user.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1} className="bg-[#44cdff90] text-white px-4 py-2 rounded disabled:opacity-50">
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages} className="bg-[#44cdff90] text-white px-4 py-2 rounded disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
