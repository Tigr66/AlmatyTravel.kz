import type { PageProps } from "@/pages/Travel/page-types";
import { Kicker, PageLink } from "@/pages/Travel/PagePrimitives";
import { getSeasonRoute } from "@/routes/season-routes";
import { photos } from "@/pages/Travel/photos";

export const FreeridePage = ({ season }: PageProps) => (
    <article className="travel-freeride-page" data-season={season}>
        <header>
            {season === "summer" && (
                <p className="travel-season-note">
                    Фрирайд на лыжах и сноуборде относится к зимним программам и зависит от снежных условий.
                </p>
            )}
            <Kicker>ФРИРАЙД</Kicker>
            <h2>Внетрассовое катание для подготовленных райдеров.</h2>
            <p>
                Маршрут выбирают с учётом снежных условий, погоды и опыта
                группы. До выезда согласуйте сопровождение, оборудование и
                транспорт.
            </p>
        </header>
        <div className="travel-freeride-page__body">
            <img
                src={photos.shymbulak}
                alt="Снежные склоны и горный рельеф в районе Алматы"
            />
            <div>
                <h3>Что важно сообщить</h3>
                <ul>
                    <li>Ваш опыт катания вне подготовленных трасс</li>
                    <li>Даты и состав группы</li>
                    <li>Нужны ли оборудование и трансфер</li>
                </ul>
                <p>
                    Условия меняются ежедневно. Программа и возможность выхода
                    подтверждаются перед поездкой.
                </p>
                <PageLink to={getSeasonRoute(season, "order")}>
                    Обсудить маршрут и сопровождение
                </PageLink>
            </div>
        </div>
    </article>
);
