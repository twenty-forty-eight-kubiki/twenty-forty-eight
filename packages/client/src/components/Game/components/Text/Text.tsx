import React, { FC } from 'react'
import { useCanvas } from '../Context/Context'

export type TextProps = {
  text: string;
  x: number;
  y: number;
  color?: string;
}

const Text: FC<TextProps> = ({ text, x, y, color }) => {
  const context = useCanvas()

  if (context) {
    context.font = 'bold 75px serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = '#776E65';
    if (color) {
      context.fillStyle = color;
    }
    context.fillText(text, x, y);
  }

  return null
}

export default Text