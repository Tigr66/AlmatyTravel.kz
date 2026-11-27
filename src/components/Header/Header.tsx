import { appRoutes } from "@/routes/app-routes";
import "./Header.css";

const Header = () => {
    return (
        <header className="site-header">
            <a
                className="site-brand"
                href={appRoutes.WINTER_MAIN}
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
            </a>
            <div className="site-header__details">
                <a href="tel:+77775259885">+7 777 525 98 85</a>
                <a href="mailto:kztravel@mail.ru">kztravel@mail.ru</a>
            </div>

            <div className="site-header__contact">
                <div className="site-header__languages" aria-label="Язык сайта">
                    <a href="#english" lang="en">
                        Eng
                    </a>
                    <a href="#russian" lang="ru" aria-current="true">
                        Рус
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
