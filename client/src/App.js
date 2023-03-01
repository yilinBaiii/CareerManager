
import React  from 'react'; 
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import { Register, Landing, Dashboard, Error } from "./pages/index"

function App() {
  return (
    <BrowserRouter>
      {/* <nav>
      <Link to='/'>Dashboard</Link>
      <Link to='/register'>Register</Link>  
      <Link to='/landing'>Home</Link>
    </nav> */}
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<Error />} />
    </Routes>
</BrowserRouter>
  )
}

export default App;
