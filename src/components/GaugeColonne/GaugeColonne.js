import React from 'react'
import './gaugeColonne.css'

const GaugeColonne = ({ currentValue, minRange, maxRange }) => {
    function map_range(value, low1, high1, low2, high2) {
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
      }
    return (
        <svg width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" >
            <g>
                <rect x="33" y="17" width="31" height="100%" fill="#098c3d" stroke-width="16" />

            </g>

            <g className="animated__gauge">
                <rect x="33" y="17" width="31" height={`calc(100% - ${map_range(currentValue,minRange,maxRange,0,100)}%`} fill="white" stroke-width="16" />
                <text x="6.8243432" y="57.777393" fill="white" font-family="sans-serif" font-size="13px" stroke-width=".33" style={{ lineHeight: "1.25" }} ><tspan x="6.8243432" y="71" stroke-width=".33">{currentValue}</tspan></text>
                <text x="67.299522" y="21.324938" fill="white" font-family="sans-serif" font-size="13px" stroke-width=".33" style={{ lineHeight: "1.25" }} ><tspan x="67.299522" y="21.324938" stroke-width=".33">{maxRange}</tspan></text>
                <text x="67.299522" y="84.017532" fill="white" font-family="sans-serif" font-size="13px" stroke-width=".33" style={{ lineHeight: "1.25" }} ><tspan x="67.299522" y="120" stroke-width=".33">{minRange}</tspan></text>
            </g>
        </svg>
    )
}

export default GaugeColonne
