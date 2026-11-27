import type { PageProps } from "@/pages/Travel/page-types";
import { Kicker, PageLink } from "@/pages/Travel/PagePrimitives";
import { getSeasonRoute } from "@/routes/season-routes";
import { photos } from "@/pages/Travel/photos";

export const HelicopterToursPage = ({ season }: PageProps) => (
    <article className="travel-flight-page" data-season={season}>
        <div className="travel-flight-page__lead">
            <Kicker>ВЕРТОЛЁТЫ И САМОЛЁТЫ</Kicker>
            <h2>Воздушные экскурсии над горами и озёрами.</h2>
            <p>
                Компания предлагает частные вертолётные экскурсии из Боралдая.
                На сайте приведены ориентиры общей продолжительности с
                остановками: БАО — около 3 часов, Чарын — около 5 часов, Кольсай
                вместе с Чарыном — около 7 часов.
            </p>
            <p>
                Маршрут, борт, компоновку салона и возможность остановок
                подбирают для группы; актуальные детали подтверждаются перед
                бронированием. Полёты на самолёте также указаны в каталоге
                компании.
            </p>
            <PageLink to={getSeasonRoute(season, "order")}>
                Запросить маршрут и условия полёта
            </PageLink>
        </div>
        <figure>
            <img
                src={photos.heli}
                alt="Вертолёт на высокогорной площадке в горах Алматы"
            />
            <figcaption>
                Примеры направлений на сайте: БАО, Чарын, Кольсай и Чарын.
            </figcaption>
        </figure>
    </article>
);
