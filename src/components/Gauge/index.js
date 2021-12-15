import React from 'react';
import './gauge.css';

export const Gauge = ({ radius, minRange, maxRange, currentValue, step=11 }) => {

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

    const rangeLegend = Array.from({length: step}, (_, i) => i * (maxRange-minRange)/(step-1) + minRange)

    return (
        <div style={{
            position:'relative',
            width: 'min-content'
        }}>
        <div style={{
            width:'fit-content'
        }}>
            {
            rangeLegend.map((char,i) => (
                <div
            style={{
                position:'absolute',
                height:'20px',
                width: `20px`,
                transform: `translate(0px, ${radius}px) rotate(${-90+65+(270/(rangeLegend.length) * i) }deg)`,
                transformOrigin: `${radius}px 0 0`,
            }}>
                <div style={{
                    fontWeight:'bold',
                    textAlign:'center',
                    transform: `rotate(${(270/(rangeLegend.length) * i * -1 + 90 - 65) }deg)`,
                    }}>
                    {char}
                </div> 
            
            </div>
            ))
            }
        </div>
         <svg height={radius * 2} width={radius * 2} style={{
              transform: 'scale(70%)',
              width:`${radius*2}`
         }}>
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
            <div style={{
                fontSize:'xxx-large',
                fontWeight:'bold',
                position:'absolute',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                zIndex:2,
                top:0,
                bottom:0,
                left:0,
                right:0,
            }}>
                {currentValue}
            </div>

        </div>
    );
}



export default Gauge
