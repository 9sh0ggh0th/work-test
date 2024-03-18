import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Products = () => {
    // Генератор постов с товарами
    function generateSlides( length = 3) {
        return Array.from( { length } ).map( ( value, index ) => {
          return {
            src: `/img/products${ index }`,
          };
        });
    }

    return(
        <div className="products">
                <div className="container">
                    <div className="products-header">
                        <h1 id="carousel-heading">Найгарячіші товари</h1>
                        <div className="pagination">
                            <label
                                className="pagination-page"
                            >
                                <span>01 / 03</span>
                                <img
                                    className="pagination-arrow"
                                    src="/img/products/arrowL.svg"
                                    alt=""
                                />
                                <img
                                    className="pagination-arrow"
                                    src="/img/products/arrowR.svg"
                                    alt=""
                                />
                            </label>
                        </div>
                    </div>

                    <div className="products-panel">
                        {/* Создание слайдера */}
                    <Splide
                        options={{
                            perPage: 3,
                            gap: 75,
                            width : 1366,
                            rewind: false,
                        }}
                        aria-labelledby="carousel-heading"
                    >
                        {/* Ниже приведены шаблоны для создания постов с товарами с помощью функции */}
                        {generateSlides().map( slide => (
                            <SplideSlide key={ slide.src } className="products-post">
                                <button className="products-like">
                                    <img src="/img/products/heart.svg" alt=""/>
                                </button>
                                <div className="products-post-header">
                                    <img className="products-post-preview" src="/img/products/product2.jpg" alt=""/>
                                </div>
                                <div className="products-post-content">
                                    <h2 className="products-post-title">
                                        Термобілизна для бодібілдерів
                                    </h2>
                                    <p className="products-post-description">Для чоловіків</p>
                                    <p className="products-post-description">2 кольори</p>
                                </div>
                                <div className="products-post-footer">
                                    4000 грн.
                                </div>
                            </SplideSlide>
                            )
                        )}
                        {generateSlides().map( slide => (
                            <SplideSlide key={ slide.src } className="products-post">
                                <button className="products-like">
                                    <img src="/img/products/heart.svg" alt=""/>
                                </button>
                                <div className="products-post-header">
                                    <img className="products-post-preview" src="/img/products/product1.jpg" alt=""/>
                                </div>
                                <div className="products-post-content">
                                    <h2 className="products-post-title">
                                        Майка для бодібілдерів
                                    </h2>
                                    <p className="products-post-description">Для жінок</p>
                                    <p className="products-post-description">6 кольорів</p>
                                </div>
                                <div className="products-post-footer">
                                    1100 грн.
                                </div>
                            </SplideSlide>
                            )
                        )}
                        {generateSlides().map( slide => (
                            <SplideSlide key={ slide.src } className="products-post">
                                <button className="products-like">
                                    <img src="/img/products/heart.svg" alt=""/>
                                </button>
                                <div className="products-post-header">
                                    <img className="products-post-preview" src="/img/products/product.jpg" alt=""/>
                                </div>
                                <div className="products-post-content">
                                    <h2 className="products-post-title">
                                        Ланцюжок для бодібілдерів
                                    </h2>
                                    <p className="products-post-description">Аксесуари</p>
                                    <p className="products-post-description">30 кг.</p>
                                </div>
                                <div className="products-post-footer">
                                    2000 грн.
                                </div>
                            </SplideSlide>
                            )
                        )}
                    </Splide>

                    </div>
                </div>
        </div>
    );
};

export default Products;