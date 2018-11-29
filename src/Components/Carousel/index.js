import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';
import Config from '../../Config';

class CarouselComponent extends Component{
    render(){
        return <Carousel showArrows={false} showIndicators={false} dynamicHeight emulateTouch>
        {this.props.images.map((item, index) => (
            <div key={index}>
                     <img src={Config.detail_img_path+item.image_name} alt=""/>
            </div>
        ))}
        </Carousel>;
    }
}

export default CarouselComponent;


