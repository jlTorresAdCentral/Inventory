import { useState } from "react"
import { navbarContainer, navbarLogo, navbarOption, navbarSection, storeNavbar, storeNavbarContainer } from "../../assets/styles/navbar.css"
import logo from "../../assets/images/logo.png"
import { hideMobile, sectionContainer } from "../../assets/styles/core.css"
import AsideNavbar from "./AsideNavbar"
import SettingsComponent from "./components/settings.component"

const Navbar = () => {
    const [openSettings, setOpenSettings] = useState(false)
    const [openSideNavbar, setOpenSideNavbar] = useState(false)

    const handleBurgerMenu = () => {
        setOpenSettings((prev) => !prev)
    }

    const handleSideNavbar = () => {
        setOpenSideNavbar((prev) => !prev)
    }

    return (
        <nav className={navbarSection}>
            <div className={[navbarContainer, sectionContainer].join(" ")}>
                <div
                    className={navbarOption}
                    onClick={() => handleSideNavbar()}
                >
                    <p>Menu</p>
                </div>

                <div className={storeNavbarContainer}>
                    <img
                        src={logo}
                        alt="store logo"
                        className={navbarLogo}
                    />
                    <div className={[storeNavbar, hideMobile].join(" ")}>
                        <p>Torres Dev Store</p>
                        <p>Jose Luis T.</p>
                    </div>
                </div>

                <div
                    className={navbarOption}
                    onClick={() => handleBurgerMenu()}
                >
                    <p>Settings</p>
                </div>

                {openSettings && (
                    <SettingsComponent />
                )}
            </div>

            {openSideNavbar && (
                <AsideNavbar
                    onSelectOption={handleSideNavbar}
                />
            )}
        </nav>
    )
}

export default Navbar