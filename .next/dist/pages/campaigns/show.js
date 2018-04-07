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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/sijeshp/MyWork/Ethereum/EtherumPractice_Cource3/kickstarter/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                minimumContribution = _props.minimumContribution,
                contractBalance = _props.contractBalance,
                noOfRequest = _props.noOfRequest,
                noOfApprovers = _props.noOfApprovers,
                contractManager = _props.contractManager;

            var items = [{
                header: contractManager,
                meta: 'address of manager',
                description: 'Manager created this campaign and can create request to withdraw money ',
                style: { overflowWrap: 'break-word' }

            }, {
                header: minimumContribution,
                meta: ' Minimum contribution in Wei',
                description: ' You must contribute atlease this much Wei to become an approver ',
                style: { overflowWrap: 'break-word' }

            }, {
                header: noOfRequest,
                meta: ' No of requests',
                description: ' Request for withdrawing money from the contract. Request must be approved by the approvers',
                style: { overflowWrap: 'break-word' }

            }, {
                header: noOfApprovers,
                meta: ' No of approvers',
                description: ' Number of people doneted for this campaign',
                style: { overflowWrap: 'break-word' }

            }, {
                header: _web2.default.utils.fromWei(contractBalance, 'ether'),
                meta: ' Balance amount in ether',
                description: ' Available balance amount in the contract for spending ',
                style: { overflowWrap: 'break-word' }

            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, ' Campaign Show '), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, '  View Request ')))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaignInstance, campaignSummary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaignInstance = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaignInstance.methods.getSummary().call();

                            case 3:
                                campaignSummary = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    minimumContribution: campaignSummary[0],
                                    contractBalance: campaignSummary[1],
                                    noOfRequest: campaignSummary[2],
                                    noOfApprovers: campaignSummary[3],
                                    contractManager: campaignSummary[4]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJMYXlvdXQiLCJDYW1wYWlnbkluc3RhbmNlIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImNvbnRyYWN0QmFsYW5jZSIsIm5vT2ZSZXF1ZXN0Iiwibm9PZkFwcHJvdmVycyIsImNvbnRyYWN0TWFuYWdlciIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJjYW1wYWlnbkluc3RhbmNlIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJjYW1wYWlnblN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQVEsQUFBTzs7QUFDdkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBUSxBQUFXOzs7Ozs7O0lBRWIsQTs7Ozs7Ozs7Ozs7c0NBaUJZO3lCQVFOLEtBUk0sQUFRRDtnQkFSQyxBQUdOLDZCQUhNLEFBR047Z0JBSE0sQUFJTix5QkFKTSxBQUlOO2dCQUpNLEFBS04scUJBTE0sQUFLTjtnQkFMTSxBQU1OLHVCQU5NLEFBTU47Z0JBTk0sQUFPTix5QkFQTSxBQU9OLEFBR0o7O2dCQUFNO3dCQUNGLEFBQ2EsQUFDVDtzQkFGSixBQUVXLEFBQ1A7NkJBSEosQUFHa0IsQUFDZDt1QkFBTyxFQUFFLGNBTEgsQUFDVixBQUlXLEFBQWtCOztBQUo3QixBQUNJLGFBRk07d0JBU1YsQUFDYSxBQUNUO3NCQUZKLEFBRVcsQUFDUDs2QkFISixBQUdrQixBQUNkO3VCQUFPLEVBQUUsY0FiSCxBQVNWLEFBSVcsQUFBa0I7O0FBSjdCLEFBQ0k7d0JBT0osQUFDYSxBQUNUO3NCQUZKLEFBRVcsQUFDUDs2QkFISixBQUdrQixBQUNkO3VCQUFPLEVBQUUsY0FyQkgsQUFpQlYsQUFJVyxBQUFrQjs7QUFKN0IsQUFDSTt3QkFNSixBQUNhLEFBQ1Q7c0JBRkosQUFFVyxBQUNQOzZCQUhKLEFBR2tCLEFBQ2Q7dUJBQU8sRUFBRSxjQTVCSCxBQXdCVixBQUlXLEFBQWtCOztBQUo3QixBQUNJO3dCQVFTLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixpQkFEaEMsQUFDYSxBQUFtQyxBQUM1QztzQkFGSixBQUVXLEFBQ1A7NkJBSEosQUFHa0IsQUFDZDt1QkFBTyxFQUFFLGNBcENqQixBQUFjLEFBZ0NWLEFBSVcsQUFBa0IsQUFLakM7O0FBVEksQUFDSTs7aURBUUQsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FHRixBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLG9DQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSztBQURMO29CQURKLEFBQ0ksQUFDSyxBQUFLLEFBRVYsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsMENBQWUsU0FBVSxLQUFBLEFBQUssTUFBL0IsQUFBcUM7OEJBQXJDO2dDQU5aLEFBQ0ksQUFJSSxBQUNJLEFBR1I7QUFIUTtrQ0FHUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyw4QkFBSyx1QkFBdUIsS0FBQSxBQUFLLE1BQTVCLEFBQWtDLFVBQXhDOzhCQUFBO2dDQUFBLEFBQ1E7QUFEUjsrQkFDUSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFdBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQWhCaEMsQUFDSSxBQUVJLEFBU0ksQUFDSSxBQUNJLEFBQ1EsQUFDSSxBQVFuQzs7Ozs7aUhBOUY0QixBOzs7OztpQ0FDbkI7QSxtREFBbUIsd0JBQWlCLE1BQUEsQUFBTSxNLEFBQXZCLEFBQTZCOzt1Q0FDeEIsaUJBQUEsQUFBaUIsUUFBakIsQUFBeUIsYSxBQUF6QixBQUFzQzs7aUNBQTlEO0E7OzZDQUlRLE1BQUEsQUFBTSxNQURkLEFBQ29CLEFBQ3RCO3lEQUFzQixnQkFGcEIsQUFFb0IsQUFBZ0IsQUFDdEM7cURBQWtCLGdCQUhoQixBQUdnQixBQUFnQixBQUNsQztpREFBa0IsZ0JBSmhCLEFBSWdCLEFBQWdCLEFBQ2xDO21EQUFpQixnQkFMZixBQUtlLEFBQWdCLEFBQ2pDO3FEQUFrQixnQkFOaEIsQUFNZ0IsQUFBZ0IsQTtBQU5oQyxBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUmUsQSxBQW1HM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2lqZXNocC9NeVdvcmsvRXRoZXJldW0vRXRoZXJ1bVByYWN0aWNlX0NvdXJjZTMva2lja3N0YXJ0ZXIifQ==