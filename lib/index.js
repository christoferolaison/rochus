"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (_ref) {
	var display = _ref.display,
	    flex = _ref.flex,
	    props = _objectWithoutProperties(_ref, ["display", "flex"]);

	return {
		sx: {
			display: display,
			flex: flex

		},
		props: props
	};
};