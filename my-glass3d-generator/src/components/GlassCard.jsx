
const GlassCard = ({ style }) => {
  return (
    <div
      className="relative w-72 h-48 rounded-2xl shadow-xl flex items-center justify-center text-white text-xl font-semibold overflow-hidden transition-all duration-100"
      style={style}
    >
      <div className="absolute inset-0 bg-white/10 opacity-70"></div>
      <div className="relative z-10">Glassmorphism Card</div>
    </div>
  );
};

export default GlassCard;