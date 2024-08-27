import React from 'react';
import './css/SeccionInicio.css';
import Slider from 'react-slick';
import Wall1 from '../../../images/Wallpaper1.png';
import Wall from '../../../images/Wallpaper.png';
import Wall2 from '../../../images/Wallpaper2.png';

function SeccionInicio() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000, // Cambia las imágenes cada 500ms (0.5 segundos)
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src={Wall} alt="Slide 1" />
                </div>
                <div>
                    <img src={Wall1} alt="Slide 2" />
                </div>
                <div>
                    <img src={Wall2} alt="Slide 3" />
                </div>
                </Slider>
        </div>
    );
}

export default SeccionInicio;
