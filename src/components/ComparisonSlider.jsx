import { useState, useRef, useEffect } from 'react';

const SliderIconLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 18l-6-6 6-6" />
    <path d="M9 18l-6-6 6-6" />
  </svg>
);
const SliderIconRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" />
    <path d="M15 18l6-6-6-6" />
  </svg>
);

export default function ComparisonSlider({ beforeImg, afterImg }) {
  const [value, setValue] = useState(50);
  const containerRef = useRef(null);
  const beforeImgRef = useRef(null);

  const syncImageWidth = () => {
    if (containerRef.current && beforeImgRef.current) {
      beforeImgRef.current.style.width = `${containerRef.current.offsetWidth}px`;
    }
  };

  useEffect(() => {
    syncImageWidth();
    window.addEventListener('resize', syncImageWidth);
    return () => window.removeEventListener('resize', syncImageWidth);
  }, []);

  return (
    <div className="comparison-item">
      <div className="comparison-image-container" ref={containerRef}>
        <img src={afterImg} className="img-after" alt="After enhancement" />
        <div
          className="img-before-wrapper"
          style={{ width: `${value}%` }}
        >
          <img
            ref={beforeImgRef}
            src={beforeImg}
            className="img-before"
            alt="Before enhancement"
          />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="slider-handle"
          aria-label="Comparison slider"
        />
        <div
          className="slider-button"
          style={{ left: `${value}%`, transform: 'translate(-50%, -50%)' }}
        >
          <SliderIconLeft />
          <SliderIconRight />
        </div>
        <div className="label-before">Before</div>
        <div className="label-after">After</div>
      </div>
    </div>
  );
}
