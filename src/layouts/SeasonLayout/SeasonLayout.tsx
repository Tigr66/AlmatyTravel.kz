import { Header } from "@/components/Header";
import {
    getSeasonRoute,
    type SeasonRouteKey,
    type SiteSeason,
} from "@/routes/season-routes";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./SeasonLayout.css";

type SeasonLayoutProps = {
    season: SiteSeason;
};

const menuItems: { label: string; route: SeasonRouteKey }[] = [
    { label: "Экскурсии", route: "tours" },
    { label: "Горные курорты и туры", route: "mountainTours" },
    { label: "Вертолётные и самолётные прогулки", route: "helicopterTours" },
    { label: "Туры на багги и квадроциклах", route: "buggyTours" },
    { label: "Услуги переводчика", route: "translator" },
    { label: "Частный водитель-гид", route: "privateDriverGuide" },
    { label: "Верховая езда", route: "horseRiding" },
    { label: "Юрты и проживание", route: "yurts" },
    { label: "Школа сноуборда", route: "snowboardSchool" },
    { label: "Уроки горных лыж", route: "skiLessons" },
    { label: "Хели-ски", route: "heliSki" },
    { label: "Фрирайд", route: "freeride" },
];

const SeasonLayout = ({ season }: SeasonLayoutProps) => {
    const routes = {
        home: getSeasonRoute(season, "main"),
        about: getSeasonRoute(season, "about"),
        order: getSeasonRoute(season, "order"),
        contacts: getSeasonRoute(season, "contacts"),
    };

    return (
        <div className={`site-page site-page--${season}`}>
            <div className="site-hero">
                <Header homePath={routes.home} />
                <section
                    className="site-hero__content"
                    aria-labelledby="site-hero-title"
                >
                    <h1 id="site-hero-title">
                        {season === "winter"
                            ? "Мы работаем для клиентов, любое ваше желание будет исполнено"
                            : "Откройте Алматы и Казахстан в своём темпе"}
                    </h1>
                    <p className="site-hero__subtitle">
                        {season === "winter"
                            ? "Вы сами управляете своим отдыхом"
                            : "Частные поездки, горные маршруты и впечатления на природе"}
                    </p>
                    <nav
                        className="site-season-switch"
                        aria-label="Выбор сезона"
                    >
                        <Link
                            className={`site-season-switch__link${season === "winter" ? " site-season-switch__link--active" : ""}`}
                            to={getSeasonRoute("winter", "main")}
                            aria-current={
                                season === "winter" ? "page" : undefined
                            }
                        >
                            Зима
                        </Link>
                        <span
                            className="site-season-switch__divider"
                            aria-hidden="true"
                        >
                            /
                        </span>
                        <Link
                            className={`site-season-switch__link${season === "summer" ? " site-season-switch__link--active" : ""}`}
                            to={getSeasonRoute("summer", "main")}
                            aria-current={
                                season === "summer" ? "page" : undefined
                            }
                        >
                            Лето
                        </Link>
                    </nav>
                </section>

                <nav
                    className="site-hero__quick-links"
                    aria-label="Основные разделы"
                >
                    <NavLink
                        className={({ isActive }) =>
                            `site-hero__quick-link${isActive ? " site-hero__quick-link--active" : ""}`
                        }
                        to={routes.about}
                        end
                    >
                        О компании
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `site-hero__quick-link${isActive ? " site-hero__quick-link--active" : ""}`
                        }
                        to={routes.order}
                    >
                        Онлайн-заказ
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            `site-hero__quick-link${isActive ? " site-hero__quick-link--active" : ""}`
                        }
                        to={routes.contacts}
                    >
                        Контакты
                    </NavLink>
                </nav>

                <svg
                    className="site-hero__wave"
                    viewBox="0 0 1440 160"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path
                        d="M0 80 C360 160 1080 0 1440 80 L1440 160 L0 160 Z"
                        fill="var(--color-background-soft)"
                    />
                </svg>
            </div>

            <div className="site-content">
                <aside className="site-sidebar" aria-label="Разделы сайта">
                    <nav
                        className="site-sidebar__nav"
                        aria-label="Навигация по разделам"
                    >
                        {menuItems.map(({ label, route }) => (
                            <NavLink
                                className={({ isActive }) =>
                                    `site-sidebar__link${isActive ? " site-sidebar__link--active" : ""}`
                                }
                                key={route}
                                to={getSeasonRoute(season, route)}
                                end
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>
                </aside>

                <section
                    className="site-content__page"
                    aria-label="Содержимое страницы"
                >
                    <Outlet />
                </section>
            </div>
        </div>
    );
};

export default SeasonLayout;
