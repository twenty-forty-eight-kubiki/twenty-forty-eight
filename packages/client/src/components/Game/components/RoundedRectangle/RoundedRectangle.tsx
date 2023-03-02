import React, { FC } from 'react'
import { useCanvas } from '../Context/Context'

export type RoundedRectangleProps = {
  x: number;
  y: number;
radius: number;
width: number;
height: number;
color?: string;
}

const RoundedRectangle: FC<RoundedRectangleProps> = ({
     x, y, radius, width, height, color
   }) => {
  const context = useCanvas()

  if (context) {
    if (color) {
      context.fillStyle = color
    }

    context.beginPath()

    context.moveTo((x + radius), y)
    context.lineTo((x + width - radius), y)
    context.quadraticCurveTo((x + width), y, (x + width), (y + radius))
    context.lineTo((x + width), (y + height - radius))
    context.quadraticCurveTo((x + width), (y + height), (x + width - radius), (y + height))
    context.lineTo((x + radius), (y + height))
    context.quadraticCurveTo(x, (y + height), x, (y + height - radius))
    context.lineTo(x, (y + radius))
    context.quadraticCurveTo(x, y, (x + radius), y)

    context.fill()
    context.closePath()
  }

  return null
}

export default RoundedRectangle