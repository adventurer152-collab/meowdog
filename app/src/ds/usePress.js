import { useState } from 'react';

// Hover lifts 1px, press sinks onto the sticker shadow.
export function usePress(disabled) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const bind = disabled
    ? {}
    : {
        onPointerEnter: () => setHover(true),
        onPointerLeave: () => {
          setHover(false);
          setPress(false);
        },
        onPointerDown: () => setPress(true),
        onPointerUp: () => setPress(false),
        onPointerCancel: () => setPress(false),
      };
  return [hover, press, bind];
}
