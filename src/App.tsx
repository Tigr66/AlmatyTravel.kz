import "@/styles/base.css";
import "@/styles/global.css";
import "@/styles/variables.css";
import WinterLayout from "@/layouts/WinterLayout/WinterLayout";
import { appRoutes } from "@/routes/app-routes";
import { Route, Routes } from "react-router-dom";

const winterChildRoutes = Object.entries(appRoutes)
    .filter(([key]) => key.startsWith("WINTER_") && key !== "WINTER_MAIN")
    .map(([, path]) => path);

const App = () => {
    return (
        <Routes>
            <Route path={appRoutes.WINTER_MAIN} element={<WinterLayout />}>
                {winterChildRoutes.map((path) => (
                    <Route key={path} path={path.slice(1)} />
                ))}
            </Route>
        </Routes>
    );
};

export default App;
