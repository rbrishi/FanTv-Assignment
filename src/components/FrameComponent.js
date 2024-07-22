import RoleTypes from "./RoleTypes";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`role-types-parent ${className}`}>
      <div className="role-types1">
        <h1 className="content-nodes">Content Nodes</h1>
        <div className="content-roles">
          <div className="roles-description">
            <div className="content-nodes-earn">
              Content Nodes, Earn rewards for supplying their GPU, Storage and
              bandwidth for dCDN
            </div>
          </div>
          <div className="pattern-container1">
            <div className="validator-description">
              <img className="pattern-icon1" alt="" src="/pattern.svg" />
              <div className="validator-description-child" />
            </div>
            <button className="deploy-button">
              <div className="deploy-button-child" />
              <div className="deploy-container">
                <div className="deploy">Deploy</div>
              </div>
              <img
                className="vuesaxboldarrow-right-icon1"
                alt=""
                src="/vuesaxboldarrowright-1.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <RoleTypes
        orchestrators="Orchestrators"
        orchestratorsWillBeRespon="Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance"
        pattern="/pattern-1.svg"
        patternElements="/pattern-elements@2x.png"
      />
      <RoleTypes
        orchestrators="Validators"
        orchestratorsWillBeRespon="Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated."
        pattern="/pattern-2.svg"
        patternElements="/frame-512918690-1@2x.png"
        propBackgroundColor="#adffe4"
      />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
