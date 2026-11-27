import "@/styles/base.css";
import "@/styles/global.css";
import "@/styles/variables.css";
import WinterLayout from "@/layouts/WinterLayout/WinterLayout";
import {
    BuggyToursPage,
    FreeridePage,
    HelicopterToursPage,
    HeliSkiPage,
    HorseRidingPage,
    MountainToursPage,
    PrivateDriverGuidePage,
    SkiLessonsPage,
    SnowboardSchoolPage,
    TranslatorPage,
    WinterContactsPage,
    WinterHomePage,
    WinterOrderPage,
    WinterToursPage,
    YurtsPage,
} from "@/pages/Winter/WinterPages";
import { appRoutes } from "@/routes/app-routes";
import { Route, Routes } from "react-router-dom";

const winterPages = [
    { path: appRoutes.WINTER_ORDER, Page: WinterOrderPage },
    { path: appRoutes.WINTER_CONTACTS, Page: WinterContactsPage },
    { path: appRoutes.WINTER_TOURS, Page: WinterToursPage },
    { path: appRoutes.WINTER_MOUNTAIN_TOURS, Page: MountainToursPage },
    { path: appRoutes.WINTER_HELICOPTER_TOURS, Page: HelicopterToursPage },
    { path: appRoutes.WINTER_BUGGY_TOURS, Page: BuggyToursPage },
    { path: appRoutes.WINTER_TRANSLATOR, Page: TranslatorPage },
    { path: appRoutes.WINTER_PRIVATE_DRIVER_GUIDE, Page: PrivateDriverGuidePage },
    { path: appRoutes.WINTER_HORSE_RIDING, Page: HorseRidingPage },
    { path: appRoutes.WINTER_YURTS, Page: YurtsPage },
    { path: appRoutes.WINTER_SNOWBOARD_SCHOOL, Page: SnowboardSchoolPage },
    { path: appRoutes.WINTER_SKI_LESSONS, Page: SkiLessonsPage },
    { path: appRoutes.WINTER_HELI_SKI, Page: HeliSkiPage },
    { path: appRoutes.WINTER_FREERIDE, Page: FreeridePage },
];

const App = () => {
    return (
        <Routes>
            <Route path={appRoutes.WINTER_MAIN} element={<WinterLayout />}>
                <Route index element={<WinterHomePage />} />
                {winterPages.map(({ path, Page }) => (
                    <Route key={path} path={path.slice(1)} element={<Page />} />
                ))}
            </Route>
        </Routes>
    );
};

export default App;
