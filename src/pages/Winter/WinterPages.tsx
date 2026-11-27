import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { appRoutes } from "@/routes/app-routes";
import "./winter-pages.css";

const photos = {
    almaty: "https://img.avs.io/psgr/shutterstock_2342271723_9f0ac34220?rs=fill%3A3840%3A2834%3A0",
    bigAlmatyLake:
        "https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcontain%2Cgravity%3Dauto%2Cquality%3D60%2Cwidth%3D1440%2Cheight%3D650%2Cdpr%3D1/tour_img/a6b3109c6c40b067f783399c5ddc0573b860a81df7161975d6e12722c63d710d.jpeg",
    kolsai: "https://images.unsplash.com/photo-1743036618964-66089113c40c?auto=format&fit=crop&w=1400&q=85",
    kaindy: "https://www.almaty-travel.kz/cms/uploads/file_1431266428_820953619.jpg",
    turgen: "https://almatyexpeditions.com/wp-content/uploads/2024/04/Turgen-Gorge.jpg",
    charyn: "https://images.unsplash.com/photo-1676495093917-a47555d35a33?auto=format&fit=crop&w=1400&q=85",
    butakovka:
        "https://www.almaty-travel.kz/cms/uploads/file_1290948812_10367183.jpg",
    altynEmel:
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/%D0%90%D0%BB%D1%82%D1%8B%D0%BD-%D0%AD%D0%BC%D0%B5%D0%BB%D1%8C%2C_%D0%9F%D0%BE%D1%8E%D1%89%D0%B8%D0%B9_%D0%B1%D0%B0%D1%80%D1%85%D0%B0%D0%BD.jpg",
    shymbulak:
        "https://shymbulak.storage.yandexcloud.kz/media-test/af55b429aad1535fc7bc79a9a98042ef.jpg",
    heli: "https://www.almaty-travel.kz/cms/uploads/images/P1020467.JPG",
    buggy: "https://www.dakaralmaty.kz/assets/gallery-4-CieR9Wj.jpg",
    horse: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f2/62/28/horse-riding-chimbulak.jpg?h=800&s=1&w=1200",
    yurt: "https://kolsaytur.kz/images/Urti_Tore/3.jpg",
    snowboard:
        "https://i.touristtube.com/im/experience-almaty-medeu-shymbulak-resort-and-kok-tobe-2-d32977-5537672P1-2.jpg",
};

const PageLink = ({ to, children }: { to: string; children: ReactNode }) => (
    <Link className="winter-page-link" to={to}>
        {children}
        <span aria-hidden="true">↗</span>
    </Link>
);

const Kicker = ({ children }: { children: ReactNode }) => (
    <p className="winter-kicker">{children}</p>
);

export const WinterHomePage = () => (
    <article className="winter-home-page">
        <header className="winter-home-page__heading">
            <div>
                <Kicker>KAZAKHSTAN TRAVEL · АЛМАТЫ</Kicker>
                <h2>
                    Путешествия по Казахстану — своей компанией и в своём темпе.
                </h2>
            </div>
            <p>
                Kazakhstan Travel организует частные поездки из Алматы с 2011
                года. Маршрут, остановки и темп согласуются с вами; в машине
                едет только ваша группа.
            </p>
        </header>

        <figure className="winter-home-page__photo">
            <img
                src={photos.almaty}
                alt="Панорама Алматы с видом на Кок-Тобе и горы"
            />
            <figcaption>
                Алматы — отправная точка городских и горных маршрутов.
            </figcaption>
        </figure>

        <div className="winter-home-page__facts" aria-label="О компании">
            <p>
                <strong>2011</strong>
                <span>год начала работы</span>
            </p>
            <p>
                <strong>4×4</strong>
                <span>частный внедорожник</span>
            </p>
            <p>
                <strong>700–1000</strong>
                <span>гостей в год по данным компании</span>
            </p>
        </div>

        <div className="winter-home-page__next">
            <div>
                <Kicker>С ЧЕГО НАЧАТЬ</Kicker>
                <h3>
                    Выберите направление или расскажите нам, сколько у вас
                    времени.
                </h3>
            </div>
            <nav aria-label="Популярные зимние разделы">
                <PageLink to={appRoutes.WINTER_TOURS}>
                    Экскурсии и природные маршруты
                </PageLink>
                <PageLink to={appRoutes.WINTER_MOUNTAIN_TOURS}>
                    Горнолыжные туры
                </PageLink>
                <PageLink to={appRoutes.WINTER_PRIVATE_DRIVER_GUIDE}>
                    Частный водитель-гид
                </PageLink>
                <PageLink to={appRoutes.WINTER_ORDER}>
                    Запросить маршрут и стоимость
                </PageLink>
            </nav>
        </div>
    </article>
);

export const WinterToursPage = () => (
    <article className="winter-tours-page">
        <header className="winter-tours-page__intro">
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
            className="winter-tours-page__index"
            aria-label="Направления экскурсионной программы"
        >
            <Link to={{ pathname: appRoutes.WINTER_TOURS, hash: "#city-tour" }}>
                Алматы
            </Link>
            <Link
                to={{
                    pathname: appRoutes.WINTER_TOURS,
                    hash: "#big-almaty-lake",
                }}
            >
                БАО и Космостанция
            </Link>
            <Link
                to={{
                    pathname: appRoutes.WINTER_TOURS,
                    hash: "#kolsai-kaindy",
                }}
            >
                Кольсай и Каинды
            </Link>
            <Link
                to={{
                    pathname: appRoutes.WINTER_TOURS,
                    hash: "#turgen-butakovka",
                }}
            >
                Тургень и Бутаковка
            </Link>
            <Link
                to={{
                    pathname: appRoutes.WINTER_TOURS,
                    hash: "#charyn-altyn-emel",
                }}
            >
                Чарын и Алтын-Эмель
            </Link>
        </nav>

        <section className="winter-tours-city" id="city-tour">
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
                <PageLink to={appRoutes.WINTER_ORDER}>
                    Обсудить городской маршрут
                </PageLink>
            </div>
        </section>

        <section className="winter-tours-lake" id="big-almaty-lake">
            <div className="winter-tours-lake__text">
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
                <PageLink to={appRoutes.WINTER_ORDER}>
                    Уточнить доступность маршрута
                </PageLink>
            </div>
            <img
                src={photos.bigAlmatyLake}
                alt="Большое Алматинское озеро среди заснеженных гор"
            />
        </section>

        <section className="winter-tours-lakes" id="kolsai-kaindy">
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
            <figure className="winter-tours-lakes__kolsai">
                <img
                    src={photos.kolsai}
                    alt="Горное озеро Кольсай и хвойные склоны"
                />
                <figcaption>
                    <strong>Кольсай</strong>
                    <span>Каскад высокогорных озёр в горном ущелье.</span>
                </figcaption>
            </figure>
            <figure className="winter-tours-lakes__kaindy">
                <img
                    src={photos.kaindy}
                    alt="Стволы затопленных елей в озере Каинды"
                />
                <figcaption>
                    <strong>Каинды</strong>
                    <span>Стволы тянь-шаньских елей выступают над водой.</span>
                </figcaption>
            </figure>
            <PageLink to={appRoutes.WINTER_ORDER}>
                Запросить поездку к озёрам
            </PageLink>
        </section>

        <section className="winter-tours-gorges" id="turgen-butakovka">
            <header>
                <Kicker>УЩЕЛЬЯ И ВОДОПАДЫ</Kicker>
                <h3>Тургень и Бутаковка</h3>
            </header>
            <div className="winter-tours-gorges__turgen">
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
            <div className="winter-tours-gorges__butakovka">
                <h4>Водопад на Бутаковке</h4>
                <p>
                    Более короткое направление в горах близ Алматы. Сезонные
                    условия тропы и возможность подъезда стоит уточнить перед
                    выездом.
                </p>
                <img src={photos.butakovka} alt="Водопад в ущелье Бутаковка" />
            </div>
            <PageLink to={appRoutes.WINTER_ORDER}>
                Спросить о поездке к водопадам
            </PageLink>
        </section>

        <section className="winter-tours-canyon" id="charyn-altyn-emel">
            <div className="winter-tours-canyon__charyn">
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
            <div className="winter-tours-canyon__dune">
                <img
                    src={photos.altynEmel}
                    alt="Поющий бархан в национальном парке Алтын-Эмель"
                />
                <small className="winter-image-credit">
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
            <PageLink to={appRoutes.WINTER_ORDER}>
                Подобрать маршрут по национальным паркам
            </PageLink>
        </section>
    </article>
);

export const MountainToursPage = () => (
    <article className="winter-mountain-page">
        <header>
            <Kicker>ЗИМНИЕ ПРОГРАММЫ</Kicker>
            <h2>Склоны Алматы: выбрать курорт, транспорт и формат катания.</h2>
            <p>
                В каталоге Kazakhstan Travel указаны Шымбулак, Ак Булак и
                Oi-Qaragai, а также горнолыжные и сноуборд-туры. По запросу
                обсуждаются ски-пассы, аренда оборудования, проживание на
                курорте и занятия с инструктором.
            </p>
        </header>
        <figure className="winter-mountain-page__photo">
            <img
                src={photos.shymbulak}
                alt="Подготовленный склон горнолыжного курорта Шымбулак"
            />
            <figcaption>
                Шымбулак · программа поездки зависит от выбранного курорта и
                условий дня.
            </figcaption>
        </figure>
        <div className="winter-mountain-page__body">
            <section>
                <h3>Что можно включить</h3>
                <ul>
                    <li>Поездку на горнолыжный курорт Алматы</li>
                    <li>Лыжное или сноубордическое снаряжение напрокат</li>
                    <li>Ски-пасс и проживание на курорте</li>
                    <li>Занятие с инструктором</li>
                </ul>
            </section>
            <section>
                <h3>Зимние поездки</h3>
                <p>
                    Снежные маршруты зависят от погоды. Компания отдельно
                    отмечает, что Чарынский каньон и озёра остаются вариантами
                    для поездок в течение года, если открыты дороги и доступ
                    разрешён.
                </p>
                <PageLink to={appRoutes.WINTER_ORDER}>
                    Согласовать курорт и детали
                </PageLink>
            </section>
        </div>
        <nav
            className="winter-mountain-page__links"
            aria-label="Катание и обучение"
        >
            <PageLink to={appRoutes.WINTER_SNOWBOARD_SCHOOL}>
                Школа сноуборда
            </PageLink>
            <PageLink to={appRoutes.WINTER_SKI_LESSONS}>Уроки лыж</PageLink>
            <PageLink to={appRoutes.WINTER_HELI_SKI}>Хели-ски</PageLink>
            <PageLink to={appRoutes.WINTER_FREERIDE}>Фрирайд</PageLink>
        </nav>
    </article>
);

export const HelicopterToursPage = () => (
    <article className="winter-flight-page">
        <div className="winter-flight-page__lead">
            <Kicker>ВЕРТОЛЁТЫ И САМОЛЁТЫ</Kicker>
            <h2>Воздушные экскурсии над горами и озёрами.</h2>
            <p>
                Компания предлагает частные вертолётные экскурсии из Боралдая.
                На сайте приведены ориентиры общей продолжительности с
                остановками: БАО — около 3 часов, Чарын — около 5 часов, Кольсай
                вместе с Чарыном — около 7 часов.
            </p>
            <p>
                Маршрут, борт, компоновку салона и возможность остановок
                подбирают для группы; актуальные детали подтверждаются перед
                бронированием. Полёты на самолёте также указаны в каталоге
                компании.
            </p>
            <PageLink to={appRoutes.WINTER_ORDER}>
                Запросить маршрут и условия полёта
            </PageLink>
        </div>
        <figure>
            <img
                src={photos.heli}
                alt="Вертолёт на высокогорной площадке в горах Алматы"
            />
            <figcaption>
                Примеры направлений на сайте: БАО, Чарын, Кольсай и Чарын.
            </figcaption>
        </figure>
    </article>
);

export const BuggyToursPage = () => (
    <article className="winter-buggy-page">
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
        <div className="winter-buggy-page__main">
            <img
                src={photos.buggy}
                alt="Квадроцикл на горном маршруте рядом с Алматы"
            />
            <div className="winter-buggy-routes">
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
        <div className="winter-buggy-page__foot">
            <p>
                На опубликованных маршрутах управлять багги или квадроциклом
                можно с 18 лет. Перед стартом предусмотрены инструктаж,
                сопровождение и базовая защитная экипировка. Для поездки в
                пограничную зону к БАО нужен оригинал удостоверения личности или
                паспорта.
            </p>
            <PageLink to={appRoutes.WINTER_ORDER}>
                Уточнить маршрут и доступность
            </PageLink>
        </div>
    </article>
);

export const TranslatorPage = () => (
    <article className="winter-translator-page">
        <header>
            <Kicker>УСЛУГИ ПЕРЕВОДЧИКА</Kicker>
            <h2>Перевод для встречи, поездки или отдельной задачи.</h2>
            <p>
                На сайте компании отдельно описана организация переводчика для
                встреч и других задач. Язык, даты и цель обращения сообщаются
                менеджеру; англоговорящий гид-водитель относится к программам
                частных туров.
            </p>
        </header>
        <div className="winter-translator-page__details">
            <figure>
                <img
                    src={photos.almaty}
                    alt="Вид на Алматы и окружающие горы"
                />
                <figcaption>
                    Для заказа укажите язык и контекст, в котором нужен перевод.
                </figcaption>
            </figure>
            <div>
                <h3>Что сообщить в запросе</h3>
                <dl>
                    <div>
                        <dt>Язык</dt>
                        <dd>
                            Напишите, с какого и на какой язык нужен перевод.
                        </dd>
                    </div>
                    <div>
                        <dt>Когда</dt>
                        <dd>
                            Укажите даты и ориентировочную продолжительность.
                        </dd>
                    </div>
                    <div>
                        <dt>Для чего</dt>
                        <dd>
                            Встреча, сопровождение в поездке или другая задача.
                        </dd>
                    </div>
                </dl>
                <PageLink to={appRoutes.WINTER_ORDER}>
                    Запросить переводчика
                </PageLink>
            </div>
        </div>
    </article>
);

export const PrivateDriverGuidePage = () => (
    <article className="winter-driver-page">
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
        <div className="winter-driver-page__grid">
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
            <div className="winter-driver-page__itineraries">
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
                <p className="winter-driver-page__included">
                    <strong>Что обычно включено:</strong> частный внедорожник и
                    дорожные расходы, гид-водитель, встреча у отеля в Алматы,
                    входные билеты в нацпарки и экосборы, вода. Питание и
                    проживание оплачиваются отдельно или входят в согласованный
                    пакет All inclusive.
                </p>
                <PageLink to={appRoutes.WINTER_ORDER}>
                    Запросить расчёт для своей группы
                </PageLink>
            </div>
        </div>
    </article>
);

export const HorseRidingPage = () => (
    <article className="winter-horse-page">
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
            <PageLink to={appRoutes.WINTER_ORDER}>
                Спросить о верховой прогулке
            </PageLink>
        </div>
    </article>
);

export const YurtsPage = () => (
    <article className="winter-yurts-page">
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
        <div className="winter-yurts-page__feature">
            <img src={photos.yurt} alt="Юрты в предгорной долине у Кольсая" />
            <div>
                <h3>Что согласовать заранее</h3>
                <p>
                    Тип размещения, точную площадку, наличие мест, питание и
                    включение проживания в пакет. На сайте указано, что
                    проживание и питание оплачиваются отдельно, если они не
                    включены в выбранный пакет.
                </p>
                <PageLink to={appRoutes.WINTER_ORDER}>
                    Запросить варианты размещения
                </PageLink>
            </div>
        </div>
        <p className="winter-yurts-page__note">
            Доступность и условия размещения меняются по датам. Подтвердите
            детали до оплаты поездки.
        </p>
    </article>
);

export const SnowboardSchoolPage = () => (
    <article className="winter-snowboard-page">
        <div className="winter-snowboard-page__lead">
            <img
                src={photos.snowboard}
                alt="Инструктор помогает ученику на склоне Шымбулака"
            />
            <div>
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
                <PageLink to={appRoutes.WINTER_ORDER}>
                    Запросить занятие
                </PageLink>
            </div>
        </div>
        <div className="winter-snowboard-page__note">
            <strong>Перед бронированием сообщите:</strong>
            <span>
                уровень катания, возраст ученика, даты и предпочтительный
                формат. Место, длительность, оборудование и подъёмники
                согласуются заранее.
            </span>
        </div>
    </article>
);

export const SkiLessonsPage = () => (
    <article className="winter-lessons-page">
        <header>
            <Kicker>УРОКИ ЛЫЖ</Kicker>
            <h2>План занятия согласуется с вашим уровнем.</h2>
            <p>
                Если вы начинаете или уже уверенно катаетесь, сообщите об этом
                при запросе. Продолжительность, место, оборудование и подъёмники
                нужно подтвердить до бронирования.
            </p>
        </header>
        <div className="winter-lessons-page__body">
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
                <PageLink to={appRoutes.WINTER_ORDER}>
                    Обсудить урок и поездку
                </PageLink>
                <p className="winter-lessons-page__secondary">
                    Для занятий на сноуборде смотрите страницу партнёрской
                    Almaty Snowboard School.
                </p>
                <PageLink to={appRoutes.WINTER_SNOWBOARD_SCHOOL}>
                    Школа сноуборда
                </PageLink>
            </div>
        </div>
    </article>
);

export const HeliSkiPage = () => (
    <article className="winter-heliski-page">
        <img
            src={photos.heli}
            alt="Вертолёт на заснеженном высокогорном плато"
        />
        <div>
            <Kicker>HELI-SKI · ЗА ПРЕДЕЛАМИ ТРАСС</Kicker>
            <h2>
                Вертолётный доступ к горному рельефу вне подготовленных склонов.
            </h2>
            <p>
                Программа подбирается с учётом опыта группы и состояния гор.
                Перед бронированием обсудите даты, уровень катания, маршрут,
                сопровождение, экипировку и транспорт.
            </p>
            <p className="winter-heliski-page__note">
                Проведение зависит от погоды и условий в горах; окончательный
                маршрут подтверждает команда.
            </p>
            <PageLink to={appRoutes.WINTER_ORDER}>Обсудить хели-ски</PageLink>
        </div>
    </article>
);

export const FreeridePage = () => (
    <article className="winter-freeride-page">
        <header>
            <Kicker>ФРИРАЙД</Kicker>
            <h2>Внетрассовое катание для подготовленных райдеров.</h2>
            <p>
                Маршрут выбирают с учётом снежных условий, погоды и опыта
                группы. До выезда согласуйте сопровождение, оборудование и
                транспорт.
            </p>
        </header>
        <div className="winter-freeride-page__body">
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
                <PageLink to={appRoutes.WINTER_ORDER}>
                    Обсудить маршрут и сопровождение
                </PageLink>
            </div>
        </div>
    </article>
);

export const WinterOrderPage = () => {
    const [openedWhatsApp, setOpenedWhatsApp] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const message = [
            "Здравствуйте! Хочу обсудить поездку.",
            `Имя: ${data.get("name")}`,
            `Даты: ${data.get("dates") || "не указаны"}`,
            `Группа: ${data.get("group") || "не указана"}`,
            `Направление: ${data.get("direction") || "нужна рекомендация"}`,
            `Контакт для ответа: ${data.get("contact")}`,
            `Пожелания: ${data.get("message") || "нет"}`,
        ].join("\n");

        window.open(
            `https://wa.me/77775259885?text=${encodeURIComponent(message)}`,
            "_blank",
            "noopener,noreferrer",
        );
        setOpenedWhatsApp(true);
    };

    return (
        <article className="winter-order-page">
            <div className="winter-order-page__intro">
                <Kicker>ОНЛАЙН-ЗАКАЗ</Kicker>
                <h2>Запросите маршрут и стоимость для своей группы.</h2>
                <p>
                    Компания рассчитывает поездку после того, как вы сообщите
                    даты, количество гостей и желаемые места. Публичных
                    фиксированных цен на сайте нет.
                </p>
                <a href="https://wa.me/77775259885">
                    WhatsApp · +7 777 525 98 85
                </a>
                <a href="mailto:kztravel@mail.ru">kztravel@mail.ru</a>
            </div>
            <form className="winter-order-form" onSubmit={handleSubmit}>
                <label>
                    Имя
                    <input name="name" autoComplete="name" required />
                </label>
                <label>
                    Даты поездки
                    <input name="dates" placeholder="Например, 12–14 января" />
                </label>
                <label>
                    Количество гостей
                    <input name="group" inputMode="numeric" />
                </label>
                <label>
                    Направление
                    <select name="direction" defaultValue="">
                        <option value="">Пока не выбрал(а)</option>
                        <option>Экскурсия по Алматы или в горы</option>
                        <option>Национальные парки и озёра</option>
                        <option>Горнолыжный курорт</option>
                        <option>Вертолёт или самолёт</option>
                        <option>Багги или квадроцикл</option>
                        <option>Другое</option>
                    </select>
                </label>
                <label>
                    Телефон или электронная почта
                    <input name="contact" autoComplete="off" required />
                </label>
                <label className="winter-order-form__message">
                    Пожелания
                    <textarea
                        name="message"
                        rows={3}
                        placeholder="Состав группы, интересующие места, вопросы"
                    />
                </label>
                <button type="submit">
                    Продолжить в WhatsApp <span aria-hidden="true">↗</span>
                </button>
                <p aria-live="polite">
                    {openedWhatsApp
                        ? "Черновик сообщения открыт в WhatsApp. Проверьте его и отправьте менеджеру."
                        : "Форма подготовит сообщение; заказ подтвердит менеджер."}
                </p>
            </form>
        </article>
    );
};

export const WinterContactsPage = () => (
    <article className="winter-contacts-page">
        <header>
            <Kicker>КОНТАКТЫ И ЗАКАЗ</Kicker>
            <h2>Обсудите поездку напрямую с менеджером.</h2>
            <p>
                Для расчёта сообщите даты, число гостей и места, которые хотите
                увидеть. Маршрут и итоговую стоимость подтвердят индивидуально.
            </p>
        </header>
        <div className="winter-contacts-page__channels">
            <a href="https://wa.me/77775259885">
                <span>WHATSAPP</span>+7 777 525 98 85
            </a>
            <a href="tel:+77775259885">
                <span>ТЕЛЕФОН</span>+7 777 525 98 85
            </a>
            <a href="mailto:kztravel@mail.ru">
                <span>ЭЛЕКТРОННАЯ ПОЧТА</span>kztravel@mail.ru
            </a>
        </div>
        <div className="winter-contacts-page__bottom">
            <img src={photos.almaty} alt="Алматы и горы Заилийского Алатау" />
            <div>
                <h3>Kazakhstan Travel</h3>
                <p>
                    Частные туры из Алматы с 2011 года. Внедорожник 4×4,
                    водитель-гид и индивидуально согласованный маршрут.
                </p>
                <PageLink to={appRoutes.WINTER_ORDER}>
                    Перейти к онлайн-заказу
                </PageLink>
            </div>
        </div>
    </article>
);
