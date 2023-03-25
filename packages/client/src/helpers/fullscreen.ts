import { FullscreenDocument, FullscreenElement } from '../types/types';

const fullscreenDocument = document as FullscreenDocument;

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
  if (fullscreenDocument.exitFullscreen) {
    fullscreenDocument.exitFullscreen();
  } else if (fullscreenDocument.mozCancelFullScreen) {
    fullscreenDocument.mozCancelFullScreen();
  } else if (fullscreenDocument.webkitExitFullscreen) {
    fullscreenDocument.webkitExitFullscreen();
  } else if (fullscreenDocument.msExitFullscreen) {
    fullscreenDocument.msExitFullscreen();
  }
}

function checkFullscreen(): Element | null {
  return (
    fullscreenDocument.fullscreenElement ||
    fullscreenDocument.mozFullScreenElement ||
    fullscreenDocument.webkitFullscreenElement ||
    fullscreenDocument.msFullscreenElement
  );
}

export const Fullscreen = {
  check: checkFullscreen,
  exit: exitFullscreen,
  enter: enterFullscreen
};
