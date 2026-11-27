import type { PageProps } from "@/pages/Travel/page-types";
import { Kicker, PageLink } from "@/pages/Travel/PagePrimitives";
import { getSeasonRoute } from "@/routes/season-routes";
import { photos } from "@/pages/Travel/photos";

export const SkiLessonsPage = ({ season }: PageProps) => (
    <article className="travel-lessons-page" data-season={season}>
        <header>
            {season === "summer" && (
                <p className="travel-season-note">
                    Занятия на лыжах доступны в зимний сезон; актуальные даты и условия нужно согласовать заранее.
                </p>
            )}
            <Kicker>УРОКИ ЛЫЖ</Kicker>
            <h2>План занятия согласуется с вашим уровнем.</h2>
            <p>
                Если вы начинаете или уже уверенно катаетесь, сообщите об этом
                при запросе. Продолжительность, место, оборудование и подъёмники
                нужно подтвердить до бронирования.
            </p>
        </header>
        <div className="travel-lessons-page__body">
            <figure>
                <img src={photos.shymbulak} alt="Лыжный склон на Шымбулаке" />
                <figcaption>
                    Занятия с инструктором входят в перечень зимних программ.
                </figcaption>
            </figure>
            <div>
                <h3>Зимние услуги можно объединить</h3>
                <p>
                    По запросу к поездке на курорт добавляют трансфер, ски-пасс
                    и аренду оборудования. Итоговый состав и стоимость
                    рассчитываются для выбранных дат и группы.
                </p>
                <PageLink to={getSeasonRoute(season, "order")}>
                    Обсудить урок и поездку
                </PageLink>
                <p className="travel-lessons-page__secondary">
                    Для занятий на сноуборде смотрите страницу партнёрской
                    Almaty Snowboard School.
                </p>
                <PageLink to={getSeasonRoute(season, "snowboardSchool")}>
                    Школа сноуборда
                </PageLink>
            </div>
        </div>
    </article>
);
