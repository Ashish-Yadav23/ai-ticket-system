import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckAuth from "./components/check-auth.jsx";

import Admin from "./pages/admin.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Ticket from "./pages/ticket.jsx";
import Tickets from "./pages/tickets.jsx";

function App() {
  return (
    <BrowserRouter>
      <CheckAuth>
        <Routes>
          <Route path="/" element={<Tickets />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/ticket/:id" element={<Ticket />} />
        </Routes>
      </CheckAuth>
    </BrowserRouter>
  );
}

export default App;
