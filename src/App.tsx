import "@/styles/base.css";
import "@/styles/global.css";
import "@/styles/variables.css";
import WinterLayout from "@/layouts/WinterLayout/WinterLayout";
import SummerLayout from "@/layouts/SummerLayout/SummerLayout";
import { BuggyToursPage } from "@/pages/Travel/BuggyToursPage";
import { CompanyPage } from "@/pages/Travel/CompanyPage";
import { ContactsPage } from "@/pages/Travel/ContactsPage";
import { FreeridePage } from "@/pages/Travel/FreeridePage";
import { HelicopterToursPage } from "@/pages/Travel/HelicopterToursPage";
import { HeliSkiPage } from "@/pages/Travel/HeliSkiPage";
import { HomePage } from "@/pages/Travel/HomePage";
import { HorseRidingPage } from "@/pages/Travel/HorseRidingPage";
import { MountainToursPage } from "@/pages/Travel/MountainToursPage";
import { OrderPage } from "@/pages/Travel/OrderPage";
import { PrivateDriverGuidePage } from "@/pages/Travel/PrivateDriverGuidePage";
import { SkiLessonsPage } from "@/pages/Travel/SkiLessonsPage";
import { SnowboardSchoolPage } from "@/pages/Travel/SnowboardSchoolPage";
import { ToursPage } from "@/pages/Travel/ToursPage";
import { TranslatorPage } from "@/pages/Travel/TranslatorPage";
import { YurtsPage } from "@/pages/Travel/YurtsPage";
import { seasonRoutes, type SiteSeason } from "@/routes/season-routes";
import type { ComponentType } from "react";
import { Route, Routes } from "react-router-dom";
import type { PageProps } from "@/pages/Travel/page-types";

type SharedPage = ComponentType<PageProps>;

const pageRoutes: {
    winterPath: string;
    summerPath: string;
    Page: SharedPage;
}[] = [
    {
        winterPath: seasonRoutes.winter.about,
        summerPath: seasonRoutes.summer.about,
        Page: CompanyPage,
    },
    {
        winterPath: seasonRoutes.winter.order,
        summerPath: seasonRoutes.summer.order,
        Page: OrderPage,
    },
    {
        winterPath: seasonRoutes.winter.contacts,
        summerPath: seasonRoutes.summer.contacts,
        Page: ContactsPage,
    },
    {
        winterPath: seasonRoutes.winter.tours,
        summerPath: seasonRoutes.summer.tours,
        Page: ToursPage,
    },
    {
        winterPath: seasonRoutes.winter.mountainTours,
        summerPath: seasonRoutes.summer.mountainTours,
        Page: MountainToursPage,
    },
    {
        winterPath: seasonRoutes.winter.helicopterTours,
        summerPath: seasonRoutes.summer.helicopterTours,
        Page: HelicopterToursPage,
    },
    {
        winterPath: seasonRoutes.winter.buggyTours,
        summerPath: seasonRoutes.summer.buggyTours,
        Page: BuggyToursPage,
    },
    {
        winterPath: seasonRoutes.winter.translator,
        summerPath: seasonRoutes.summer.translator,
        Page: TranslatorPage,
    },
    {
        winterPath: seasonRoutes.winter.privateDriverGuide,
        summerPath: seasonRoutes.summer.privateDriverGuide,
        Page: PrivateDriverGuidePage,
    },
    {
        winterPath: seasonRoutes.winter.horseRiding,
        summerPath: seasonRoutes.summer.horseRiding,
        Page: HorseRidingPage,
    },
    {
        winterPath: seasonRoutes.winter.yurts,
        summerPath: seasonRoutes.summer.yurts,
        Page: YurtsPage,
    },
    {
        winterPath: seasonRoutes.winter.snowboardSchool,
        summerPath: seasonRoutes.summer.snowboardSchool,
        Page: SnowboardSchoolPage,
    },
    {
        winterPath: seasonRoutes.winter.skiLessons,
        summerPath: seasonRoutes.summer.skiLessons,
        Page: SkiLessonsPage,
    },
    {
        winterPath: seasonRoutes.winter.heliSki,
        summerPath: seasonRoutes.summer.heliSki,
        Page: HeliSkiPage,
    },
    {
        winterPath: seasonRoutes.winter.freeride,
        summerPath: seasonRoutes.summer.freeride,
        Page: FreeridePage,
    },
];

const getChildPath = (path: string, season: SiteSeason) =>
    path.slice(season === "winter" ? 1 : seasonRoutes.summer.main.length + 1);

const seasonPageRoutes = (season: SiteSeason) =>
    pageRoutes.map(({ winterPath, summerPath, Page }) => {
        const path = season === "winter" ? winterPath : summerPath;

        return (
            <Route
                key={path}
                path={getChildPath(path, season)}
                element={<Page season={season} />}
            />
        );
    });

const App = () => (
    <Routes>
        <Route path={seasonRoutes.winter.main} element={<WinterLayout />}>
            <Route index element={<HomePage season="winter" />} />
            {seasonPageRoutes("winter")}
        </Route>
        <Route path={seasonRoutes.summer.main} element={<SummerLayout />}>
            <Route index element={<HomePage season="summer" />} />
            {seasonPageRoutes("summer")}
        </Route>
    </Routes>
);

export default App;
