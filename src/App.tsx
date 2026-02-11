import { Routes, Route } from "react-router-dom";
import './styles/app.scss'
import Home from "./pages/home.tsx";
import Footer from './components/footer.tsx'
import Header from './components/header.tsx'

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
