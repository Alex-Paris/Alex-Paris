import type { ReactNode } from 'react'

interface BlobMaskProps {
  children: ReactNode
  className?: string
  animated?: boolean
  color?: string
}

/**
 * BlobMask component that creates an organic blob shape using the provided SVG path
 * Features:
 * - Matches the exact blob shape from the provided SVG
 * - Optional animation for organic movement
 * - Customizable color and size
 * - Responsive design
 */
export default function BlobMask({
  children,
  className = '',
  animated = true,
  color = '#9080d8',
}: BlobMaskProps) {
  return (
    <svg
      viewBox="0 0 150 150"
      className={`blob-mask ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ color }}
    >
      <defs>
        <style>
          {`
            /* Blob animation styles */
            .blob-mask {
              --blob-translate: 4px;
              --blob-rotate: 1.5deg;
              --blob-scale: 0.02;
              --blob-duration: 20s;
              transform-origin: 50% 50%;
              will-change: transform;
            }

            .blob-animated {
              animation: blob-drift var(--blob-duration) ease-in-out infinite;
            }

            @keyframes blob-drift {
              0% { 
                transform: translate(0, 0) rotate(0deg) scale(1); 
              }
              25% { 
                transform: translate(var(--blob-translate), calc(var(--blob-translate) * -0.8)) rotate(calc(var(--blob-rotate) * 0.7)) scale(calc(1 + var(--blob-scale))); 
              }
              50% { 
                transform: translate(0, calc(var(--blob-translate) * -1.2)) rotate(calc(var(--blob-rotate) * -0.5)) scale(1); 
              }
              75% { 
                transform: translate(calc(var(--blob-translate) * -0.7), var(--blob-translate)) rotate(calc(var(--blob-rotate) * -0.9)) scale(calc(1 - var(--blob-scale))); 
              }
              100% { 
                transform: translate(0, 0) rotate(0deg) scale(1); 
              }
            }

            /* Respect reduced motion preference */
            @media (prefers-reduced-motion: reduce) {
              .blob-animated { 
                animation: none; 
                transform: none; 
              }
              .blob-path-animate { 
                display: none; 
              }
            }
          `}
        </style>

        {/* Clip path for the blob mask */}
        <clipPath id="custom-blob-mask">
          {/* Base path matching the provided SVG */}
          <path
            d="M55.7,-32.7C64.1,-17.7,57.1,5.7,45.3,24.7C33.5,43.7,16.7,58.5,0.2,58.4C-16.4,58.2,-32.8,43.3,-44,24.6C-55.3,5.9,-61.6,-16.6,-53.4,-31.5C-45.2,-46.4,-22.6,-53.7,0.5,-54C23.7,-54.3,47.3,-47.6,55.7,-32.7Z"
            transform="translate(75 75)"
          >
            {/* Optional path animation for more organic movement */}
            {animated && (
              <animate
                className="blob-path-animate"
                attributeName="d"
                dur="25s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
                values="
                  M55.7,-32.7C64.1,-17.7,57.1,5.7,45.3,24.7C33.5,43.7,16.7,58.5,0.2,58.4C-16.4,58.2,-32.8,43.3,-44,24.6C-55.3,5.9,-61.6,-16.6,-53.4,-31.5C-45.2,-46.4,-22.6,-53.7,0.5,-54C23.7,-54.3,47.3,-47.6,55.7,-32.7Z;
                  M58.2,-35.1C66.8,-19.8,59.1,3.2,46.8,22.4C34.5,41.6,17.9,56.8,1.2,56.7C-15.5,56.6,-32.1,41.9,-43.6,23.4C-55.1,4.9,-61.8,-17.8,-53.2,-32.8C-44.6,-47.8,-21.8,-55.2,1.8,-55.5C25.4,-55.8,49.6,-49.1,58.2,-35.1Z;
                  M52.1,-30.8C60.3,-16.1,54.8,7.8,43.9,26.5C33.0,45.2,16.2,59.8,0.1,59.7C-16.0,59.6,-32.0,45.2,-43.2,27.1C-54.4,9.0,-60.2,-14.1,-52.8,-28.9C-45.4,-43.7,-22.8,-51.0,0.8,-51.3C24.4,-51.6,47.9,-45.4,52.1,-30.8Z;
                  M56.9,-33.5C65.2,-18.5,58.4,4.8,46.6,23.8C34.8,42.8,18.0,57.9,1.5,57.8C-15.0,57.7,-30.8,42.5,-42.4,24.0C-54.0,5.5,-60.9,-17.2,-52.7,-31.8C-44.5,-46.4,-22.2,-53.5,1.2,-53.8C24.6,-54.1,48.6,-47.2,56.9,-33.5Z;
                  M55.7,-32.7C64.1,-17.7,57.1,5.7,45.3,24.7C33.5,43.7,16.7,58.5,0.2,58.4C-16.4,58.2,-32.8,43.3,-44,24.6C-55.3,5.9,-61.6,-16.6,-53.4,-31.5C-45.2,-46.4,-22.6,-53.7,0.5,-54C23.7,-54.3,47.3,-47.6,55.7,-32.7Z
                "
              />
            )}
          </path>
        </clipPath>

        {/* Gradient for the blob fill */}
        <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Apply clip path to children */}
      <g
        clipPath="url(#custom-blob-mask)"
        className={animated ? 'blob-animated' : ''}
      >
        {children}
      </g>
    </svg>
  )
}
