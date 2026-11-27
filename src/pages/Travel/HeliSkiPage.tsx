import type { PageProps } from "@/pages/Travel/page-types";
import { Kicker, PageLink } from "@/pages/Travel/PagePrimitives";
import { getSeasonRoute } from "@/routes/season-routes";
import { photos } from "@/pages/Travel/photos";

export const HeliSkiPage = ({ season }: PageProps) => (
    <article className="travel-heliski-page" data-season={season}>
        <img
            src={photos.heli}
            alt="Вертолёт на заснеженном высокогорном плато"
        />
        <div>
            {season === "summer" && (
                <p className="travel-season-note">
                    Хели-ски — зимняя программа; возможность поездки зависит от снежных и погодных условий.
                </p>
            )}
            <Kicker>HELI-SKI · ЗА ПРЕДЕЛАМИ ТРАСС</Kicker>
            <h2>
                Вертолётный доступ к горному рельефу вне подготовленных склонов.
            </h2>
            <p>
                Программа подбирается с учётом опыта группы и состояния гор.
                Перед бронированием обсудите даты, уровень катания, маршрут,
                сопровождение, экипировку и транспорт.
            </p>
            <p className="travel-heliski-page__note">
                Проведение зависит от погоды и условий в горах; окончательный
                маршрут подтверждает команда.
            </p>
            <PageLink to={getSeasonRoute(season, "order")}>Обсудить хели-ски</PageLink>
        </div>
    </article>
);
