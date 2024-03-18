import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';


const Reviews = () => {
    function generateSlides( length = 10) {
        return Array.from( { length } ).map( ( value, index ) => {
          return {
            src: `/img/reviews${ index }`,
          };
        });
    }

    return(
        <div className="reviews">
            <div className="container">
                <div className="products-header">
                    <h1 id="carousel-heading">Відгуки наших клієнтів</h1>
                    <div className="pagination">
                        <label
                            className="pagination-page"
                        >
                            <span>01 / 03</span>
                            <img
                                // onClick={}
                                className="pagination-arrow"
                                src="/img/products/arrowL.svg"
                                alt=""
                            />
                            <img
                                // onClick={}
                                className="pagination-arrow"
                                src="/img/products/arrowR.svg"
                                alt=""
                            />
                        </label>
                    </div>
                </div>

                <div className="reviews-panel">
                    <Splide
                        options={{
                            perPage: 4,
                            gap: 55,
                            width : 1366,
                            rewind: false,
                        }}
                        aria-labelledby="carousel-heading"
                    >
                        {generateSlides().map( slide => (
                            <SplideSlide key={ slide.src } className="reviews-post">
                                <div className="reviews-post-header">
                                    <img className="reviews-post-preview" src="/img/reviews/revAvatar.jpg" alt=""/>
                                    <div className="reviews-post-author">
                                        <img className="reviews-post-rating" src="/img/reviews/rating.svg" alt=""/>
                                        <div className="reviews-post-name">Жора Ремінгтон</div>
                                    </div>
                                </div>
                                <div className="reviews-post-content">
                                    <p className="reviews-post-text">Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...</p>
                                </div>
                            </SplideSlide>
                            )
                        )}
                    </Splide>
                </div>
            </div>
                <div className="line"></div>
        </div>
    );
};

export default Reviews;