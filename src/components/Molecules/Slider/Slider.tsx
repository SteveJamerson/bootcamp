import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  SliderItemComponent,
  SliderItemsComponent,
  SliderNavComponent,
  SliderWrapperComponent,
} from "./styles";
import { SliderData } from "./Slider.types";

export interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  sliders: SliderData[];
}

const Slider: React.FC<SliderProps> = ({
  className,
  children,
  sliders,
  ...props
}) => {
  const classes = clsx(className);

  let childrens: any;
  let size: any = 0;

  let still: any;
  let moving: any;

  const [selected, setSelected] = useState(0);

  let indexFinish: any = 0;
  const [indexStart, setIndexStart] = useState(0);

  const [transform, setTransform] = useState(0);

  const [isDown, setIsDown] = useState(false);
  const [isUp, setIsUp] = useState(true);

  const sliderItem = useRef<HTMLDivElement>(null);
  childrens = sliderItem.current?.children;
  size = childrens?.item(1)?.scrollWidth;

  const mousestart = (e: any) => {
    setIsDown(true);
    setIsUp(false);
    setIndexStart((transform / size) | 0);
  };
  const mousemove = (e: any) => {    
    if (moving === still) {
      moving = e.movementX < 0 ? 1 : -1;
      return;
    }
    moving = e.movementX < 0 ? 1 : -1;

    still = moving;

    indexFinish = indexStart + moving;

    if (indexFinish < 0) {
      indexFinish = [...childrens].length - 1;
    }
    if (indexFinish >= [...childrens].length) {
      indexFinish = 0;
    }

    select(indexFinish);
  };
  const mousefinish = (e: any) => {
    setIsDown(false);
    setIsUp(true);
  };
  const select = (index: number) => {
    setTransform(index * size);
    setSelected(index);
  };
  
  const [touchStart, setTouchStart] = useState(0);

  let touchXMove: any

  const touchstart = (e: any) => {
    const touch = e.touches[0];
    setTouchStart(touch.screenX);
    setIsDown(true);
    setIsUp(false);
    setIndexStart((transform / size) | 0);
    
  }
  const touchend = (e: any) => {
    setIsDown(false);
    setIsUp(true);
  }

  const touchmove = (e: any) => {
      const touch = e.touches[0];
           
      touchXMove = touchStart - touch.screenX
      
      indexFinish = indexStart + (touchXMove > 0 ? 1 : -1)

      if (indexFinish < 0) {
        indexFinish = [...childrens].length - 1;
      }
      if (indexFinish >= [...childrens].length) {
        indexFinish = 0;
      }    

      setTransform(indexFinish * size);
      setSelected(indexFinish);
  }

  useEffect(()=> {
    window.onresize = (e: any) => {
      select(0)
    }
  })

  return (
    <SliderWrapperComponent
      className={classes}
      onMouseLeave={(e) => !isUp && mousefinish(e)}
    >
      <SliderItemComponent
        ref={sliderItem}
        onMouseDown={(e) => mousestart(e)}
        onMouseMove={(e) => isDown && mousemove(e)}
        onMouseUp={(e) => mousefinish(e)}
        onTouchMove={(e) => touchmove(e)}
        onTouchStart={(e) => touchstart(e)}
        onTouchEnd={(e)=> touchend(e)}
      >
        {sliders.map((slider, i) => {
          return (
            <SliderItemsComponent
              style={{ transform: `translateX(-${transform}px)` }}
              key={slider.id}
            >
              <img
                src={slider.image}
                alt="imagem ilustrativa"
                title="ilustração"
              />
              <h5 className="fs-2">
                {slider.title} {i + 1}
              </h5>
              <p className="fs-5">{slider.text}</p>
            </SliderItemsComponent>
          );
        })}
      </SliderItemComponent>
      <SliderNavComponent className="carousel-nav">
        {sliders.map((slider, i) => {
          return (
            <input
              key={i}
              type="radio"
              name="carousel-select"
              className="dot"
              onClick={() => select(i)}
              checked={selected === i}
            />
          );
        })}
      </SliderNavComponent>
    </SliderWrapperComponent>
  );
};

export default Slider;
