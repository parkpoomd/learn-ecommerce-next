import React, { FC, Children, isValidElement } from 'react';
import style from './ProductSlider.module.css';
import { useKeenSlider } from 'keen-slider/react';
import cn from 'classnames';

const ProductSlider: FC = ({ children }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className={style.root}>
      <div ref={sliderRef} className="keen-slider h-full transition-opacity">
        <button
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.prev()
          }
          className={cn(style.leftControl, style.control)}
        />
        <button
          onClick={(e: any) =>
            e.stopPropagation() || instanceRef.current?.next()
          }
          className={cn(style.rightControl, style.control)}
        />
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className}` : ''
                } keen-slider__slide`,
              },
            };

            // return React.cloneElement(child, {
            //   className: `${
            //     child.props.className ? `${child.props.className}` : ''
            //   } keen-slider__slide`,
            // });
          }

          return child;
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
