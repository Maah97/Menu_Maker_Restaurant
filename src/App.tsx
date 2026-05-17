import { Routes, Route } from "react-router-dom";
import './styles/app.scss'
import Home from "./pages/home.tsx";
import LoginPage from "./pages/login.tsx";
import DashboardLayout from "./layouts/dashboardLayout.tsx";
import Dashboard from "./pages/dashboard/dashboard.tsx";
import MainLayout from "./layouts/mainLayout.tsx";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
