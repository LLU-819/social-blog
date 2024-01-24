import Navbar from "./components/navBar/NavBar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate
} from "react-router-dom";


function App() {
  const currentUser = true
  const Layout = () => {
    return (
      <div className="theme-light">
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children
  }
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route index element={<Home />} />
        <Route path="profile/:id" element={<Profile />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      {/* <Route path=":id" element={<UserProfile />} /> */}
    </Routes>
  </BrowserRouter>;
}

export default App;
