import type { PageProps } from "@/pages/Travel/page-types";
import { Kicker, PageLink } from "@/pages/Travel/PagePrimitives";
import { getSeasonRoute } from "@/routes/season-routes";
import { photos } from "@/pages/Travel/photos";

export const HomePage = ({ season }: PageProps) => (
    <article className="travel-home-page" data-season={season}>
        <header className="travel-home-page__heading">
            <div>
                <Kicker>{season === "winter" ? "ЗИМНИЕ МАРШРУТЫ" : "ЛЕТНИЕ МАРШРУТЫ"} · АЛМАТЫ</Kicker>
                <h2>Пейзажи и маршруты вокруг Алматы — по вашему плану.</h2>
            </div>
            <p>
                {season === "winter"
                    ? "Горные курорты, снежные поездки и природные направления. Выберите маршрут, а детали и доступность на даты согласуйте с менеджером."
                    : "Городские экскурсии, горы и национальные парки. Выберите направление, а остановки и темп поездки согласуйте с менеджером."}
            </p>
        </header>

        <figure className="travel-home-page__photo">
            <img
                src={photos.almaty}
                alt="Панорама Алматы с видом на Кок-Тобе и горы"
            />
            <figcaption>
                {season === "winter"
                    ? "Алматы — отправная точка городских и зимних горных маршрутов."
                    : "Алматы — отправная точка городских и летних маршрутов."}
            </figcaption>
        </figure>

        <div className="travel-home-page__next">
            <div>
                <Kicker>С ЧЕГО НАЧАТЬ</Kicker>
                <h3>
                    Выберите направление или расскажите нам, сколько у вас
                    времени.
                </h3>
            </div>
            <nav aria-label={`Популярные ${season === "winter" ? "зимние" : "летние"} разделы`}>
                <PageLink to={getSeasonRoute(season, "tours")}>
                    Экскурсии и природные маршруты
                </PageLink>
                <PageLink to={getSeasonRoute(season, "mountainTours")}>
                    {season === "winter" ? "Горнолыжные туры" : "Горные маршруты"}
                </PageLink>
                <PageLink to={getSeasonRoute(season, "about")}>
                    О компании и формате поездок
                </PageLink>
                <PageLink to={getSeasonRoute(season, "order")}>
                    Запросить маршрут и стоимость
                </PageLink>
            </nav>
        </div>
    </article>
);
