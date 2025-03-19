import { useState } from "react"
import { navbarContainer, navbarLogo, navbarMobileOptions, navbarOptions, navbarSection } from "../../assets/styles/navbar.css"
import { Link } from "react-router"
import { HOME_PATH, RESPONSIVE_PATH } from "../../navigation/navigation-routes-names"
import burgerIcon from "../../assets/images/burger-icon.svg"
import logo from "../../assets/images/logo.png"
import { hideMobile, mobileOnly, sectionContainer } from "../../assets/styles/core.css"
import { borderButton } from "../../assets/styles/buttons.css"

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const handleBurgerMenu = () => {
        setOpenMenu((prev) => !prev)
    }

    return (
        <nav className={navbarSection}>
            <div className={[navbarContainer, sectionContainer].join(" ")}>
                <Link to={HOME_PATH}>
                    <img
                        src={logo}
                        alt="Logo"
                        className={navbarLogo}
                    />
                </Link>

                <div className={[navbarOptions, hideMobile].join(" ")}>
                    <Link
                        to={HOME_PATH}
                    >
                        Home
                    </Link>

                    <Link
                        to={RESPONSIVE_PATH}
                    >
                        Responsive
                    </Link>
                </div>

                <button
                    className={[borderButton, hideMobile].join(" ")}
                    onClick={() => {
                        console.log("On login")
                    }}
                >
                    Login
                </button>

                <img
                    alt="Menu Icon"
                    className={mobileOnly}
                    src={burgerIcon}
                    onClick={() => handleBurgerMenu()}
                />
            </div>

            {openMenu && (
                <div className={[mobileOnly, navbarMobileOptions].join(" ")}>
                    <Link to={HOME_PATH}>Home</Link>
                    <Link to={RESPONSIVE_PATH}>Responsive</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar