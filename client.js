const thrift = require('thrift');
const WjwService = require('./gen-nodejs/WjwService.js');
const ttypes = require('./gen-nodejs/wjw_types');

const transport = thrift.TBufferedTransport;
const protocol = thrift.TBinaryProtocol;

const connection = thrift.createConnection("localhost", 7911, {
  transport,
  protocol,
});

const client = thrift.createClient(WjwService, connection);

connection.on('error', (err) => {
  console.log(err);
});


const queryWjwData = (param) => {
  client.queryWjwData(param, (err, res) => {
    if(err){
      console.error('失败！', err);
    }else {
      console.log('成功！');
    }
  });
};


const param = new ttypes.WjwParamType({
  latitude: 22.554597,
  longitude: 113.953881,
});

queryWjwData(param);