import { Route, Routes } from "react-router";
import { DOS_PATH, HOME_PATH, RESPONSIVE_PATH } from "./navigation-routes-names";
import HomeComponent from "../home/HomeComponent";
import ResponsiveComponent from "../responsive/ResponsiveComponent";

const NavigationRoutes = () => {
    return (
        <Routes>
            <Route
                path={HOME_PATH}
                element={<HomeComponent />}
            />

            <Route
                path={RESPONSIVE_PATH}
                element={<ResponsiveComponent />}
            />

            <Route
                path={DOS_PATH}
                element={<ResponsiveComponent />}
            />
        </Routes>
    )
}

export default NavigationRoutes;