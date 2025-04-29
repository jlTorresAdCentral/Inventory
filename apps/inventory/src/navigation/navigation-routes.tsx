import { Route, Routes } from "react-router";
import { HOME_PATH, INVENTORY_CREATE, LOGIN } from "./navigation-routes-names";
import HomeComponent from "../home/HomeComponent";
import CreateInventoryScreen from "../home/CreateInventoryScreen";
import LoginScreen from "../login/login-screen";
const NavigationRoutes = () => {
    return (
        <Routes>
            <Route
                path={HOME_PATH}
                element={<HomeComponent />}
            />
            <Route
                path={LOGIN}
                element={<LoginScreen />}
            />
            <Route
                path={INVENTORY_CREATE}
                element={<CreateInventoryScreen />}
            />
        </Routes>
    )
}

export default NavigationRoutes;