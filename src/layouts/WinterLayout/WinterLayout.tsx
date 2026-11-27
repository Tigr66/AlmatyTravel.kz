import { Header } from "@/components/Header";
import { appRoutes } from "@/routes/app-routes";
import "./WinterLayout.css";

const WinterLayout = () => {
    return (
        <main className="winter-page">
            <div className="winter-hero">
                <Header />
                <section
                    className="winter-hero__content"
                    aria-labelledby="winter-hero-title"
                >
                    <h1 id="winter-hero-title">
                        Мы работаем для клиентов, любое ваше желание будет
                        исполнено.
                    </h1>
                    <p className="winter-hero__subtitle">
                        Вы сами управляете своим отдыхом
                    </p>
                </section>

                <nav
                    className="winter-hero__quick-links"
                    aria-label="Популярные разделы"
                >
                    <a href="#about">
                        <span aria-hidden="true">▦</span>О компании
                    </a>
                    <a href={appRoutes.WINTER_ORDER}>
                        <span aria-hidden="true">▣</span>Онлайн заказ
                    </a>
                    <a href={appRoutes.WINTER_CONTACTS}>
                        <span aria-hidden="true">◉</span>Контакты
                    </a>
                </nav>
            </div>
        </main>
    );
};

export default WinterLayout;
