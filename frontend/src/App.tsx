import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './layouts/Login'
import SignUp from './layouts/SignUp'
import ForgotPassword from './layouts/ForgotPassword'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App