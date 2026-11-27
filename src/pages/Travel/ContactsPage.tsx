import type { PageProps } from "@/pages/Travel/page-types";
import { Kicker, PageLink } from "@/pages/Travel/PagePrimitives";
import { getSeasonRoute } from "@/routes/season-routes";
import { photos } from "@/pages/Travel/photos";

export const ContactsPage = ({ season }: PageProps) => (
    <article className="travel-contacts-page" data-season={season}>
        <header>
            <Kicker>КОНТАКТЫ И ЗАКАЗ</Kicker>
            <h2>Обсудите поездку напрямую с менеджером.</h2>
            <p>
                Для расчёта сообщите даты, число гостей и места, которые хотите
                увидеть. Маршрут и итоговую стоимость подтвердят индивидуально.
            </p>
        </header>
        <div className="travel-contacts-page__channels">
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
        <div className="travel-contacts-page__bottom">
            <img src={photos.almaty} alt="Алматы и горы Заилийского Алатау" />
            <div>
                <h3>Kazakhstan Travel</h3>
                <p>
                    Частные туры из Алматы с 2011 года. Внедорожник 4×4,
                    водитель-гид и индивидуально согласованный маршрут.
                </p>
                <PageLink to={getSeasonRoute(season, "order")}>
                    Перейти к онлайн-заказу
                </PageLink>
            </div>
        </div>
    </article>
);
