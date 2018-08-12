'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; /**
                    * Created by kbr0003 on 15/07/18.
                    */


if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in browser with metamask
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    //we are in server or - browser with no metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/jXHLiLZ7ue2K1sv45YQA');
    web3 = new _web2.default(provider);
}

//const

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsQUFBTzs7Ozs7O0FBRVAsSUFBSSxZQUFKLEdBTEE7Ozs7O0FBT0EsSUFBRyxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQWxELEFBQTJELGFBQWEsQUFDckU7QUFDQztXQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFDL0I7QUFIRCxPQUdNLEFBQ0Y7QUFDQTtRQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQixhQUFwQyxBQUFpQixBQUNiLEFBRUo7V0FBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNuQjs7O0FBRUQsQUFFQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3Zpc2hudS9jb2RlL3Byb2plY3QtYnV0YXJpbi1uZXcifQ==