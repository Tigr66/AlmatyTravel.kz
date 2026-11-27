import type { PageProps } from "@/pages/Travel/page-types";
import { Kicker } from "@/pages/Travel/PagePrimitives";
import { useState, type FormEvent } from "react";

export const OrderPage = ({ season }: PageProps) => {
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
        <article className="travel-order-page" data-season={season}>
            <div className="travel-order-page__intro">
                <Kicker>ОНЛАЙН-ЗАКАЗ</Kicker>
                <h2>Запросите маршрут и стоимость для своей группы.</h2>
                <p>
                    Компания рассчитывает поездку после того, как вы сообщите
                    даты, количество гостей и желаемые места. Публичных
                    фиксированных цен на сайте нет. Для поездки в{" "}
                    {season === "winter" ? "зимний" : "летний"} сезон укажите
                    интересующие направления и пожелания.
                </p>
                <a href="https://wa.me/77775259885">
                    WhatsApp · +7 777 525 98 85
                </a>
                <a href="mailto:kztravel@mail.ru">kztravel@mail.ru</a>
            </div>
            <form className="travel-order-form" onSubmit={handleSubmit}>
                <label>
                    Имя
                    <input name="name" autoComplete="name" required />
                </label>
                <label>
                    Даты поездки
                    <input
                        name="dates"
                        placeholder={
                            season === "winter"
                                ? "Например, 12–14 января"
                                : "Например, 12–14 июля"
                        }
                    />
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
                        {season === "winter" ? (
                            <option>Горнолыжный курорт</option>
                        ) : (
                            <option>Горный маршрут или прогулка</option>
                        )}
                        <option>Вертолёт или самолёт</option>
                        <option>Багги или квадроцикл</option>
                        <option>Другое</option>
                    </select>
                </label>
                <label>
                    Телефон или электронная почта
                    <input name="contact" autoComplete="off" required />
                </label>
                <label className="travel-order-form__message">
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
