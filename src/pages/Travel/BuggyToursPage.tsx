import type { PageProps } from "@/pages/Travel/page-types";
import { Kicker, PageLink } from "@/pages/Travel/PagePrimitives";
import { photos } from "@/pages/Travel/photos";
import { getSeasonRoute } from "@/routes/season-routes";

export const BuggyToursPage = ({ season }: PageProps) => (
    <article className="travel-buggy-page" data-season={season}>
        <header>
            <Kicker>БАГГИ И КВАДРОЦИКЛЫ</Kicker>
            <h2>Маршрут выбирают по дороге и рельефу.</h2>
            <p>
                В опубликованной программе есть поездки по Алма-Арасану и
                отдельный маршрут к Большому Алматинскому озеру. Ниже —
                характеристики маршрутов с сайта; сезонную доступность и
                состояние дороги подтвердите у менеджера.
            </p>
        </header>
        <div className="travel-buggy-page__main">
            <img
                src={photos.buggy}
                alt="Квадроцикл на горном маршруте рядом с Алматы"
            />
            <div className="travel-buggy-routes">
                <section>
                    <span>01</span>
                    <div>
                        <h3>Алма-Арасан — Аюсай</h3>
                        <p>
                            Лёгкий маршрут по асфальтированной дороге: около 13
                            км, ориентир по времени — 1 час.
                        </p>
                    </div>
                </section>
                <section>
                    <span>02</span>
                    <div>
                        <h3>Алма-Арасан и водопад</h3>
                        <p>
                            Маршрут через термальные источники, плотину и Аюсай;
                            около 22–25 км и 2 часов по опубликованной
                            программе.
                        </p>
                    </div>
                </section>
                <section>
                    <span>03</span>
                    <div>
                        <h3>Ущелье и панорамная поляна</h3>
                        <p>
                            Неровная дорога, бездорожье, подъём вдоль реки
                            Казачка. Ориентир сайта — 15–20 км и около 1,5 часа.
                        </p>
                    </div>
                </section>
                <section>
                    <span>04</span>
                    <div>
                        <h3>Большое Алматинское озеро</h3>
                        <p>
                            Отдельный маршрут по бездорожью продолжительностью
                            около 3 часов; поездка проходит в пограничной зоне.
                        </p>
                    </div>
                </section>
            </div>
        </div>
        <div className="travel-buggy-page__foot">
            <p>
                На опубликованных маршрутах управлять багги или квадроциклом
                можно с 18 лет. Перед стартом предусмотрены инструктаж,
                сопровождение и базовая защитная экипировка. Для поездки в
                пограничную зону к БАО нужен оригинал удостоверения личности или
                паспорта.
            </p>
            <PageLink to={getSeasonRoute(season, "order")}>
                Уточнить маршрут и доступность
            </PageLink>
        </div>
    </article>
);
