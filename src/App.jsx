import LeftBar from "./pages/components/leftBar/LeftBar.jsx";
import RightBar from "./pages/components/rightBar/RightBar.jsx";
import NavBar from "./pages/components/navBar/NavBar.jsx";
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
} from "react-router-dom";


function App() {
  const Layout = ()=>{
    return (
      <div>
        <NavBar />
        <div style={{display: 'flex'}}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    )
  }
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
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
