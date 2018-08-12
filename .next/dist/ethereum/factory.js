'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _onlineJudge = require('./build/onlineJudge.json');

var _onlineJudge2 = _interopRequireDefault(_onlineJudge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by kbr0003 on 28/07/18.
 */
var instance = new _web2.default.eth.Contract(JSON.parse(_onlineJudge2.default.interface), '0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhZ2luRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQXFCOzs7Ozs7QUFKNUI7OztBQU1BLElBQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FBUyxLQUFBLEFBQUssTUFBTSxzQkFBakMsQUFBc0IsQUFBMkIsWUFBbEUsQUFBaUIsQUFDYixBQUVKOztrQkFBQSxBQUFlIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdmlzaG51L2NvZGUvcHJvamVjdC1idXRhcmluLW5ldyJ9