'use client';

import React from 'react';
import { useUI } from '@/providers/ui-provider';
import { motion, AnimatePresence } from 'framer-motion';

export const DragToggle: React.FC = () => {
  const { isDraggable, toggleDraggable } = useUI();

  return (
    <div className="fixed top-6 right-6 z-[100] flex flex-col items-end gap-3">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleDraggable}
        className={`px-6 py-3 rounded-full border-2 border-black font-bold text-sm tracking-widest uppercase transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 ${
          isDraggable ? 'bg-yellow-400 text-black' : 'bg-white text-gray-400'
        }`}
      >
        <span className={`w-3 h-3 rounded-full ${isDraggable ? 'bg-green-600 animate-pulse' : 'bg-gray-300'}`} />
        {isDraggable ? 'Designer Mode: ON' : 'Designer Mode: OFF'}
      </motion.button>
      
      <AnimatePresence>
        {isDraggable && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-black text-white text-[10px] px-3 py-1 rounded-lg font-mono uppercase tracking-tighter shadow-xl"
          >
            Drag notes to reorganize ✨
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
