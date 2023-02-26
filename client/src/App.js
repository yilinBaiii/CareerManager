import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Dashboard (developing)</h1>} />
        <Route path="/register" element={<h1>Register (developing)</h1>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<h1>Error (developing)</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
