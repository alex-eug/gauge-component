import React from 'react';
import './gauge.css';




export const Gauge = ({ radius, minRange, maxRange, currentValue }) => {

    function map_range(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
    }

    const strokeWidth = radius * 0.2;
    const innerRadius = radius - strokeWidth / 2;
    const circumference = innerRadius * 2 * Math.PI;
    const arc = circumference * (270 / 360);
    const dashArray = `${arc} ${circumference}`;
    const transform = `rotate(135, ${radius}, ${radius})`;
    const arcRangeValue = arc-map_range(currentValue, minRange, maxRange, 0, arc)

    return (
        <div>
        <svg height={radius * 2} width={radius * 2}>

            <circle
                class="gauge_base"
                cx={radius}
                cy={radius}
                fill="transparent"
                r={innerRadius}
                stroke="grey"
                strokeDasharray={dashArray}
                strokeLinecap="round"
                strokeWidth={strokeWidth}
                transform={transform}
                
            />
            ‍
            <circle
                class="gauge_base"
                cx={radius}
                cy={radius}
                fill="transparent"
                r={innerRadius}
                stroke="blue"
                strokeDasharray={dashArray}
                strokeLinecap="round"
                strokeWidth={strokeWidth}
                transform={transform}
                strokeDashoffset={arcRangeValue}

            />
        </svg>
        {
           [0,10,20,30,40,50,60,70,80,90,100].map((char,i) => (
            <div
        style={{
            height: `${100}px`,
            
            
            
          }}>
            {char}
        </div>
        ))
        }
        
        </div>
    );
}



export default Gauge
