import React from "react";


const Subscription = () => {
    return(
        <div className="subscription">
            <div className="container">
                <div className="line line--sub"></div>
                <div className="subscription-title">
                    Спіймай всі акції!
                </div>
                <div className="subscription-text">Підписуйся на Email розсилку і отримуй інформацію про всі акції, які будуть з`влятись у нашому магазині. А у нас їх багато :D
                </div>
                <div className="subscription-input">
                    <form className="subscription-form" action="/" method="subscription">
                        <textarea className="subscription-textarea" name="subscription" placeholder="ВВЕДІТЬ" data-autoresize></textarea>
                        <a className="btn btn--subscription" href="#">
                            Підписатись
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscription;