import Footer from "../components/Footer"
import Header from "../components/Header"
import { Outlet } from 'react-router-dom'
import ScrollToTop from "../components/ScrollToTop"

const AppLayout = () => {
  return (
    <div>
        <Header />

        <div>
            <ScrollToTop />
            <Outlet />
        </div>

        <Footer />
    </div>
  )
}

export default AppLayout
