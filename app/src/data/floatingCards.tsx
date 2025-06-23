import React from 'react';
import { FloatingCard } from '../types';

export const floatingCards: FloatingCard[] = [
  {
    id: 1,
    content: (
      <div className="w-24 h-32 bg-gray-800 rounded-lg flex items-center justify-center">
        <div className="text-white text-xs">Bonjour</div>
      </div>
    ),
    position: { top: '15%', left: '15%' },
    delay: 100,
    rotation: '-15deg',
    color: 'bg-green-400/80'
  },
  {
    id: 2,
    content: (
      <div className="w-20 h-12 bg-pink-300 rounded-lg"></div>
    ),
    position: { top: '10%', left: '80%' },
    delay: 100,
    rotation: '10deg',
    color: 'bg-pink-400/80'
  },
  {
    id: 3,
    content: (
      <div className="w-24 h-32 bg-orange-200 rounded-lg p-2">
        <div className="w-full h-6 bg-orange-400 rounded mb-2"></div>
        <div className="w-full h-16 bg-white rounded"></div>
      </div>
    ),
    position: { top: '45%', left: '10%' },
    delay: 100,
    rotation: '-8deg',
    color: 'bg-orange-300/80'
  },
  {
    id: 4,
    content: (
      <div className="w-20 h-24 bg-blue-200 rounded-lg p-2">
        <div className="w-full h-4 bg-blue-400 rounded mb-1"></div>
        <div className="w-full h-12 bg-white rounded"></div>
      </div>
    ),
    position: { top: '65%', left: '85%' },
    delay: 100,
    rotation: '12deg',
    color: 'bg-blue-300/80'
  },
  {
    id: 5,
    content: (
      <div className="w-24 h-20 bg-purple-200 rounded-lg p-2">
        <div className="w-full h-3 bg-purple-400 rounded mb-1"></div>
        <div className="w-3/4 h-3 bg-purple-300 rounded mb-1"></div>
        <div className="w-1/2 h-3 bg-purple-300 rounded"></div>
      </div>
    ),
    position: { top: '35%', left: '88%' },
    delay: 100,
    rotation: '-5deg',
    color: 'bg-purple-300/80'
  }
];