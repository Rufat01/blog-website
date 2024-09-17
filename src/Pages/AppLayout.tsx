import Footer from "../components/Footer"
import Header from "../components/Header"
import { Outlet } from 'react-router-dom'
import ScrollToTop from "../components/ScrollToTop"
import React from "react"

type AppLayoutProps = {
   active: boolean,
   setActive: React.Dispatch<React.SetStateAction<boolean>>,
   darkMode: () => void
}

const AppLayout = ({active, setActive, darkMode} : AppLayoutProps) => {
  return (
    <div>
        <Header active={active} setActive={setActive} darkMode={darkMode}/>

        <div>
            <ScrollToTop />
            <Outlet />
        </div>

        <Footer />
    </div>
  )
}

export default AppLayout
