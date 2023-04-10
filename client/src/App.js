import Header from './components/Header'
import Login from './components/Login'
import Register from "./components/Regeister";
import Home from './components/Home'
import Error from './components/Error'

import { Routes, Route, useNavigate } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
