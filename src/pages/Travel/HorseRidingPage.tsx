import type { PageProps } from "@/pages/Travel/page-types";
import { Kicker, PageLink } from "@/pages/Travel/PagePrimitives";
import { getSeasonRoute } from "@/routes/season-routes";
import { photos } from "@/pages/Travel/photos";

export const HorseRidingPage = ({ season }: PageProps) => (
    <article className="travel-horse-page" data-season={season}>
        <figure>
            <img
                src={photos.horse}
                alt="Верховая прогулка на горном маршруте Шымбулака"
            />
            <figcaption>
                Верховая езда в Алматы есть в каталоге Kazakhstan Travel.
            </figcaption>
        </figure>
        <div>
            <Kicker>ВЕРХОВАЯ ЕЗДА В АЛМАТЫ</Kicker>
            <h2>
                Горный маршрут верхом — отдельный способ увидеть окрестности.
            </h2>
            <p>
                Компания предлагает верховые прогулки и указывает, что формат
                подходит не только опытным наездникам. Наличие инструкторского
                сопровождения, конкретный маршрут и условия для детей нужно
                подтвердить на выбранную дату.
            </p>
            <p>
                Сообщите менеджеру о своём опыте, составе группы и желаемой
                дате: он уточнит доступную программу и подготовку к поездке.
            </p>
            <PageLink to={getSeasonRoute(season, "order")}>
                Спросить о верховой прогулке
            </PageLink>
        </div>
    </article>
);
