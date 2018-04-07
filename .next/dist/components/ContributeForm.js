'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sijeshp/MyWork/Ethereum/EtherumPractice_Cource3/kickstarter/components/ContributeForm.js';


var ContributeForm = function (_Component) {
    (0, _inherits3.default)(ContributeForm, _Component);

    function ContributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaignInsatance, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                campaignInsatance = (0, _campaign2.default)(_this.props.address);

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;
                                _context.next = 9;
                                return campaignInsatance.methods.contribute().send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.state.value, 'ether')
                                });

                            case 9:

                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);

                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](3);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:

                                _this.setState({ loading: false, value: '' });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 12]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ContributeForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, ' Amount to Contribute '), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    _this3.setState({ value: event.target.value });
                },
                label: 'Ether',
                labelPosition: 'right',
                placeholder: 'Enter the amount',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: ' Campaign contriubution failed !!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { secondary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Contribute'));
        }
    }]);

    return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ25JbnN0YW5jZSIsIndlYjMiLCJSb3V0ZXIiLCJDb250cmlidXRlRm9ybSIsInN0YXRlIiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ25JbnNhdGFuY2UiLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQU0sQUFBUSxBQUFTOztBQUMvQixBQUFPLEFBQXNCOzs7O0FBQzdCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7O2dPLEFBRUY7bUJBQVEsQUFDRSxBQUNOOzBCQUZJLEFBRVUsQUFDZDtxQkFISSxBLEFBR0k7QUFISixBQUNKLGlCQUtKLEE7aUdBQVcsaUJBQUEsQUFBTSxPQUFOO3VDQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFDQTtBQUZDLG9EQUVtQix3QkFBaUIsTUFBQSxBQUFLLE1BRnpDLEFBRW1CLEFBQTRCLEFBQ3REOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVcsTUFBTyxjQUh6QixBQUdQLEFBQWMsQUFBZ0M7O2dEQUh2QztnREFBQTt1Q0FNb0IsY0FBQSxBQUFLLElBTnpCLEFBTW9CLEFBQVM7O2lDQUExQjtBQU5ILG9EQUFBO2dEQUFBO3lEQU9HLEFBQWtCLFFBQWxCLEFBQTBCLGFBQTFCLEFBQXVDOzBDQUNuQyxTQUR3QyxBQUN4QyxBQUFTLEFBQ2Y7MkNBQVEsY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQVRyQyxBQU9HLEFBQTRDLEFBRXRDLEFBQWtDO0FBRkksQUFDOUMsaUNBREU7O2lDQUtOOzsrQ0FBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFacEMsQUFZSCxBQUE2Qzs7Z0RBWjFDO0FBQUE7O2lDQUFBO2dEQUFBO2dFQWVIOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBZjNCLEFBZUgsQUFBYyxBQUFvQjs7aUNBSXRDOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVcsT0FBTyxPQW5CekIsQUFtQlAsQUFBYyxBQUF5Qjs7aUNBbkJoQztpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQXVCRDt5QkFDTjs7bUNBQ0ksQUFBQyx1Q0FBSyxVQUFZLEtBQWxCLEFBQXVCLFVBQVUsT0FBUyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQWpELEFBQXVEOzhCQUF2RDtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwyQ0FBQSxBQUFDO3VCQUNZLEtBQUEsQUFBSyxNQURsQixBQUN3QixBQUNwQjswQkFBYSx5QkFBUyxBQUNsQjsyQkFBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLE1BQUEsQUFBTSxPQUE1QixBQUFjLEFBQXFCLEFBQ3RDO0FBSkwsQUFLSTt1QkFMSixBQUtVLEFBQ047K0JBTkosQUFNa0IsQUFDZDs2QkFQSixBQU9rQjs7OEJBUGxCO2dDQUhSLEFBQ0ksQUFFSSxBQVVKO0FBVkk7QUFDSSxpQ0FTUixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLHFDQUFvQyxTQUFVLEtBQUEsQUFBSyxNQUF6RSxBQUErRTs4QkFBL0U7Z0NBYkosQUFhSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxXQUFSLE1BQWtCLFNBQVMsS0FBQSxBQUFLLE1BQWhDLEFBQXNDOzhCQUF0QztnQ0FBQTtBQUFBO2VBZlIsQUFDSSxBQWNJLEFBS1g7Ozs7O0FBcER3QixBLEFBdUQ3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2lqZXNocC9NeVdvcmsvRXRoZXJldW0vRXRoZXJ1bVByYWN0aWNlX0NvdXJjZTMva2lja3N0YXJ0ZXIifQ==