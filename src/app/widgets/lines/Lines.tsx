
interface LinesProps {
  rotate: number; // угол поворота круга
}

export const Lines: React.FC<LinesProps> = ({ rotate }) => {
  return (
    <>
    <div className="circle-container" style={{ transform: `rotate(${rotate}deg)` }}>
      <div className="circle-bg" />
      <div className="circle-dot dot-1" />
      <div className="circle-dot dot-2" />
      <div className="circle-dot dot-3" />
    </div>
    <div className="side-line"></div>
    </>
  );
};
