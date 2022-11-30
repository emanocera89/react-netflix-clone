

import Item from "../Item/Item";
import React from "react";
import Slider from "react-slick";
import './ItemListRow.css';
import Svg from "../Svg/Svg";

function ItemListRow(props) {
    const slider = React.useRef(null);

    // slick slider config
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        //initialSlide: 1,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="item-slider-container">
            <Slider ref={slider} {...settings}>
                {props.titles.length > 0 && props.titles.map((i, id) => (
                    <div key={id}><Item title={i} titles={props.titles} genres={props.genres} /></div>
                ))}
            </Slider>
            <button className="slick-arrow slick-prev" onClick={() => slider?.current?.slickPrev()}><Svg name="prev" color="#fff" width={30} height={30} viewBox="0 0 20 18" /></button>
            <button className="slick-arrow slick-next" onClick={() => slider?.current?.slickNext()}><Svg name="next" color="#fff" width={30} height={30} viewBox="0 0 18 18" /></button>
        </div>
    )
}

export default ItemListRow