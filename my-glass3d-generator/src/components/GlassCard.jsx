import React from 'react';

const GlassCard = ({ style }) => {
  return (
    <div
      className="relative w-72 h-[690px] rounded-2xl shadow-xl flex items-center justify-center text-white text-xl font-semibold overflow-hidden transition-all duration-100"
      style={style}
    >
      <div className="absolute  inset-0 bg-white/10 opacity-70"></div> {/* Orqa fon shaffofligi */}
    </div>
  );
};

export default GlassCard;