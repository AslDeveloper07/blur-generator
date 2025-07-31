
const GlassCard = ({ style }) => {
  return (
    <div
      className=" w-72 h-48 rounded-2xl shadow-xl flex items-center justify-center text-white text-xl font-semibold overflow-hidden transition-all duration-100"
      style={style}
    >
      <div className=""></div>
    </div>
  );
};

export default GlassCard;