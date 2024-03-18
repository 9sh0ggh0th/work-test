import React from "react";

const Footer = () => {
    return(
    <footer className="footer">
        <div className="container">
            <div className="footer-bot">
                <div className="footer-info">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a className="nav_link nav_link--footer" href="#">
                                НОВИНКИ
                            </a>
                        </li>
                        <li className="nav_item">
                            <a className="nav_link nav_link--footer" href="#">
                                ЧОЛОВІКИ
                            </a>
                        </li>
                        <li className="nav_item">
                            <a className="nav_link nav_link--footer" href="#">
                                ЖІНКИ
                            </a>
                        </li>
                        <li className="nav_item">
                            <a className="nav_link nav_link--footer " href="#">
                                АКСЕСУАРИ
                            </a>
                        </li>
                        <li className="nav_item">
                            <a className="nav_link nav_link--footer" href="#">
                                АКЦІЇ
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-about">
                    <p>
                        © 2022 — 2023 IGNAT. Усі права захищені.
                    </p>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;