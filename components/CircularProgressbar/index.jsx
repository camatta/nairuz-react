import Image from "next/image";
import { CircularProgressbarWithChildren } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";

import { GradientSVG } from "./GradientSVG";

import VisibilitySensor from "react-visibility-sensor"
import ProgressProvider from "./ProgressProvider";

const CircularProgress = ({ preNumberText, posNumberText, percentageValue, showPercentage = true, simbol, imgSrc }) => {
  return (
    <VisibilitySensor>
      {({ isVisible }) => {
        const percentage = isVisible ? percentageValue : 0;
        let percentageToShow = percentageValue.toString();

        if(percentageToShow.includes('.')) {
          percentageToShow = percentageToShow.replace('.', ',')
        }

        return (
          <div style={{ width: 150, height: 'auto' }}>
            <ProgressProvider valueStart={0} valueEnd={percentage}>
              {value => (
                <>
                <GradientSVG startColor='#F0462D' endColor='#FFB200' idCSS='gradientProgressBar' rotation={180} />

                <CircularProgressbarWithChildren
                  strokeWidth={9}
                  value={percentage}
                  styles={{
                    root: {},
                    path: {
                      stroke: 'url(#gradientProgressBar)',
                      height: '100%',
                      strokeLinecap: 'round',
                      transition: 'stroke-dashoffset 1s ease 0s',
                      transformOrigin: 'center center',
                    },
                    trail: {
                      strokeLinecap: 'round',
                      transformOrigin: 'center center',
                    },
                    background: {
                      fill: 'transparent',
                    },
                  }}
                >
                  <div className="circularProgressText">
                    {imgSrc && (
                      <Image src={imgSrc} width={40} height={40} alt={`${preNumberText && `${preNumberText}`}${percentage} ${posNumberText}`} />
                    )}

                    <strong>{preNumberText && `${preNumberText}`}{showPercentage && percentageToShow}{simbol && simbol}</strong>
                    
                    <span>{posNumberText}</span>
                  </div>
                </CircularProgressbarWithChildren>
                </>
              )}
            </ProgressProvider>
          </div>
        );
      }}
    </VisibilitySensor>
  )
}

export { CircularProgress }