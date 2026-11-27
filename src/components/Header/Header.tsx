import { Link } from "react-router-dom";
import "./Header.css";

type HeaderProps = {
    homePath: string;
    seasonPath: string;
    seasonLabel: string;
};

const Header = ({ homePath, seasonPath, seasonLabel }: HeaderProps) => {
    return (
        <header className="site-header">
            <Link
                className="site-brand"
                to={homePath}
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
                <Link className="site-header__season" to={seasonPath}>
                    {seasonLabel} <span aria-hidden="true">↗</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
