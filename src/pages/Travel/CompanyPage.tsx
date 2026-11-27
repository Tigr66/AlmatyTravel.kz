import type { PageProps } from "@/pages/Travel/page-types";
import { getSeasonRoute } from "@/routes/season-routes";
import { Kicker, PageLink } from "@/pages/Travel/PagePrimitives";
import { photos } from "@/pages/Travel/photos";

export const CompanyPage = ({ season }: PageProps) => (
    <article className="travel-company-page" data-season={season}>
        <header>
            <Kicker>KAZAKHSTAN TRAVEL · АЛМАТЫ</Kicker>
            <h2>Частные поездки, спланированные вокруг вашей группы.</h2>
            <p>
                Kazakhstan Travel организует туры из Алматы с 2011 года. Гости
                путешествуют своей компанией на внедорожнике с гидом-водителем;
                маршрут и темп можно согласовать заранее.
            </p>
        </header>

        <div className="travel-company-page__feature">
            <figure>
                <img src={photos.almaty} alt="Алматы у подножия Заилийского Алатау" />
                <figcaption>Алматы — отправная точка поездок по городу и региону.</figcaption>
            </figure>
            <div>
                <h3>Работаем небольшими группами</h3>
                <p>
                    Компания указывает, что принимает около 700–1000 гостей в
                    год и не объединяет незнакомых путешественников в одну
                    машину. Встреча и возвращение организуются у отеля или
                    квартиры в Алматы.
                </p>
                <dl>
                    <div><dt>С 2011 года</dt><dd>частные туры из Алматы</dd></div>
                    <div><dt>700–1000</dt><dd>гостей в год по данным компании</dd></div>
                    <div><dt>До 50 человек</dt><dd>размер группы по информации сайта</dd></div>
                </dl>
                <PageLink to={getSeasonRoute(season, "order")}>
                    Обсудить поездку
                </PageLink>
            </div>
        </div>
    </article>
);
