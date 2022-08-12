//
// Autogenerated by Thrift Compiler (0.14.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;
var Int64 = require('node-int64');


var ttypes = require('./wjw_types');
//HELPER FUNCTIONS AND STRUCTURES

var WjwService_queryWjwData_args = function(args) {
  this.param = null;
  if (args) {
    if (args.param !== undefined && args.param !== null) {
      this.param = new ttypes.WjwParamType(args.param);
    }
  }
};
WjwService_queryWjwData_args.prototype = {};
WjwService_queryWjwData_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.param = new ttypes.WjwParamType();
        this.param.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

WjwService_queryWjwData_args.prototype.write = function(output) {
  output.writeStructBegin('WjwService_queryWjwData_args');
  if (this.param !== null && this.param !== undefined) {
    output.writeFieldBegin('param', Thrift.Type.STRUCT, 1);
    this.param.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var WjwService_queryWjwData_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.WjwDataType]);
    }
  }
};
WjwService_queryWjwData_result.prototype = {};
WjwService_queryWjwData_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        this.success = [];
        var _rtmp31 = input.readListBegin();
        var _size0 = _rtmp31.size || 0;
        for (var _i2 = 0; _i2 < _size0; ++_i2) {
          var elem3 = null;
          elem3 = new ttypes.WjwDataType();
          elem3.read(input);
          this.success.push(elem3);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

WjwService_queryWjwData_result.prototype.write = function(output) {
  output.writeStructBegin('WjwService_queryWjwData_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter4 in this.success) {
      if (this.success.hasOwnProperty(iter4)) {
        iter4 = this.success[iter4];
        iter4.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var WjwServiceClient = exports.Client = function(output, pClass) {
  this.output = output;
  this.pClass = pClass;
  this._seqid = 0;
  this._reqs = {};
};
WjwServiceClient.prototype = {};
WjwServiceClient.prototype.seqid = function() { return this._seqid; };
WjwServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };

WjwServiceClient.prototype.queryWjwData = function(param, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_queryWjwData(param);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_queryWjwData(param);
  }
};

WjwServiceClient.prototype.send_queryWjwData = function(param) {
  var output = new this.pClass(this.output);
  var params = {
    param: param
  };
  var args = new WjwService_queryWjwData_args(params);
  try {
    output.writeMessageBegin('queryWjwData', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

WjwServiceClient.prototype.recv_queryWjwData = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new WjwService_queryWjwData_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('queryWjwData failed: unknown result');
};
var WjwServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
};
WjwServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
};
WjwServiceProcessor.prototype.process_queryWjwData = function(seqid, input, output) {
  var args = new WjwService_queryWjwData_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.queryWjwData.length === 1) {
    Q.fcall(this._handler.queryWjwData.bind(this._handler),
      args.param
    ).then(function(result) {
      var result_obj = new WjwService_queryWjwData_result({success: result});
      output.writeMessageBegin("queryWjwData", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("queryWjwData", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.queryWjwData(args.param, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new WjwService_queryWjwData_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("queryWjwData", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("queryWjwData", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
