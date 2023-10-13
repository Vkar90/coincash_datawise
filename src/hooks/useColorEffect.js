import { useState, useEffect } from "react";

const useColorEffect = (text, inView) => {
  const [colors, setColors] = useState(Array(text.length).fill("black"));

  useEffect(() => {
    if (inView) {
      setColors(Array(text.length).fill("black"));
      const timeouts = [];
      for (let i = 0; i < text.length; i++) {
        const timeout = setTimeout(() => {
          setColors((prevColors) => {
            const newColors = [...prevColors];
            newColors[i] = "#0066ff";
            return newColors;
          });
        }, i * 200);
        timeouts.push(timeout);
      }
      // Cleanup timeouts
      return () => timeouts.forEach(clearTimeout);
    }
  }, [inView, text]);

  return colors;
};

export default useColorEffect;
