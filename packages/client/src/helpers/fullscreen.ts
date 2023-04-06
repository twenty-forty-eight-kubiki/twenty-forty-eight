import { FullscreenDocument, FullscreenElement } from '../types/types';

// const fullscreenDocument = document as FullscreenDocument;

function enterFullscreen(element: FullscreenElement): void {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFullscreen(): void {
  if ((document as FullscreenDocument).exitFullscreen) {
    (document as FullscreenDocument).exitFullscreen();
  } else if ((document as FullscreenDocument).mozCancelFullScreen) {
    (document as FullscreenDocument).mozCancelFullScreen();
  } else if ((document as FullscreenDocument).webkitExitFullscreen) {
    (document as FullscreenDocument).webkitExitFullscreen();
  } else if ((document as FullscreenDocument).msExitFullscreen) {
    (document as FullscreenDocument).msExitFullscreen();
  }
}

function checkFullscreen(): Element | null {
  return (
    (document as FullscreenDocument).fullscreenElement ||
    (document as FullscreenDocument).mozFullScreenElement ||
    (document as FullscreenDocument).webkitFullscreenElement ||
    (document as FullscreenDocument).msFullscreenElement
  );
}

export const Fullscreen = {
  check: checkFullscreen,
  exit: exitFullscreen,
  enter: enterFullscreen
};
