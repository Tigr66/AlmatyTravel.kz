import { Header } from "@/components/Header";
import { appRoutes } from "@/routes/app-routes";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./WinterLayout.css";

const winterMenuItems = [
    { label: "Экскурсии", to: appRoutes.WINTER_TOURS },
    { label: "Горнолыжные курорты и туры", to: appRoutes.WINTER_MOUNTAIN_TOURS },
    { label: "Вертолётные прогулки", to: appRoutes.WINTER_HELICOPTER_TOURS },
    { label: "Туры на багги", to: appRoutes.WINTER_BUGGY_TOURS },
    { label: "Услуги переводчика", to: appRoutes.WINTER_TRANSLATOR },
    { label: "Гид-водитель", to: appRoutes.WINTER_PRIVATE_DRIVER_GUIDE },
    { label: "Конные прогулки", to: appRoutes.WINTER_HORSE_RIDING },
    { label: "Юрты", to: appRoutes.WINTER_YURTS },
    { label: "Школа сноуборда", to: appRoutes.WINTER_SNOWBOARD_SCHOOL },
    { label: "Уроки горных лыж", to: appRoutes.WINTER_SKI_LESSONS },
    { label: "Хели-ски", to: appRoutes.WINTER_HELI_SKI },
    { label: "Фрирайд", to: appRoutes.WINTER_FREERIDE },
] as const;

const WinterLayout = () => {
    return (
        <div className="winter-page">
            <div className="winter-hero">
                <Header />
                <section
                    className="winter-hero__content"
                    id="about"
                    aria-labelledby="winter-hero-title"
                >
                    <h1 id="winter-hero-title">
                        Мы работаем для клиентов, любое ваше желание будет
                        исполнено
                    </h1>
                    <p className="winter-hero__subtitle">
                        Вы сами управляете своим отдыхом
                    </p>
                </section>

                <nav
                    className="winter-hero__quick-links"
                    aria-label="Популярные разделы"
                >
                    <Link to={{ pathname: appRoutes.WINTER_MAIN, hash: "#about" }}>
                        <span aria-hidden="true">▦</span>О компании
                    </Link>
                    <Link to={appRoutes.WINTER_ORDER}>
                        <span aria-hidden="true">▣</span>Онлайн заказ
                    </Link>
                    <Link to={appRoutes.WINTER_CONTACTS}>
                        <span aria-hidden="true">◉</span>Контакты
                    </Link>
                </nav>

                <svg
                    className="winter-hero__wave"
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

            <div className="winter-content">
                <aside className="winter-sidebar" aria-label="Разделы зимнего отдыха">
                    <nav className="winter-sidebar__nav" aria-label="Навигация по зимним маршрутам">
                        {winterMenuItems.map(({ label, to }) => (
                            <NavLink
                                className={({ isActive }) =>
                                    `winter-sidebar__link${isActive ? " winter-sidebar__link--active" : ""}`
                                }
                                key={to}
                                to={to}
                                end
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>
                </aside>

                <section className="winter-content__page" aria-label="Содержимое страницы">
                    <Outlet />
                </section>
            </div>
        </div>
    );
};

export default WinterLayout;
