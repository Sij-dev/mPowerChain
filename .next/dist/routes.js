'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

// 
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGtCQUMwQixBQUQxQixrQkFFSyxBQUZMLElBRVMsQUFGVCx1QkFFK0IsQUFGL0IsbUJBR0ssQUFITCxJQUdTLEFBSFQsZ0NBR3dDLEFBSHhDLDZCQUlLLEFBSkwsSUFJUyxBQUpULG9DQUk0QyxBQUo1Qzs7QUFNRztBQUNILE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NpamVzaHAvTXlXb3JrL0V0aGVyZXVtL0V0aGVydW1QcmFjdGljZV9Db3VyY2UzL2tpY2tzdGFydGVyIn0=