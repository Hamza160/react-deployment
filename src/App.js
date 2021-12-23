import TopBar from "./components/topbar/TopBar"
import Home from './pages/home/Home'
import Write from './pages/write/Write'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single"
import Settings from './pages/settings/Settings'
const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <TopBar user={user} />
      <Routes>
        <Route path="/" index element={user ? <Home /> : <Login />} />
        <Route path="login" element={!user ? <Login /> : <Home />} />
        <Route path="register" element={!user ? <Register /> : <Home />} />
        <Route path="single/:id" element={user ? <Single /> : <Login />} />
        <Route path="write" element={user ? <Write /> : <Login />} />
        <Route path="settings" element={user ? <Settings /> : <Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
