import React from "react";


const Intro = () => {
    return(
        <div className="intro">
            <a className="intro-arrowR">
                <img src="/img/intro/arrowR-intro.svg"/>
            </a>
            <a className="intro-arrowL">
                <img src="/img/intro/arrowL-intro.svg"/>
            </a>
            <img className="intro-preview" src="/img/intro/intro.jpg"/>
            <div className="intro-title">
                <p>Швидше.</p>
                <p>Вище.</p>
                <p>Сильніше.</p>
                <p className="intro-title intro-title--last">Разом із Nike</p>
            </div>
            <div className="intro-advertising">Знижки до 40%</div>
            <div className="intro-text">Залишився лише тиждень</div>
            <div className="intro-pagination">
                <div className="line line--intro"></div>
                <div className="line line--intro"></div>
                <div className="line line--intro"></div>
            </div>
        </div>
    );
};

export default Intro;