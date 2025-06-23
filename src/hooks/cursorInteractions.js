import { useCursor } from '@/contexts/CursorContext';

export const useCursorInteractions = () => {
  const { updateCursor } = useCursor();

  const buttonHover = (text = '') => ({
    onMouseEnter: () => updateCursor('button', text),
    onMouseLeave: () => updateCursor('default')
  });

  const linkHover = (text = '') => ({
    onMouseEnter: () => updateCursor('link', text),
    onMouseLeave: () => updateCursor('default')
  });

  const textHover = (text = '') => ({
    onMouseEnter: () => updateCursor('text', text),
    onMouseLeave: () => updateCursor('default')
  });

  const cardHover = (text = '') => ({
    onMouseEnter: () => updateCursor('hover', text),
    onMouseLeave: () => updateCursor('default')
  });

  return {
    buttonHover,
    linkHover,
    textHover,
    cardHover,
    updateCursor
  };
};