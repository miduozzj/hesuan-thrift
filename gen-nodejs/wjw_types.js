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


var ttypes = module.exports = {};
var WjwParamType = module.exports.WjwParamType = function(args) {
  this.latitude = null;
  this.longitude = null;
  if (args) {
    if (args.latitude !== undefined && args.latitude !== null) {
      this.latitude = args.latitude;
    }
    if (args.longitude !== undefined && args.longitude !== null) {
      this.longitude = args.longitude;
    }
  }
};
WjwParamType.prototype = {};
WjwParamType.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.DOUBLE) {
        this.latitude = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.DOUBLE) {
        this.longitude = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

WjwParamType.prototype.write = function(output) {
  output.writeStructBegin('WjwParamType');
  if (this.latitude !== null && this.latitude !== undefined) {
    output.writeFieldBegin('latitude', Thrift.Type.DOUBLE, 1);
    output.writeDouble(this.latitude);
    output.writeFieldEnd();
  }
  if (this.longitude !== null && this.longitude !== undefined) {
    output.writeFieldBegin('longitude', Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.longitude);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var WjwDataType = module.exports.WjwDataType = function(args) {
  this.address = null;
  this.areaName = null;
  this.code = null;
  this.communityName = null;
  this.createTime = null;
  this.distance = null;
  this.id = null;
  this.idCommunity1 = null;
  this.latitude = null;
  this.longitude = null;
  this.name = null;
  this.phone = null;
  this.serverAllday = null;
  this.serverNight = null;
  this.serverPeople = null;
  this.serverPeopleInt = null;
  this.serverTime = null;
  this.status = null;
  this.streetName = null;
  this.updateTime = null;
  this.workerNumber = null;
  if (args) {
    if (args.address !== undefined && args.address !== null) {
      this.address = args.address;
    }
    if (args.areaName !== undefined && args.areaName !== null) {
      this.areaName = args.areaName;
    }
    if (args.code !== undefined && args.code !== null) {
      this.code = args.code;
    }
    if (args.communityName !== undefined && args.communityName !== null) {
      this.communityName = args.communityName;
    }
    if (args.createTime !== undefined && args.createTime !== null) {
      this.createTime = args.createTime;
    }
    if (args.distance !== undefined && args.distance !== null) {
      this.distance = args.distance;
    }
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.idCommunity1 !== undefined && args.idCommunity1 !== null) {
      this.idCommunity1 = args.idCommunity1;
    }
    if (args.latitude !== undefined && args.latitude !== null) {
      this.latitude = args.latitude;
    }
    if (args.longitude !== undefined && args.longitude !== null) {
      this.longitude = args.longitude;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.phone !== undefined && args.phone !== null) {
      this.phone = args.phone;
    }
    if (args.serverAllday !== undefined && args.serverAllday !== null) {
      this.serverAllday = args.serverAllday;
    }
    if (args.serverNight !== undefined && args.serverNight !== null) {
      this.serverNight = args.serverNight;
    }
    if (args.serverPeople !== undefined && args.serverPeople !== null) {
      this.serverPeople = args.serverPeople;
    }
    if (args.serverPeopleInt !== undefined && args.serverPeopleInt !== null) {
      this.serverPeopleInt = args.serverPeopleInt;
    }
    if (args.serverTime !== undefined && args.serverTime !== null) {
      this.serverTime = args.serverTime;
    }
    if (args.status !== undefined && args.status !== null) {
      this.status = args.status;
    }
    if (args.streetName !== undefined && args.streetName !== null) {
      this.streetName = args.streetName;
    }
    if (args.updateTime !== undefined && args.updateTime !== null) {
      this.updateTime = args.updateTime;
    }
    if (args.workerNumber !== undefined && args.workerNumber !== null) {
      this.workerNumber = args.workerNumber;
    }
  }
};
WjwDataType.prototype = {};
WjwDataType.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRING) {
        this.address = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.areaName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.code = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.communityName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.createTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.DOUBLE) {
        this.distance = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I64) {
        this.id = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I64) {
        this.idCommunity1 = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.latitude = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.longitude = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.phone = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.BYTE) {
        this.serverAllday = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.BYTE) {
        this.serverNight = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.STRING) {
        this.serverPeople = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 16:
      if (ftype == Thrift.Type.BYTE) {
        this.serverPeopleInt = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      case 17:
      if (ftype == Thrift.Type.STRING) {
        this.serverTime = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 18:
      if (ftype == Thrift.Type.BYTE) {
        this.status = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      case 19:
      if (ftype == Thrift.Type.STRING) {
        this.streetName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.I64) {
        this.updateTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 21:
      if (ftype == Thrift.Type.BYTE) {
        this.workerNumber = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

WjwDataType.prototype.write = function(output) {
  output.writeStructBegin('WjwDataType');
  if (this.address !== null && this.address !== undefined) {
    output.writeFieldBegin('address', Thrift.Type.STRING, 1);
    output.writeString(this.address);
    output.writeFieldEnd();
  }
  if (this.areaName !== null && this.areaName !== undefined) {
    output.writeFieldBegin('areaName', Thrift.Type.STRING, 2);
    output.writeString(this.areaName);
    output.writeFieldEnd();
  }
  if (this.code !== null && this.code !== undefined) {
    output.writeFieldBegin('code', Thrift.Type.STRING, 3);
    output.writeString(this.code);
    output.writeFieldEnd();
  }
  if (this.communityName !== null && this.communityName !== undefined) {
    output.writeFieldBegin('communityName', Thrift.Type.STRING, 4);
    output.writeString(this.communityName);
    output.writeFieldEnd();
  }
  if (this.createTime !== null && this.createTime !== undefined) {
    output.writeFieldBegin('createTime', Thrift.Type.I64, 5);
    output.writeI64(this.createTime);
    output.writeFieldEnd();
  }
  if (this.distance !== null && this.distance !== undefined) {
    output.writeFieldBegin('distance', Thrift.Type.DOUBLE, 6);
    output.writeDouble(this.distance);
    output.writeFieldEnd();
  }
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I64, 7);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  if (this.idCommunity1 !== null && this.idCommunity1 !== undefined) {
    output.writeFieldBegin('idCommunity1', Thrift.Type.I64, 8);
    output.writeI64(this.idCommunity1);
    output.writeFieldEnd();
  }
  if (this.latitude !== null && this.latitude !== undefined) {
    output.writeFieldBegin('latitude', Thrift.Type.STRING, 9);
    output.writeString(this.latitude);
    output.writeFieldEnd();
  }
  if (this.longitude !== null && this.longitude !== undefined) {
    output.writeFieldBegin('longitude', Thrift.Type.STRING, 10);
    output.writeString(this.longitude);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 11);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.phone !== null && this.phone !== undefined) {
    output.writeFieldBegin('phone', Thrift.Type.STRING, 12);
    output.writeString(this.phone);
    output.writeFieldEnd();
  }
  if (this.serverAllday !== null && this.serverAllday !== undefined) {
    output.writeFieldBegin('serverAllday', Thrift.Type.BYTE, 13);
    output.writeByte(this.serverAllday);
    output.writeFieldEnd();
  }
  if (this.serverNight !== null && this.serverNight !== undefined) {
    output.writeFieldBegin('serverNight', Thrift.Type.BYTE, 14);
    output.writeByte(this.serverNight);
    output.writeFieldEnd();
  }
  if (this.serverPeople !== null && this.serverPeople !== undefined) {
    output.writeFieldBegin('serverPeople', Thrift.Type.STRING, 15);
    output.writeString(this.serverPeople);
    output.writeFieldEnd();
  }
  if (this.serverPeopleInt !== null && this.serverPeopleInt !== undefined) {
    output.writeFieldBegin('serverPeopleInt', Thrift.Type.BYTE, 16);
    output.writeByte(this.serverPeopleInt);
    output.writeFieldEnd();
  }
  if (this.serverTime !== null && this.serverTime !== undefined) {
    output.writeFieldBegin('serverTime', Thrift.Type.STRING, 17);
    output.writeString(this.serverTime);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.BYTE, 18);
    output.writeByte(this.status);
    output.writeFieldEnd();
  }
  if (this.streetName !== null && this.streetName !== undefined) {
    output.writeFieldBegin('streetName', Thrift.Type.STRING, 19);
    output.writeString(this.streetName);
    output.writeFieldEnd();
  }
  if (this.updateTime !== null && this.updateTime !== undefined) {
    output.writeFieldBegin('updateTime', Thrift.Type.I64, 20);
    output.writeI64(this.updateTime);
    output.writeFieldEnd();
  }
  if (this.workerNumber !== null && this.workerNumber !== undefined) {
    output.writeFieldBegin('workerNumber', Thrift.Type.BYTE, 21);
    output.writeByte(this.workerNumber);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

