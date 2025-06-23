'use client'
import React, { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorState, setCursorState] = useState('default');
  const [cursorText, setCursorText] = useState('');

  const updateCursor = (state, text = '') => {
    setCursorState(state);
    setCursorText(text);
  };

  return (
    <CursorContext.Provider value={{
      cursorState,
      cursorText,   
      setCursorState,
      setCursorText,
      updateCursor
    }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};
