import { asideNavbarLogo, asideNavContainer, asideNavScreen } from "../../assets/styles/navbar.css";
import adCentralLogo from "../../assets/images/logo.png"
import { Link } from "react-router";
import { HOME_PATH } from "../../navigation/navigation-routes-names";

interface AsideNavbarProps {
    onSelectOption: () => void
}

const AsideNavbar = (props: AsideNavbarProps) => {
    return (
        <div
            className={asideNavScreen}
            onClick={() => props.onSelectOption()}
        >
            <div
                className={asideNavContainer}
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    alt="Menu Icon"
                    className={asideNavbarLogo}
                    src={adCentralLogo}
                />

                <div>
                    <Link
                        to={HOME_PATH}
                    >
                        Stock
                    </Link>
                    <Link
                        to={HOME_PATH}
                    >
                        Inventory
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AsideNavbar;