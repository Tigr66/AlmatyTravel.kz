import type { PageProps } from "@/pages/Travel/page-types";
import { Kicker, PageLink } from "@/pages/Travel/PagePrimitives";
import { getSeasonRoute } from "@/routes/season-routes";
import { photos } from "@/pages/Travel/photos";

export const MountainToursPage = ({ season }: PageProps) => (
    <article className="travel-mountain-page" data-season={season}>
        <header>
            <Kicker>{season === "winter" ? "ЗИМНИЕ ПРОГРАММЫ" : "ЛЕТНИЕ МАРШРУТЫ В ГОРАХ"}</Kicker>
            <h2>
                {season === "winter"
                    ? "Склоны Алматы: выбрать курорт, транспорт и формат катания."
                    : "Горы вокруг Алматы: прогулки и поездки на свежем воздухе."}
            </h2>
            <p>
                {season === "winter"
                    ? "В каталоге Kazakhstan Travel указаны Шымбулак, Ак Булак и Oi-Qaragai, а также горнолыжные и сноуборд-туры. По запросу обсуждаются ски-пассы, аренда оборудования, проживание на курорте и занятия с инструктором."
                    : "Горные поездки можно согласовать как часть частного маршрута из Алматы. Направление и остановки подбирают с учётом сезона, погоды, состояния дороги и пожеланий группы."}
            </p>
        </header>
        <figure className="travel-mountain-page__photo">
            <img
                src={season === "winter" ? photos.shymbulak : "/backgrounds/summer-backgrond.jpg"}
                alt={season === "winter" ? "Подготовленный склон горнолыжного курорта Шымбулак" : "Летний горный маршрут в окрестностях Алматы"}
            />
            <figcaption>
                {season === "winter"
                    ? "Шымбулак · программа поездки зависит от выбранного курорта и условий дня."
                    : "Летние горные направления · доступные остановки зависят от условий поездки."}
            </figcaption>
        </figure>
        <div className="travel-mountain-page__body">
            <section>
                <h3>Что можно включить</h3>
                <ul>
                    {season === "winter" ? (
                        <>
                            <li>Поездку на горнолыжный курорт Алматы</li>
                            <li>Лыжное или сноубордическое снаряжение напрокат</li>
                            <li>Ски-пасс и проживание на курорте</li>
                            <li>Занятие с инструктором</li>
                        </>
                    ) : (
                        <>
                            <li>Поездку по горным окрестностям Алматы</li>
                            <li>Частный транспорт и сопровождение гида-водителя</li>
                            <li>Остановки по программе и пожеланиям группы</li>
                        </>
                    )}
                </ul>
            </section>
            <section>
                <h3>{season === "winter" ? "Зимние поездки" : "Планирование маршрута"}</h3>
                <p>
                    {season === "winter"
                        ? "Снежные маршруты зависят от погоды. Компания отдельно отмечает, что Чарынский каньон и озёра остаются вариантами для поездок в течение года, если открыты дороги и доступ разрешён."
                        : "Перед поездкой уточните сезонную доступность дорог и троп. Программа и остановки согласуются под ваши даты и темп."}
                </p>
                <PageLink to={getSeasonRoute(season, "order")}>
                    {season === "winter" ? "Согласовать курорт и детали" : "Согласовать горный маршрут"}
                </PageLink>
            </section>
        </div>
        <nav
            className="travel-mountain-page__links"
            aria-label={season === "winter" ? "Катание и обучение" : "Другие горные маршруты"}
        >
            {season === "winter" ? (
                <>
                    <PageLink to={getSeasonRoute(season, "snowboardSchool")}>Школа сноуборда</PageLink>
                    <PageLink to={getSeasonRoute(season, "skiLessons")}>Уроки лыж</PageLink>
                    <PageLink to={getSeasonRoute(season, "heliSki")}>Хели-ски</PageLink>
                    <PageLink to={getSeasonRoute(season, "freeride")}>Фрирайд</PageLink>
                </>
            ) : (
                <>
                    <PageLink to={getSeasonRoute(season, "horseRiding")}>Верховая езда</PageLink>
                    <PageLink to={getSeasonRoute(season, "buggyTours")}>Багги и квадроциклы</PageLink>
                    <PageLink to={getSeasonRoute(season, "helicopterTours")}>Воздушные экскурсии</PageLink>
                </>
            )}
        </nav>
    </article>
);
