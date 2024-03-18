import React from "react";


const Header = () => {
    return(
		<header className="header">
      <div className="container">
          <div className="header-inner">

            <div className="header-left">
                <ul className="nav_list">
                  <li className="nav_item">
                      <a className="nav_link" href="tel:098 900 09 09">
                          098 900 09 09
                      </a>
                  </li>
                  <li className="nav_item">
                      <a className="nav_link" href="#">
                          Допомога
                      </a>
                  </li>
                </ul>
            </div>

            <div className="header-auth">
              <a className="nav_link" href="#">
                Увійти / Зареєструватися
              </a>
            </div>

          </div>
      </div>
    </header>


    );
};

export default Header;