import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './layouts/SignIn'
import SignUp from './layouts/SignUp'
import ForgotPassword from './layouts/ForgotPassword'
import Dashboard from './layouts/Dashboard'
import Tables from './layouts/Tables'
import Orders from './layouts/Orders'
import Bills from './layouts/Bills'
import CustomerMenu from './layouts/CustomerMenu'
import OrderHistory from './layouts/OrderHistory'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/menu" element={<CustomerMenu />} />
        <Route path="/order-history" element={<OrderHistory />} />
      </Routes>
    </Router>
  )
}

export default App