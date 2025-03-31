import { Route, Routes } from "react-router";
import { HOME_PATH, INVENTORY_CREATE } from "./navigation-routes-names";
import HomeComponent from "../home/HomeComponent";
import CreateInventoryScreen from "../home/CreateInventoryScreen";
const NavigationRoutes = () => {
    return (
        <Routes>
            <Route
                path={HOME_PATH}
                element={<HomeComponent />}
            />
            <Route
                path={INVENTORY_CREATE}
                element={<CreateInventoryScreen />}
            />
        </Routes>
    )
}

export default NavigationRoutes;