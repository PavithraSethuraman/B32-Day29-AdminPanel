import "./App.css";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users.js";
import CreateUser from "./CreateUser";
import UserEdit from "./UserEdit";
import UserView from "./UserView";
import Profile from "./Profile";
import CreateProfile from "./CreateProfile";
import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";
import { UserProvider } from "./UserContext";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("Pavithra SethuRaman");
  const [users, setUsers] = useState([]);
  return (
    <BrowserRouter>
      <div id="wrapper">
        <UserProvider value={{ userName, setUserName, users, setUsers }}>
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div className="container-fluid">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/create-user" element={<CreateUser />} />
                  <Route path="/user-view/:id" element={<UserView />} />
                  <Route path="/user-edit/:id" element={<UserEdit />} />
                  <Route path="/create-profile" element={<CreateProfile />} />
                  <Route path="/profile-view/:id" element={<ProfileView />} />
                  <Route path="/profile-edit/:id" element={<ProfileEdit />} />
                  <Route path="/profile-delete/:id" element={<Profile />} />
                </Routes>
              </div>
            </div>
          </div>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
