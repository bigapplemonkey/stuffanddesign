import entry from '../animations/entry';
import transition from '../animations/Transition';
import SiteFrame from '../components/SiteFrame';

const Home = () => {
  return (
    <>
      <SiteFrame isDark={true} />
      <div className="container">
        <h1>Page Transitions In React</h1>
      </div>
    </>
  );
};

export default transition(Home);
