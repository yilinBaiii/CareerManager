import Landing from "./pages/Landing";
import React  from 'react';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
      <Link to='/'>Dashboard</Link>
      <Link to='/register'>Register</Link>
      <Link to='/landing'>Home</Link>
    </nav>
    <Routes>
      <Route path="/" element={<div>Dashboard</div>} />
      <Route path="/register" element={<div>Register</div>} />
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<div>Error</div>} />
    </Routes>
</BrowserRouter>
  )
}

export default App;
