'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface UIContextType {
  isDraggable: boolean;
  toggleDraggable: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDraggable, setIsDraggable] = useState(false); // Default to false for better mobile/initial UX

  useEffect(() => {
    // Load preference from localStorage
    const saved = localStorage.getItem('isDraggable');
    if (saved !== null) {
      setIsDraggable(saved === 'true');
    } else {
      // Default true on desktop, false on mobile
      const isMobile = window.innerWidth < 768;
      setIsDraggable(!isMobile);
    }
  }, []);

  const toggleDraggable = () => {
    setIsDraggable((prev) => {
      const newValue = !prev;
      localStorage.setItem('isDraggable', String(newValue));
      return newValue;
    });
  };

  return (
    <UIContext.Provider value={{ isDraggable, toggleDraggable }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};
