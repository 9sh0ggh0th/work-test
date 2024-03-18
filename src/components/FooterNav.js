import React from "react";

const FooterNav = () => {
    return(
        <div className="footer-top">

            <div className="container">
                <div className="footer-inner">
                <div className="footer-block">
                    <h1 className="footer-title">
                                Контакт - центр
                    </h1>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a className="footer-link" href="tel:098 900 09 09">098 900 09 09</a>
                            <p className="footer-link" href="#">Пн - Пт 09:00 - 21:00</p>
                            <p className="footer-link" href="#">Пн - Пт 09:00 - 21:00</p>
                        </li>
                    </ul>
                </div>

                <div className="footer-block">
                    <h1 className="footer-title">
                        Покупцям
                    </h1>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a className="footer-link" href="#">
                                Оплата і доставка
                            </a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-link" href="#">
                                Повернення
                            </a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-link" href="#">
                                Питання та відповіді
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-block">
                    <h1 className="footer-title">
                        Особистий кабінет
                    </h1>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a className="footer-link" href="#">
                                Мої дані
                            </a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-link" href="#">Історія замовлень</a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-link" href="#">Улюблені</a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-link" href="#">Розсилки</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-block">
                    <h1 className="footer-title">
                        Про компанію
                    </h1>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a className="footer-link" href="#">
                                Про нас
                            </a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-link" href="#">
                                Новини
                            </a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-link" href="#">
                                Стати партнером
                            </a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-link" href="#">
                                Угода користувача
                            </a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
};

export default FooterNav;
