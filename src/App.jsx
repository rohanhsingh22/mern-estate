import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./pages/SignIn"
import SingUp from "./pages/SingUp"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Home from "./pages/Home"
import Header from "./components/Header"

export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/sign-in" element={<SignIn/>} />
    <Route path="/sign-up" element={<SingUp/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/about" element={<About/>} />
  </Routes>
  </BrowserRouter>
}
