import React from "react";


const Achievement = () => {
    return(
        <div className="achvmnt">
            <div className="container">
                <div className="achvmnt-block">
                    <div className="achvmnt-content">
                        <div className="achvmnt-title">
                        Ми знаємо, що сподобається вашим “великим” друзям!
                        </div>
                        <div className="achvmnt-text">Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію термобілизни “Big warm”
                        </div>
                        <a className="btn" href="#">
                            До каталогу
                        </a>
                    </div>
                    <div className="achvmnt-photo">
                        <img src="/img/achvmnt/achvmnt.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;