import React, { useState, useEffect } from 'react';
import { FloatingCard } from '../types';

export const FloatingCardComponent: React.FC<{ card: FloatingCard }> = ({ card }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, card.delay);

    return () => clearTimeout(timer);
  }, [card.delay]);

  return (
    <div
      className={`absolute transition-all duration-100 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{
        top: card.position.top,
        left: card.position.left,
        transform: `rotate(${card.rotation})`,
      }}
    >
      <div className={`${card.color} p-4 rounded-xl shadow-lg backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-100`}>
        {card.content}
      </div>
    </div>
  );
};