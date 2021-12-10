import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { SliderItemComponent, SliderItemsComponent, SliderNavComponent, SliderWrapperComponent } from './styles';
import { SliderData } from './Slider.types';

export interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  sliders: SliderData[];
}

const Slider: React.FC<SliderProps> = ({
  className,
  children,
  sliders,
  ...props
}) => {
  const classes = clsx(
    className,
  );

  return (
      <SliderWrapperComponent className={classes} >
        <SliderItemComponent>
        {
          sliders.map((slider, i) => {
            return (
              <SliderItemsComponent key={slider.id}>
                <img
                  src={ slider.image } 
                  alt="imagem ilustrativa"
                  title="ilustração"
                />
                <h5 className="fs-2">{ slider.title } {i}</h5>
                <p className="fs-5">
                  { slider.text }
                </p>
              </SliderItemsComponent>
            )
          })
        }
        </SliderItemComponent>
        <SliderNavComponent className="carousel-nav">
          {
            sliders.map(slider => {
              return (
                <input
                  type="radio"
                  name="carousel-select"
                  className="dot"
                />
                )
            })
          }
          </SliderNavComponent>
      </SliderWrapperComponent>
  );
};

export default Slider;
