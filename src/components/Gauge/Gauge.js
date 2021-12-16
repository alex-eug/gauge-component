import React from "react";
import "./gauge.css";

export const Gauge = ({
  minRange,
  maxRange,
  currentValue,
  step,
}) => {
  
  function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  }
  
  const rangeLegend = Array.from({length: step}, (_, i) => Math.trunc(i * (maxRange-minRange)/(step-1) + minRange))
  console.log(step);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
    >
      <defs>
        <radialGradient
          id="Dégradé_sans_nom_580"
          data-name="Dégradé sans nom 580"
          cx="50"
          cy="50"
          r="44"
          gradientUnits="userSpaceOnUse"
        >

          <stop offset="0.65" stop-color="#29b19d" />
          <stop offset="0.67" stop-color="#258d83" />
          <stop offset="0.69" stop-color="#216e6d" />
          <stop offset="0.71" stop-color="#1e5259" />
          <stop offset="0.74" stop-color="#1b3c49" />
          <stop offset="0.77" stop-color="#192b3d" />
          <stop offset="0.8" stop-color="#182034" />
          <stop offset="0.85" stop-color="#17192f" />
          <stop offset="1" stop-color="#17172e" />
        </radialGradient>
        <radialGradient
          id="Dégradé_sans_nom_579"
          data-name="Dégradé sans nom 579"
          cx="50"
          cy="50"
          r="25.06"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3" stop-color="#181731" />
          <stop offset="0.66" stop-color="#181932" />
          <stop offset="0.79" stop-color="#182037" />
          <stop offset="0.88" stop-color="#182b3e" />
          <stop offset="0.96" stop-color="#193c49" />
          <stop offset="1" stop-color="#194a52" />
        </radialGradient>
        <radialGradient
          id="Dégradé_sans_nom_763"
          data-name="Dégradé sans nom 763"
          cx="50"
          cy="50"
          r="30.29"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.01" stop-color="#164047" />
          <stop offset="0.34" stop-color="#152c37" />
          <stop offset="0.71" stop-color="#131c2a" />
          <stop offset="1" stop-color="#131726" />
        </radialGradient>
        <clipPath id="clip-path" transform="translate(0 0)">
          <circle class="cls-1" cx="50" cy="50" r="28" />
        </clipPath>
        <radialGradient
          id="Dégradé_sans_nom_767"
          data-name="Dégradé sans nom 767"
          cx="50"
          cy="50.71"
          r="48.24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.98" stop-color="#17172e" />
          <stop offset="1" stop-color="#29b29e" />
        </radialGradient>
      </defs>
      <g id="circles-background">
        
        <path
          class="cls-3"
          d="M50,3.37A46.63,46.63,0,1,0,96.63,50,46.63,46.63,0,0,0,50,3.37Z"
          transform="translate(0 0)"
        />
        <circle class="cls-4" cx="50" cy="50" r="25.06" />
        <circle class="cls-4" cx="50" cy="50" r="25.06" />
      </g>
      <g id="circle-center">
        <circle class="cls-5" cx="50" cy="50" r="27.8" />
      </g>
      <g id="gauge">
        <g class="cls-6">
          <circle class="cls-7" cx="50" cy="50" r="30.26" 
          style={{
            strokeDashoffset: map_range(currentValue, minRange , maxRange , 200 , 80)
          }}/>
        </g>
      </g>
      <g id="centerValue">
        <text class="cls-11" x="50%" y="53%" transform="translate(50% 50%">
          {currentValue}
        </text>
      </g>
      <g id="graduation">
        <g>
          {
            rangeLegend.map((numberGraduation, index) => (
              <g>
                <g  x="50%" y="50%" transform={`translate(50 52) scale(1,1.04) rotate(${160+(220/(step-1))*(index)})`}>
                  <text class={index%2 ? "cls-8" : "cls-9"} transform={`translate(37 0) rotate(${160+(220/(step-1))*(index)*-1+40})`}>
                    {numberGraduation}
                  </text>
                </g>
                <g x="50%" y="50%" transform={`translate(50 51) rotate(${160+(220/(step-1))*(index)})`}>
                  <rect class="cls-12"  width="3" height="0.82" transform="translate(44 0)" />
                </g>
                {
                  // remove last graduation
                  rangeLegend.length-1 !== index && 
                  <g x="50%" y="50%" transform={`translate(50 51) rotate(${170+(220/(step-1))*(index)})`}>
                    <rect class="cls-12"  width="3" height="0.44" transform="translate(44 0)" />
                  </g>
                }
              </g>
            ))
          }
        </g>
      </g>
      <g id="border-outside">
        <path
          class="cls-13"
          d="M50,4.2A46.64,46.64,0,0,1,90,74.74l-1,1.34,1.46,1,.93-1.54A48.3,48.3,0,0,0,50,2.54h0A48.3,48.3,0,0,0,7.35,73.47l.84,1.58,1.5-1-.88-1.4A46.64,46.64,0,0,1,50,4.2"
          transform="translate(0 0)"
        />
      </g>
    </svg>
  );
};

export default Gauge;
