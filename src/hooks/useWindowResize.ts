import { useEffect, useState } from "react";

function getWindowSize() {
  return [ window.innerWidth, window.innerHeight ];
}

export default function useWindowResize() {
  const [size, setSize] = useState(getWindowSize());

  useEffect(() => {
    function resizeListener() {
      setSize(getWindowSize());
    }

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    }
  }, []);

  return size;
}

