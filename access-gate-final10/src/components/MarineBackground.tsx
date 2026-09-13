import React from 'react';

export const MarineBackground: React.FC = () => {
  return (
    <div
      id="marine-background"
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-white"
      aria-hidden="true"
      style={{
        backgroundImage: "url('/images/marine_tile.jpg')",
        backgroundRepeat: 'repeat',
        // Tile cropped directly from a clean, unobstructed patch of a
        // native-resolution (3x = 1170x2532) reference screenshot, so its
        // pixel size maps to CSS px with an exact, verified /3 conversion
        // (no estimation). Confirmed near-seamless with a 2x2 self-tile
        // test.
        backgroundSize: '390px 177px',
        backgroundPosition: 'top left',
      }}
    />
  );
};
