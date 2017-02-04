'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactTabledata = require('react-tabledata');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tableasync = function (_Component) {
    _inherits(Tableasync, _Component);

    function Tableasync(props) {
        _classCallCheck(this, Tableasync);

        var _this = _possibleConstructorReturn(this, (Tableasync.__proto__ || Object.getPrototypeOf(Tableasync)).call(this, props));

        _this.method = _this.props.method ? _this.props.method : 'get';
        _this.rowsToDisplay = 10;
        _this.currentPage = 1;
        _this.state = {
            datas: []
        };
        return _this;
    }

    _createClass(Tableasync, [{
        key: 'getSkip',
        value: function getSkip() {
            return (this.currentPage - 1) * this.rowsToDisplay;
        }
    }, {
        key: 'getTake',
        value: function getTake() {
            return this.rowsToDisplay;
        }
    }, {
        key: 'getRequestHeaders',
        value: function getRequestHeaders() {
            var headers = {};
            if (this.props.requestHeaders) {
                headers = this.props.requestHeaders(headers);
            }
            return headers;
        }
    }, {
        key: 'getRequestData',
        value: function getRequestData() {
            var data = {
                skip: this.getSkip(),
                take: this.getTake()
            };
            if (this.props.requestData) {
                data = this.props.requestData(data);
            }
            return data;
        }
    }, {
        key: 'bindDatas',
        value: function bindDatas() {
            var _this2 = this;

            this.fetchDatas().then(function (datas) {
                _this2.setState({ datas: datas });
            });
        }
    }, {
        key: 'fetchDatas',
        value: function fetchDatas() {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
                _axios2.default.request({
                    url: _this3.props.url,
                    method: _this3.method,
                    data: _this3.getRequestData(),
                    headers: _this3.getRequestHeaders()
                }).then(function (response) {
                    return resolve(response.data, response);
                }).catch(function (response) {
                    return reject(response);
                });
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.bindDatas();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactTabledata.Tabledata,
                    {
                        datas: this.state.datas,
                        tr: this.props.tr,
                        th: this.props.th,
                        td: this.props.td,
                        thead: this.props.thead,
                        table: this.props.table,
                        tbody: this.props.tbody },
                    this.props.children
                )
            );
        }
    }]);

    return Tableasync;
}(_react.Component);

exports.default = Tableasync;