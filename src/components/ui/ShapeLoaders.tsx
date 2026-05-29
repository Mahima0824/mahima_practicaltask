import React from "react";

export const ShapeLoaders: React.FC = () => {
  return (
    <div className="flex items-center gap-6" aria-hidden="true">
      <div className="loader" title="circle loader">
        <svg viewBox="0 0 80 80">
          <circle r="32" cy="40" cx="40"></circle>
        </svg>
      </div>

      <div className="loader triangle" title="triangle loader">
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72"></polygon>
        </svg>
      </div>

      <div className="loader square" title="square loader">
        <svg viewBox="0 0 80 80">
          <rect height="64" width="64" y="8" x="8"></rect>
        </svg>
      </div>
    </div>
  );
};

export default ShapeLoaders;
