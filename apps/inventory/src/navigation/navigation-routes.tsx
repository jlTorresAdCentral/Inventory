import { Route, Routes } from "react-router";
import { HOME_PATH } from "./navigation-routes-names";
import HomeComponent from "../home/HomeComponent";
const NavigationRoutes = () => {
    return (
        <Routes>
            <Route
                path={HOME_PATH}
                element={<HomeComponent />}
            />
        </Routes>
    )
}

export default NavigationRoutes;