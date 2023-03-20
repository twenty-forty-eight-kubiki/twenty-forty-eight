import React, { FC, useLayoutEffect } from 'react';
import { useCanvas, useCanvasUpdate } from '../Canvas/Canvas';

export type TextProps = {
  text: string;
  x: number;
  y: number;
  color?: string;
};

const Text: FC<TextProps> = ({ text, x, y, color }) => {
  const context = useCanvas();
  const frameContext = useCanvasUpdate();

  useLayoutEffect(() => {
    if (context) {
      context.font = 'bold 45px serif';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = '#776E65';
      if (color) {
        context.fillStyle = color;
      }
      context.fillText(text, x, y);
    }
  }, [context, frameContext]);

  return null;
};

export default Text;
