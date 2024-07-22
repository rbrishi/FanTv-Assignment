import { useMemo } from "react";
import PropTypes from "prop-types";
import "./RoleTypes.css";

const RoleTypes = ({
  className = "",
  orchestrators,
  orchestratorsWillBeRespon,
  pattern,
  patternElements,
  propBackgroundColor,
}) => {
  const roleTypesStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={`role-types ${className}`} style={roleTypesStyle}>
      <h1 className="orchestrators">{orchestrators}</h1>
      <div className="orchestrators-will-be-responsi-parent">
        <div className="orchestrators-will-be">{orchestratorsWillBeRespon}</div>
        <div className="pattern-container-wrapper">
          <div className="pattern-container">
            <img className="pattern-icon" alt="" src={pattern} />
            <img
              className="pattern-elements-icon"
              alt=""
              src={patternElements}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

RoleTypes.propTypes = {
  className: PropTypes.string,
  orchestrators: PropTypes.string,
  orchestratorsWillBeRespon: PropTypes.string,
  pattern: PropTypes.string,
  patternElements: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
};

export default RoleTypes;
