import { createContext, FC, ReactNode, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'

const CanvasContext = createContext(null)
const FrameContext = createContext(0)

export type CanvasProps = {
  height: number;
  width: number;
  dpr: number;
  isAnimating: boolean;
  children: ReactNode;
};

export const Canvas: FC<CanvasProps> = ({
    height,
    width,
    dpr,
    isAnimating,
    children
  }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const actualWidth = width * dpr
  const actualHeight = height * dpr

  const [context, setContext] = useState<CanvasRenderingContext2D>()
  useEffect(() => {
    if (canvasRef.current !== null) {
      const canvasContext = canvasRef.current.getContext('2d')
      if (canvasContext) {
        canvasContext.scale(dpr, dpr)
        setContext(canvasContext)
      }
    }
  }, [dpr])

  const [frameCount, setFrameCount] = useState(0)
  useEffect(() => {
    let frameId: number
    if (isAnimating) {
      frameId = requestAnimationFrame(() => {
        setFrameCount(frameCount + 1)
      })
    }
    return () => {
      cancelAnimationFrame(frameId)
    }
  }, [isAnimating, frameCount, setFrameCount])

  useLayoutEffect(() => {
    setFrameCount(0)
  }, [width, height])

  if (context) {
    context.clearRect(0, 0, actualWidth, actualHeight)
  }

  return (
    // @ts-ignore
    <CanvasContext.Provider value={context}>
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