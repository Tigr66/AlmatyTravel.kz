import type { PageProps } from "@/pages/Travel/page-types";
import { Kicker, PageLink } from "@/pages/Travel/PagePrimitives";
import { getSeasonRoute } from "@/routes/season-routes";
import { photos } from "@/pages/Travel/photos";

export const PrivateDriverGuidePage = ({ season }: PageProps) => (
    <article className="travel-driver-page" data-season={season}>
        <header>
            <Kicker>ЧАСТНЫЙ ВОДИТЕЛЬ-ГИД · ТРАНСФЕРЫ И ВСТРЕЧИ</Kicker>
            <h2>Один автомобиль и один согласованный план для вашей группы.</h2>
            <p>
                По описанию компании, гости едут отдельной группой на частном
                внедорожнике 4×4 с гидом-водителем. Встреча и возвращение — у
                отеля или квартиры в Алматы; маршрут и темп можно согласовать
                заранее.
            </p>
        </header>
        <div className="travel-driver-page__grid">
            <figure>
                <img
                    src={photos.almaty}
                    alt="Город и горы Алматы — начало частных маршрутов"
                />
                <figcaption>
                    Трансфер из Алматы можно объединить с экскурсионной
                    программой.
                </figcaption>
            </figure>
            <div className="travel-driver-page__itineraries">
                <h3>Варианты поездок, опубликованные компанией</h3>
                <dl>
                    <div>
                        <dt>1 день</dt>
                        <dd>
                            Кольсай, Каинды и Чарын; БАО или Поющий бархан также
                            перечислены как направления однодневной поездки.
                        </dd>
                    </div>
                    <div>
                        <dt>2 дня</dt>
                        <dd>
                            Кольсай, Каинды и Чарын с ночёвкой в Саты либо
                            Алтын-Эмель с закатом на бархане.
                        </dd>
                    </div>
                    <div>
                        <dt>3–6 дней</dt>
                        <dd>
                            «Золотое кольцо» по национальным паркам Алматинской
                            области.
                        </dd>
                    </div>
                </dl>
                <p className="travel-driver-page__included">
                    <strong>Что обычно включено:</strong> частный внедорожник и
                    дорожные расходы, гид-водитель, встреча у отеля в Алматы,
                    входные билеты в нацпарки и экосборы, вода. Питание и
                    проживание оплачиваются отдельно или входят в согласованный
                    пакет All inclusive.
                </p>
                <PageLink to={getSeasonRoute(season, "order")}>
                    Запросить расчёт для своей группы
                </PageLink>
            </div>
        </div>
    </article>
);
