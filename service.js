const thrift = require('thrift');
const WjwService = require('./gen-nodejs/WjwService');
let qs = require("qs");
const getJson = require('./api/queryData');

const server = thrift.createServer(WjwService, {
  queryWjwData: async (param, result) => {
    const postParam = {
      ...param,
      page: 1,
      pageSize: 10,
      queryType: 0,
    };
    const params = qs.stringify(postParam);
    const responseData = await getJson(params);
    result(null, responseData)
  },
});

server.listen(7911);
console.log('server start');
