import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";
import { navbarContainer, navbarLogo, navbarOption, navbarSection, storeNavbar, storeNavbarContainer } from "../../assets/styles/navbar.css"
import logo from "../../assets/images/logo.png"
import { hideMobile, sectionContainer } from "../../assets/styles/core.css"
import AsideNavbar from "./AsideNavbar"
import SettingsComponent from "./components/settings.component"

const Navbar = () => {
    const { t, i18n } = useTranslation()

    useEffect(() => {
        const savedLang = localStorage.getItem("language") || "en";
        i18n.changeLanguage(savedLang);
    }, [i18n]);

    const [openSettings, setOpenSettings] = useState(false)
    const [openSideNavbar, setOpenSideNavbar] = useState(false)

    const handleBurgerMenu = () => {
        setOpenSettings((prev) => !prev)
    }

    const handleSideNavbar = () => {
        setOpenSideNavbar((prev) => !prev)
    }

    const changeLanguage = () => {
        const currentLanguage = i18n.language
        if (currentLanguage == "en") {
            i18n.changeLanguage("es")
        } else {
            i18n.changeLanguage("en")
        }
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
                        src={"https://app.joinadcentral.com/logo-gradient-official.d9a6481.svg"}
                        alt="store logo"
                        className={navbarLogo}
                        onClick={() => changeLanguage()}
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