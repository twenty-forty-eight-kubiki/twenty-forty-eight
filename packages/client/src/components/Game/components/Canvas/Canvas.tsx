import { createContext, FC, ReactNode, useContext, useEffect, useRef, useState } from 'react'

const CanvasContext = createContext<CanvasRenderingContext2D | null>(null)
const FrameContext = createContext(0)

export type CanvasProps = {
  height: number;
  width: number;
  dpr: number;
  children: ReactNode;
};

export const Canvas: FC<CanvasProps> = ({
  height,
  width,
  dpr,
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const actualWidth = width * dpr
  const actualHeight = height * dpr

  const canvasContext = canvasRef.current ? canvasRef?.current.getContext('2d') : null
  if (canvasContext) {
    canvasContext.scale(dpr, dpr)
  }

  const [frameCount, setFrameCount] = useState(0)
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setFrameCount(frameCount + 1)
    })

    return () => {
      cancelAnimationFrame(frameId)
    }
  }, [frameCount, setFrameCount])

  return (
    <CanvasContext.Provider value={canvasContext}>
      <FrameContext.Provider value={frameCount}>
        <canvas
          ref={canvasRef}
          height={actualHeight}
          width={actualWidth}
          style={{ width, height }}
        />
        {children}
      </FrameContext.Provider>
    </CanvasContext.Provider>
  )
}

export const useCanvas = (): CanvasRenderingContext2D | null => {
  useContext(FrameContext)
  const renderingContext = useContext(CanvasContext)
  return renderingContext
}

export const useCanvasUpdate = () => {
  return useContext(FrameContext)
}