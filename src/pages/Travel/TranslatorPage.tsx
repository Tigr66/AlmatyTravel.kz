import type { PageProps } from "@/pages/Travel/page-types";
import { Kicker, PageLink } from "@/pages/Travel/PagePrimitives";
import { getSeasonRoute } from "@/routes/season-routes";
import { photos } from "@/pages/Travel/photos";

export const TranslatorPage = ({ season }: PageProps) => (
    <article className="travel-translator-page" data-season={season}>
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
        <div className="travel-translator-page__details">
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
                <PageLink to={getSeasonRoute(season, "order")}>
                    Запросить переводчика
                </PageLink>
            </div>
        </div>
    </article>
);
