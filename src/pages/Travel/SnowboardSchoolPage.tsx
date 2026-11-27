import type { PageProps } from "@/pages/Travel/page-types";
import { Kicker, PageLink } from "@/pages/Travel/PagePrimitives";
import { getSeasonRoute } from "@/routes/season-routes";
import { photos } from "@/pages/Travel/photos";

export const SnowboardSchoolPage = ({ season }: PageProps) => (
    <article className="travel-snowboard-page" data-season={season}>
        <div className="travel-snowboard-page__lead">
            <img
                src={photos.snowboard}
                alt="Инструктор помогает ученику на склоне Шымбулака"
            />
            <div>
                {season === "summer" && (
                    <p className="travel-season-note">
                        Сноуборд-школа относится к зимним услугам; даты и формат занятий уточняются к сезону катания.
                    </p>
                )}
                <Kicker>ALMATY SNOWBOARD SCHOOL</Kicker>
                <h2>
                    Занятие под ваш опыт — от первого спуска до катания вне
                    трасс.
                </h2>
                <p>
                    На сайте Kazakhstan Travel школа указана как партнёр.
                    Доступны индивидуальные уроки, групповые курсы, занятия для
                    детей и сопровождение вне трасс.
                </p>
                <PageLink to={getSeasonRoute(season, "order")}>
                    Запросить занятие
                </PageLink>
            </div>
        </div>
        <div className="travel-snowboard-page__note">
            <strong>Перед бронированием сообщите:</strong>
            <span>
                уровень катания, возраст ученика, даты и предпочтительный
                формат. Место, длительность, оборудование и подъёмники
                согласуются заранее.
            </span>
        </div>
    </article>
);
