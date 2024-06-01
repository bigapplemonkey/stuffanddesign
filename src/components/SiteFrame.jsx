const SiteFrame = ({ isDark = true }) => {
  const borderColor = isDark === true ? ' border-dark' : ' border-light';
  return (
    <div className="main-frame">
      <div className={`corner-top-left${borderColor}`}></div>
      <div className={`corner-top-right${borderColor}`}></div>
      <div className={`corner-bottom-left${borderColor}`}></div>
      <div className={`corner-bottom-right${borderColor}`}></div>
    </div>
  );
};

export default SiteFrame;
