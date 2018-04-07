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

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, null, _react2.default.createElement('h3', null, ' Campaign Show '), _react2.default.createElement(_semanticUiReact.Grid, null, _react2.default.createElement(_semanticUiReact.Grid.Row, null, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10 }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6 }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address }))), _react2.default.createElement(_semanticUiReact.Grid.Row, null, _react2.default.createElement(_semanticUiReact.Grid.Column, null, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests' }, _react2.default.createElement('a', null, _react2.default.createElement(_semanticUiReact.Button, { secondary: true }, '  View Request ')))))));
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