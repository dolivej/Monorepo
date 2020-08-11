const React = require("react");

exports.wrapRootElement = ({ element }) => {
  return <div className="customScrollBar">{element}</div>;
};
