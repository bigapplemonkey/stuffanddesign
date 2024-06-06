const MarqueeText = ({ text }) => {
  return (
    <div className="marquee">
      <span className="marquee-type">{`${text} `.repeat(9)}</span>
    </div>
  );
};

export default MarqueeText;
