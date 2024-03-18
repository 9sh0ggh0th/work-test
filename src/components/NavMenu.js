import React from "react";

const NavMenu = () => {
    return(
        <div className="container">
            <div className="header-inner header-inner--menu">

                <div className="header-logo">
                    <img src="/img/Header/Logo.jpg" />
                </div>

                <div className="header-left">
                    <ul className="nav_list">
                    <li className="nav_item">
                        <a className="nav_link nav_link--menu" href="#">
                            НОВИНКИ
                        </a>
                    </li>
                    <li className="nav_item">
                        <a className="nav_link nav_link--menu" href="#">
                            ЧОЛОВІКИ
                        </a>
                    </li>
                    <li className="nav_item">
                        <a className="nav_link nav_link--menu" href="#">
                            ЖІНКИ
                        </a>
                    </li>
                    <li className="nav_item">
                        <a className="nav_link nav_link--menu" href="#">
                            АКСЕСУАРИ
                        </a>
                    </li>
                    <li className="nav_item">
                        <a className="nav_link nav_link--menu" href="#">
                            АКЦІЇ
                        </a>
                    </li>
                    </ul>
                </div>

                <div className="header-search">
                    <div className="header-input">
                        <form className="header-form" action="/" method="subscription">
                            <img src="/img/Header/zoom.svg"/>
                            <textarea className="header-textarea" name="subscription" data-autoresize></textarea>
                        </form>

                    </div>
                    <a href="#">
                        <img src="/img/Header/heart.svg"/>
                    </a>
                    <a href="#">
                        <img src="/img/Header/bag.svg"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;