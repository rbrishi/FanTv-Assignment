import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <FrameComponent2 />
      <section className="home-inner">
        <div className="rectangle-parent">
          <div className="frame-child" />
          <FrameComponent1 />
          <FrameComponent />
        </div>
      </section>
      <section className="transition-container">
        <div className="transition-header-parent">
          <div className="transition-header">
            <h1 className="the-transition-cdn-dcdn">The transition CDN-dCDN</h1>
          </div>
          <div className="fancloud-pioneers-a">
            FanCloud pioneers a new era of connectivity with its decentralised
            content delivery network (dCDN), leveraging a global network of
            community-powered nodes. By harnessing a decentralised architecture,
            dCDN drastically reduces data transfer and compute costs while
            enhancing load time. Join FanCloud’s dCDN network and experience the
            future of seamless, secure and community- driven consumption
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
