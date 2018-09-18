'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CounterInput = function (_React$Component) {
	_inherits(CounterInput, _React$Component);

	function CounterInput(props) {
		_classCallCheck(this, CounterInput);

		var _this = _possibleConstructorReturn(this, (CounterInput.__proto__ || Object.getPrototypeOf(CounterInput)).call(this, props));

		_initialiseProps.call(_this);

		var _this$parseProps = _this.parseProps(),
		    value = _this$parseProps.value,
		    min = _this$parseProps.min,
		    max = _this$parseProps.max;

		_this.state = {
			value: value < min ? min : value > max ? max : value,
			min: min || 0,
			max: max || -1,
			plus: _this.props.plus || { type: 'glyph', value: 'fa fa-plus' },
			minus: _this.props.minus || { type: 'glyph', value: 'fa fa-minus' },
			styles: _this.props.styles || { cursor: 'pointer' }
		};
		return _this;
	}

	_createClass(CounterInput, [{
		key: 'parseProps',
		value: function parseProps() {
			return {
				value: parseInt(this.props.value, 10),
				min: parseInt(this.props.min, 10),
				max: parseInt(this.props.max, 10)
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _state = this.state,
			    value = _state.value,
			    plus = _state.plus,
			    minus = _state.minus,
			    styles = _state.styles;


			return _react2.default.createElement(
				'div',
				{ className: 'input-group counter-input d-flex justify-content-between w-100' },
				_react2.default.createElement(
					'span',
					{ className: 'input-group-addon w-100', style: styles, onClick: function onClick() {
							_this2._decrease(value);
						} },
					this.iconRender(minus)
				),
				_react2.default.createElement('input', { className: 'form-control text-center w-100', type: 'text', onChange: this._onChange, value: value }),
				_react2.default.createElement(
					'span',
					{ className: 'input-group-addon w-100', style: styles, onClick: function onClick() {
							_this2._increase(value);
						} },
					this.iconRender(plus)
				)
			);
		}
	}]);

	return CounterInput;
}(_react2.default.Component);

CounterInput.Proptypes = {
	value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
	min: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
	max: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
	plus: _propTypes2.default.object,
	minus: _propTypes2.default.object,
	styles: _propTypes2.default.object
};

var _initialiseProps = function _initialiseProps() {
	var _this3 = this;

	this.set = function (value) {
		_this3.setState({
			value: value
		});
		_this3.props.onChange(value);
	};

	this._onChange = function (e) {
		var new_value = e.target.value;

		// check for empty string or invalid values
		if (new_value === '') {
			_this3.set(_this3.state.min); // fallback to min value
		} else if (new_value > _this3.state.max && _this3.state.max !== -1 || new_value < _this3.state.min) {
			return; // don't update the value
		} else if (typeof new_value != 'number') {
			var parsed = parseInt(new_value, 10); // try to parse the number

			// if parsed is not a number
			if (isNaN(parsed)) {
				_this3.set(_this3.state.min); // fallback to min value
			} else {
				// if parsed succesfully update the value
				_this3.set(parsed);
			}
		}
	};

	this._increase = function (value) {
		if (value === '') {
			_this3.set(_this3.state.min); // fallback to min value
		} else {
			var parsed = parseInt(value, 10);

			// if parsed is not a number
			if (isNaN(parsed)) {
				_this3.set(_this3.state.min); // fallback to min value
			} else {
				if (value < _this3.state.max || _this3.state.max === -1) {
					_this3.set(parsed + 1); // increment value
				}
			}
		}
	};

	this._decrease = function (value) {
		if (value === '') {
			_this3.set(_this3.state.min); // fallback to min value
		} else {
			var parsed = parseInt(value, 10);

			// if parsed is not a number
			if (isNaN(parsed)) {
				_this3.set(_this3.state.min); // fallback to min value
			} else {
				if (value > _this3.state.min) {
					_this3.set(parsed - 1); // increment value
				}
			}
		}
	};

	this.iconRender = function (element) {
		switch (element.type) {
			case 'img':
				return _react2.default.createElement('img', { style: element.styles, src: element.value, alt: 'icon' });
			default:
				return _react2.default.createElement('i', { className: element.value });
		}
	};
};

exports.default = CounterInput;
