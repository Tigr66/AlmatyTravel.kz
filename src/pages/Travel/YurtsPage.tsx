import type { PageProps } from "@/pages/Travel/page-types";
import { Kicker, PageLink } from "@/pages/Travel/PagePrimitives";
import { getSeasonRoute } from "@/routes/season-routes";
import { photos } from "@/pages/Travel/photos";

export const YurtsPage = ({ season }: PageProps) => (
    <article className="travel-yurts-page" data-season={season}>
        <header>
            <Kicker>ПРОЖИВАНИЕ В ПОЕЗДКЕ</Kicker>
            <h2>Юрты, гостевые дома и отели на маршруте.</h2>
            <p>
                В направлениях Кольсая компания предлагает ночёвку в районе
                Саты; в материалах сайта также есть проживание в юртах. Для
                поездок на курорты можно отдельно обсудить размещение на
                горнолыжной базе.
            </p>
        </header>
        <div className="travel-yurts-page__feature">
            <img src={photos.yurt} alt="Юрты в предгорной долине у Кольсая" />
            <div>
                <h3>Что согласовать заранее</h3>
                <p>
                    Тип размещения, точную площадку, наличие мест, питание и
                    включение проживания в пакет. На сайте указано, что
                    проживание и питание оплачиваются отдельно, если они не
                    включены в выбранный пакет.
                </p>
                <PageLink to={getSeasonRoute(season, "order")}>
                    Запросить варианты размещения
                </PageLink>
            </div>
        </div>
        <p className="travel-yurts-page__note">
            Доступность и условия размещения меняются по датам. Подтвердите
            детали до оплаты поездки.
        </p>
    </article>
);
