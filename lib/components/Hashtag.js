"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Hashtag;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Hashtag(props) {
  var attributes = props.attributes,
      node = props.node,
      children = props.children,
      editor = props.editor,
      readOnly = props.readOnly;


  if (!editor.props.onClickHashtag) {
    return children;
  }

  return React.createElement(
    "a",
    _extends({}, attributes, {
      href: readOnly ? node.text : undefined,
      onClick: readOnly ? function (ev) {
        if (editor.props.onClickHashtag) {
          ev.preventDefault();
          editor.props.onClickHashtag(node.text);
        }
      } : undefined
    }),
    children
  );
}