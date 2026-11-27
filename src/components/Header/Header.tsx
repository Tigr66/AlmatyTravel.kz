import { appRoutes } from "@/routes/app-routes";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="site-header">
            <Link
                className="site-brand"
                to={appRoutes.WINTER_MAIN}
                aria-label="Kazakhstan Travel Agency — главная"
            >
                <img
                    className="site-brand__icon"
                    src="/icons/main-icon.png"
                    alt=""
                />
                <span className="site-brand__name">
                    Kazakhstan
                    <br />
                    Travel Agency
                </span>
            </Link>
            <div className="site-header__details">
                <a href="tel:+77775259885">+7 777 525 98 85</a>
                <a href="mailto:kztravel@mail.ru">kztravel@mail.ru</a>
            </div>

            <div className="site-header__contact">
                <div className="site-header__languages" aria-label="Язык сайта">
                    <button type="button" lang="en">
                        Eng
                    </button>
                    <button type="button" lang="ru" aria-current="true">
                        Рус
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
