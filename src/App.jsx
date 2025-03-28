import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import UserList from "./UserList";
import EditUser from "./EditUser";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
