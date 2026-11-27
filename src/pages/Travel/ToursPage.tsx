import type { PageProps } from "@/pages/Travel/page-types";
import { Kicker, PageLink } from "@/pages/Travel/PagePrimitives";
import { getSeasonRoute } from "@/routes/season-routes";
import { photos } from "@/pages/Travel/photos";
import { Link } from "react-router-dom";

export const ToursPage = ({ season }: PageProps) => (
    <article className="travel-tours-page" data-season={season}>
        <header className="travel-tours-page__intro">
            <Kicker>ЭКСКУРСИИ ИЗ АЛМАТЫ</Kicker>
            <h2>Город, горные озёра и каньоны — в одном каталоге маршрутов.</h2>
            <p>
                На сайте компании перечислены городская экскурсия, Большое
                Алматинское озеро и Космостанция, Кольсай, Каинды, Тургень,
                Чарын, Бутаковка и Алтын-Эмель. Ниже — короткий ориентир; состав
                поездки и доступность остановок уточняются на ваши даты.
            </p>
        </header>

        <nav
            className="travel-tours-page__index"
            aria-label="Направления экскурсионной программы"
        >
            <Link to={{ pathname: getSeasonRoute(season, "tours"), hash: "#city-tour" }}>
                Алматы
            </Link>
            <Link
                to={{
                    pathname: getSeasonRoute(season, "tours"),
                    hash: "#big-almaty-lake",
                }}
            >
                БАО и Космостанция
            </Link>
            <Link
                to={{
                    pathname: getSeasonRoute(season, "tours"),
                    hash: "#kolsai-kaindy",
                }}
            >
                Кольсай и Каинды
            </Link>
            <Link
                to={{
                    pathname: getSeasonRoute(season, "tours"),
                    hash: "#turgen-butakovka",
                }}
            >
                Тургень и Бутаковка
            </Link>
            <Link
                to={{
                    pathname: getSeasonRoute(season, "tours"),
                    hash: "#charyn-altyn-emel",
                }}
            >
                Чарын и Алтын-Эмель
            </Link>
        </nav>

        <section className="travel-tours-city" id="city-tour">
            <img
                src={photos.almaty}
                alt="Алматы у подножия Заилийского Алатау"
            />
            <div>
                <Kicker>ГОРОДСКОЙ МАРШРУТ</Kicker>
                <h3>Экскурсия по Алматы</h3>
                <p>
                    Городская экскурсия знакомит с Алматы у подножия Заилийского
                    Алатау — его городскими достопримечательностями,
                    историческими местами и культурными пространствами.
                    Конкретные остановки и длительность прогулки согласуйте при
                    заказе.
                </p>
                <PageLink to={getSeasonRoute(season, "order")}>
                    Обсудить городской маршрут
                </PageLink>
            </div>
        </section>

        <section className="travel-tours-lake" id="big-almaty-lake">
            <div className="travel-tours-lake__text">
                <Kicker>ВЫСОКОГОРНЫЙ МАРШРУТ</Kicker>
                <h3>Большое Алматинское озеро и Космостанция</h3>
                <p>
                    Горная дорога ведёт к высокогорному озеру в Иле-Алатауском
                    национальном парке, а затем — выше, к Космостанции. В
                    описании экскурсии компания также упоминает ущелье
                    Алма-Арасан и посещение обсерватории. Доступность верхнего
                    участка зависит от действующих ограничений и состояния
                    дороги.
                </p>
                <dl>
                    <div>
                        <dt>Озеро</dt>
                        <dd>2&nbsp;510 м над уровнем моря</dd>
                    </div>
                    <div>
                        <dt>Космостанция</dt>
                        <dd>около 3&nbsp;200 м</dd>
                    </div>
                </dl>
                <PageLink to={getSeasonRoute(season, "order")}>
                    Уточнить доступность маршрута
                </PageLink>
            </div>
            <img
                src={photos.bigAlmatyLake}
                alt="Большое Алматинское озеро среди заснеженных гор"
            />
        </section>

        <section className="travel-tours-lakes" id="kolsai-kaindy">
            <header>
                <Kicker>НАЦИОНАЛЬНЫЕ ПАРКИ</Kicker>
                <h3>Кольсай и Каинды</h3>
                <p>
                    Два разных озёрных пейзажа в одном направлении: хвойные
                    берега Кольсая и затопленный еловый лес Каинды. В поездках
                    на несколько дней маршрут может включать остановку в Чарыне
                    и ночёвку в районе Саты.
                </p>
            </header>
            <figure className="travel-tours-lakes__kolsai">
                <img
                    src={photos.kolsai}
                    alt="Горное озеро Кольсай и хвойные склоны"
                />
                <figcaption>
                    <strong>Кольсай</strong>
                    <span>Каскад высокогорных озёр в горном ущелье.</span>
                </figcaption>
            </figure>
            <figure className="travel-tours-lakes__kaindy">
                <img
                    src={photos.kaindy}
                    alt="Стволы затопленных елей в озере Каинды"
                />
                <figcaption>
                    <strong>Каинды</strong>
                    <span>Стволы тянь-шаньских елей выступают над водой.</span>
                </figcaption>
            </figure>
            <PageLink to={getSeasonRoute(season, "order")}>
                Запросить поездку к озёрам
            </PageLink>
        </section>

        <section className="travel-tours-gorges" id="turgen-butakovka">
            <header>
                <Kicker>УЩЕЛЬЯ И ВОДОПАДЫ</Kicker>
                <h3>Тургень и Бутаковка</h3>
            </header>
            <div className="travel-tours-gorges__turgen">
                <img src={photos.turgen} alt="Водопад в ущелье Тургень" />
                <div>
                    <h4>Ущелье Тургень</h4>
                    <p>
                        Лесные и горные пейзажи, водопады и плато Асы-Тургень
                        входят в число вариантов, описанных компанией. На
                        выбранную дату менеджер подтвердит дорогу и доступные
                        остановки.
                    </p>
                </div>
            </div>
            <div className="travel-tours-gorges__butakovka">
                <h4>Водопад на Бутаковке</h4>
                <p>
                    Более короткое направление в горах близ Алматы. Сезонные
                    условия тропы и возможность подъезда стоит уточнить перед
                    выездом.
                </p>
                <img src={photos.butakovka} alt="Водопад в ущелье Бутаковка" />
            </div>
            <PageLink to={getSeasonRoute(season, "order")}>
                Спросить о поездке к водопадам
            </PageLink>
        </section>

        <section className="travel-tours-canyon" id="charyn-altyn-emel">
            <div className="travel-tours-canyon__charyn">
                <img
                    src={photos.charyn}
                    alt="Красные скалы Чарынского каньона"
                />
                <Kicker>ЧАРЫНСКИЙ НАЦИОНАЛЬНЫЙ ПАРК</Kicker>
                <h3>Долина замков и ясеневая роща</h3>
                <p>
                    Это разные остановки в парке, а не один объект. Время на
                    прогулку и пешую нагрузку определяют выбранная программа,
                    погода и открытые дороги. Компания указывает, что поездки в
                    Чарын возможны и зимой.
                </p>
            </div>
            <div className="travel-tours-canyon__dune">
                <img
                    src={photos.altynEmel}
                    alt="Поющий бархан в национальном парке Алтын-Эмель"
                />
                <small className="travel-image-credit">
                    <a href="https://commons.wikimedia.org/wiki/File:%D0%90%D0%BB%D1%82%D1%8B%D0%BD-%D0%AD%D0%BC%D0%B5%D0%BB%D1%8C,_%D0%9F%D0%BE%D1%8E%D1%89%D0%B8%D0%B9_%D0%B1%D0%B0%D1%80%D1%85%D0%B0%D0%BD.jpg">
                        Фото: Tagonika / Wikimedia Commons, CC BY-SA 4.0
                    </a>
                </small>
                <div>
                    <Kicker>АЛТЫН-ЭМЕЛЬ</Kicker>
                    <h3>Поющий бархан</h3>
                    <p>
                        Знаменитая песчаная дюна — одно из направлений
                        однодневных и многодневных туров. Посещение бархана
                        включают в индивидуальный маршрут; дорога и программа
                        подтверждаются заранее.
                    </p>
                </div>
            </div>
            <PageLink to={getSeasonRoute(season, "order")}>
                Подобрать маршрут по национальным паркам
            </PageLink>
        </section>
    </article>
);
