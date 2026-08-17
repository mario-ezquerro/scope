/* eslint react/jsx-first-prop-new-line: "off" */
/* eslint max-len: "off" */
import React from 'react';

export default function Logo({ transform = '' }) {
  return (
    <g className="logo" transform={transform}>
      {/* Gubernator Outer Octagon Badge */}
      <polygon
        fill="#FF5F00"
        points="144,20 196,72 196,144 144,196 72,196 20,144 20,72 72,20"
      />

      {/* Flat Shadow extending to bottom-right */}
      <polygon
        fill="#B23B00"
        points="108,108 196,72 196,144 144,196 72,196"
      />

      {/* White 8-Pointed Star */}
      <polygon
        fill="#FFFFFF"
        points="108,33 120,78 161,55 138,96 183,108 138,120 161,161 120,138 108,183 96,138 55,161 78,120 33,108 78,96 55,55 96,78"
      />

      {/* Inner Dark Star / 3D Shadow Facets */}
      <polygon
        fill="#8C2E00"
        points="108,68 115,91 136,80 125,101 148,108 125,115 136,136 115,125 108,148 101,125 80,136 91,115 68,108 91,101 80,80 101,91"
      />

      {/* Text SCOPE */}
      <text
        x="245"
        y="145"
        fill="#808080"
        fontSize="105"
        fontWeight="800"
        letterSpacing="12"
        fontFamily="Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      >
        SCOPE
      </text>
    </g>
  );
}
