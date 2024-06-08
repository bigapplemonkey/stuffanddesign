import transition from '../animations/Transition';
import WorkGrid from '../components/WorkGrid';

const About = () => {
  return (
    <div className="container">
      <header className="work-header">
        <div className="work-header-title">
          <h2 className="headline2">Works</h2>
          <p className="p-large">
            Crafting visually stunning interfaces that prioritize usability,
            accessibility and drive results
          </p>
        </div>
        <WorkGrid />
      </header>
    </div>
  );
};

export default transition(About);
